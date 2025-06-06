'use server'

import { z } from "zod"
import { prisma } from "../../prisma/prisma"
import { getPredefinedTags } from '@/app/backend/lib/tagsCache'
import { getUserSession } from '@/app/backend/utils/auth-helpers'

const AddTagSchema = z.object({
  thesis_id: z.string().regex(/^\d+$/, "Invalid thesis ID"),
  tag_name: z.string().min(1, "Tag name is required").max(50, "Tag name is too long")
})

export async function addTagToThesis(formData: FormData) {
  try {
    const user = await getUserSession()
    if (!user) {
      return { success: false, message: "You must be logged in" }
    }

    const thesis_id = formData.get('thesis_id') as string
    const tag_name = formData.get('tag_name') as string

    const parsed = AddTagSchema.safeParse({ thesis_id, tag_name })
    if (!parsed.success) {
      return { success: false, message: parsed.error.errors[0].message }
    }

    const thesis = await prisma.thesis_proposal.findUnique({
      where: { thesis_id }
    })

    if (!thesis) {
      return { success: false, message: "Thesis proposal not found" }
    }

    if (thesis.supervisor_id !== user.id) {
      return { success: false, message: "You can only modify your own thesis proposals" }
    }

    // Validate tag
    const validTags = await getPredefinedTags()
    if (!validTags.has(tag_name)) {
      return {
        success: false,
        message: `Invalid tag: "${tag_name}" is not a predefined tag.`
      }
    }

    // Add tag to thesis
    await prisma.thesis_proposal_tag.create({
      data: {
        thesis_id,
        tag_name
      }
    })

    return { success: true, message: "Tag added successfully" }

  } catch (error) {
    console.error("Error adding tag to thesis:", error)
    return { success: false, message: "Failed to add tag to thesis" }
  }
}
