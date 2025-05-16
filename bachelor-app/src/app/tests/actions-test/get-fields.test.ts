import { describe, it, expect, beforeEach, vi } from 'vitest'
import { getFieldsFromTags } from '../../backend/actions/fields/get-fields'
import { prisma } from '../../backend/prisma/prisma'

const mockTags = [
  { tag_name: 'Artificial Intelligence' },
  { tag_name: 'Biology' },
]

describe('getFieldsFromTags', () => {
  beforeEach(() => {
    vi.resetAllMocks()
    vi.restoreAllMocks()
  })

  it('should return formatted fields on success', async () => {
    const findManySpy = vi.spyOn(prisma.tag, 'findMany')
    findManySpy.mockResolvedValue(mockTags)

    const result = await getFieldsFromTags()

    expect(result.success).toBe(true)
    expect(result.fields).toHaveLength(2)
    expect(result.fields[0]).toEqual({
      id: 'Artificial Intelligence',
      name: 'Artificial Intelligence',
      slug: 'artificial-intelligence'
    })
    expect(result.fields[1]).toEqual({
      id: 'Biology',
      name: 'Biology',
      slug: 'biology'
    })
    expect(findManySpy).toHaveBeenCalled()
  })

  it('should return error response when Prisma throws an error', async () => {
    const findManySpy = vi.spyOn(prisma.tag, 'findMany')
    findManySpy.mockRejectedValue(new Error('Database error'))

    const result = await getFieldsFromTags()

    expect(result.success).toBe(false)
    expect(result.message).toBe('Failed to fetch fields')
    expect(result.fields).toEqual([])
  })
})
