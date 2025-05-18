// src/app/tests/recommendation.route.test.ts
import { describe, it, expect, beforeEach, vi, type MockedFunction } from 'vitest'
import { GET, type Recommendations } from '@/app/api/recommendations/[student_id]/route'
import prisma from '@/app/backend/prisma/prisma'

// Capture the exact Prisma return types
type StudentReturn = Awaited<ReturnType<typeof prisma.student.findUnique>>
type ProposalsReturn = Awaited<ReturnType<typeof prisma.thesis_proposal.findMany>>

describe('GET /api/recommendations/[student_id]', () => {
  // We'll reassign these in beforeEach via spyOn(...)
  let findUniqueSpy: MockedFunction<typeof prisma.student.findUnique>
  let findManySpy: MockedFunction<typeof prisma.thesis_proposal.findMany>

  beforeEach(() => {
    vi.restoreAllMocks()

    // Spy on Prisma methods
    findUniqueSpy = vi.spyOn(prisma.student, 'findUnique') as MockedFunction<
      typeof prisma.student.findUnique
    >
    findManySpy = vi.spyOn(prisma.thesis_proposal, 'findMany') as MockedFunction<
      typeof prisma.thesis_proposal.findMany
    >
  })

  it('400 for invalid UUID format', async () => {
    const res = await GET(new Request('http://test'), {
      params: { student_id: 'not-a-uuid' },
    })
    expect(res.status).toBe(400)
    expect(await res.json()).toEqual({ error: 'Invalid student_id format' })
  })

  it('404 when student not found', async () => {
    // findUnique returns null
    findUniqueSpy.mockResolvedValueOnce(null)

    const studentId = '00000000-0000-0000-0000-000000000000'
    const res = await GET(new Request('https://test'), {
      params: { student_id: studentId },
    })

    expect(findUniqueSpy).toHaveBeenCalledWith({
      where: { student_id: studentId },
      include: { student_tag: { select: { tag_name: true } } },
    })
    expect(res.status).toBe(404)
    expect(await res.json()).toEqual({ error: 'Student not found' })
  })

  it('200 with empty arrays if no proposals', async () => {
    // stub a student with no tags
    const stubStudent = {
      student_id: '11111111-1111-1111-1111-111111111111',
      course_id: 'dummy',
      student_tag: [],
    } as StudentReturn
    findUniqueSpy.mockResolvedValueOnce(stubStudent)

    // stub no proposals
    findManySpy.mockResolvedValueOnce([] as ProposalsReturn)

    const res = await GET(new Request('https://test'), {
      params: { student_id: stubStudent!.student_id },
    })

    expect(findUniqueSpy).toHaveBeenCalled()
    expect(findManySpy).toHaveBeenCalled()
    expect(res.status).toBe(200)
    expect(await res.json()).toEqual({
      theses: [],
      professors: [],
    })
  })

  it('returns correctly scored top theses & professors', async () => {
    // 1️⃣ student with tags A & B
    const stubStudent: StudentReturn = {
      student_id: '22222222-2222-2222-2222-222222222222',
      course_id: 'dummy',
      student_tag: [{ tag_name: 'A' }, { tag_name: 'B' }],
    } as StudentReturn
    findUniqueSpy.mockResolvedValueOnce(stubStudent)

    // 2️⃣ three proposals
    const stubProposals = [
      {
        thesis_id: 't1',
        title: 'Alpha',
        supervisor_id: 's1',
        thesis_proposal_tag: [{ tag_name: 'A' }, { tag_name: 'B' }],
        supervisor: { user_parent: { name: 'Prof', surname: 'X' } },
      },
      {
        thesis_id: 't2',
        title: 'Beta',
        supervisor_id: 's2',
        thesis_proposal_tag: [{ tag_name: 'A' }],
        supervisor: { user_parent: { name: 'Prof', surname: 'Y' } },
      },
      {
        thesis_id: 't3',
        title: 'Gamma',
        supervisor_id: 's1',
        thesis_proposal_tag: [{ tag_name: 'A' }, { tag_name: 'C' }],
        supervisor: { user_parent: { name: 'Prof', surname: 'X' } },
      },
    ] as unknown as ProposalsReturn
    findManySpy.mockResolvedValueOnce(stubProposals)

    // 3️⃣ call
    const res = await GET(new Request('https://test'), {
      params: { student_id: stubStudent!.student_id },
    })
    expect(res.status).toBe(200)

    const { theses, professors } = (await res.json()) as Recommendations

    // only ≥2 matched tags in theses
    expect(theses).toEqual([
      { id: 't1', title: 'Alpha', matchedTags: ['A', 'B'] },
      { id: 't3', title: 'Gamma', matchedTags: ['A', 'C'] },
    ])

    // prof s1 average >0
    expect(professors).toEqual([
      { id: 's1', title: 'Prof X', matchedTags: [] },
    ])
  })
})

