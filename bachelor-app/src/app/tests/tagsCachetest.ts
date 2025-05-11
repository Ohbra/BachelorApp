// tests/tagsCache.test.ts
import { describe, it, expect, beforeAll } from 'vitest'
import { prismaTest, cleanupTestResources } from './utils/test-db'
import { getPredefinedTags, refreshTagCache } from '../backend/lib/tagsCache'

// insert tag before test
beforeAll(async () => {
  await prismaTest.tag.upsert({
    where: { tag_name: 'Big Data' },
    update: {},
    create: { tag_name: 'Big Data' }
  })
})

describe('tagsCache', () => {
  it('should return predefined tags from DB on first call', async () => {
    const tags = await getPredefinedTags()
    expect(tags.has('Big Data')).toBe(true)
  })

  it('should cache predefined tags and return same set without DB call', async () => {
    const first = await getPredefinedTags()
    const second = await getPredefinedTags()
    expect(second).toBe(first) // Same reference means it's cached
  })

//   it('should refresh cache and include new tags', async () => {
//     await prismaTest.tag.create({ tag_name: 'NewTag' })
//     await refreshTagCache()
//     const tags = await getPredefinedTags()
//     expect(tags.has('NewTag')).toBe(true)
//   })
})
