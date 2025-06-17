import { prisma } from "@/lib/prisma"

let cachedTags: Set<string> | null = null

export async function getPredefinedTags(): Promise<Set<string>> {
  if (cachedTags) return cachedTags

  const tags = await prisma.tag.findMany({
    select: {
      tag_name: true
    }
  })

  cachedTags = new Set(tags.map(tag => tag.tag_name))
  return cachedTags
}

export async function refreshTagCache(): Promise<void> {
  const tags = await prisma.tag.findMany({
    select: {
      tag_name: true
    }
  })

  cachedTags = new Set(tags.map(tag => tag.tag_name))
}
