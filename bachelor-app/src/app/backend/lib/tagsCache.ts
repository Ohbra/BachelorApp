import {prisma} from '../prisma/prisma';
import { tag } from '../generated/prisma'


let cachedTags: Set<string> | null = null

export async function getPredefinedTags(): Promise<Set<string>> {
  // return if already cached
  if (cachedTags) return cachedTags

  // else fetch from DB and cache
  const tags = await prisma.tag.findMany()
cachedTags = new Set(tags.map((tag: tag) => tag.tag_name))

  return cachedTags
}

export async function refreshTagCache(): Promise<void> {
  const tags = await prisma.tag.findMany()
  cachedTags = new Set(tags.map((tag: tag) => tag.tag_name))
}
