import { describe, it, expect, beforeEach, vi, MockInstance } from 'vitest'
import { GET, type Recommendations } from '@/app/backend/api/recommendations/route'
import * as prismaModule from '../../app/backend/prisma/prisma' // mocking the actual prisma instance used in route.ts

type StudentReturn = Awaited<ReturnType<typeof prismaModule.prisma.student.findUnique>>
type ProposalsReturn = Awaited<ReturnType<typeof prismaModule.prisma.thesis_proposal.findMany>>

describe('GET /api/recommendations', () => {
  let findUniqueSpy: MockInstance<any>
  let findManySpy: MockInstance<any>

  beforeEach(() => {
    vi.restoreAllMocks()

    // Spy on the actual prisma instance in route.ts
    findUniqueSpy = vi.spyOn(prismaModule.prisma.student, 'findUnique')
    findManySpy = vi.spyOn(prismaModule.prisma.thesis_proposal, 'findMany')
  })

  it('400 for invalid UUID format', async () => {
    const res = await GET(new Request('https://test/api/recommendations?studentId=not-a-uuid'))
    expect(res.status).toBe(400)
    expect(await res.json()).toEqual({ error: 'Invalid or missing studentId' })
  })

  it('404 when student not found', async () => {
    findUniqueSpy.mockResolvedValueOnce(null)

    const studentId = '00000000-0000-0000-0000-000000000000'
    const res = await GET(new Request(`https://test/api/recommendations?studentId=${studentId}`))

    expect(findUniqueSpy).toHaveBeenCalledWith({
      where: { student_id: studentId },
      include: { student_tag: { select: { tag_name: true } } },
    })
    expect(res.status).toBe(404)
    expect(await res.json()).toEqual({ error: 'Student not found' })
  })

  it('200 with empty arrays if no proposals', async () => {
    const stubStudent: StudentReturn = {
      student_id: '11111111-1111-1111-1111-111111111111',
      course_id: 'dummy',
      student_tag: [],
    } as StudentReturn
    findUniqueSpy.mockResolvedValueOnce(stubStudent)
    findManySpy.mockResolvedValueOnce([] as ProposalsReturn)

    const res = await GET(new Request(`https://test/api/recommendations?studentId=${stubStudent.student_id}`))

    expect(findUniqueSpy).toHaveBeenCalled()
    expect(findManySpy).toHaveBeenCalled()
    expect(res.status).toBe(200)
    expect(await res.json()).toEqual({
      theses: [],
      professors: [],
    })
  })

  it('returns correctly scored top theses & professors', async () => {
    const stubStudent: StudentReturn = {
      student_id: '22222222-2222-2222-2222-222222222222',
      course_id: 'dummy',
      student_tag: [{ tag_name: 'A' }, { tag_name: 'B' }],
    } as StudentReturn
    findUniqueSpy.mockResolvedValueOnce(stubStudent)

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

    const res = await GET(new Request(`https://test/api/recommendations?studentId=${stubStudent.student_id}`))
    expect(res.status).toBe(200)

    const { theses, professors } = (await res.json()) as Recommendations

    expect(theses.length).toBeGreaterThan(0)
    expect(professors.length).toBeGreaterThan(0)
    expect(theses).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ id: 't1', title: 'Alpha' }),
        expect.objectContaining({ id: 't3', title: 'Gamma' }),
      ])
    )
    expect(professors).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ title: 'Prof X' }),
      ])
    )
  })
})
