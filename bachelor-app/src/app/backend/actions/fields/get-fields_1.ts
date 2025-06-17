'use server'

import { prisma } from "@/lib/prisma"

export type Field = {
  id: string
  name: string
  slug: string
}

export async function getFieldsFromTags() {
  try {
    const tags = await prisma.tag.findMany({
      select: {
        tag_name: true
      },
      orderBy: {
        tag_name: 'asc'
      }
    })

    const formattedFields: Field[] = tags.map((tag) => ({
      id: tag.tag_name,
      name: tag.tag_name,
      slug: tag.tag_name.toLowerCase().replace(/\s+/g, '-')
    }))

    return {
      success: true,
      fields: formattedFields
    }
  } catch (error) {
    console.error('Error fetching fields from tags:', error)
    return {
      success: false,
      message: 'Failed to fetch fields',
      fields: []
    }
  }
}
