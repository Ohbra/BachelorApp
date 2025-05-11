'use server'

import { z } from "zod"
import { prisma } from "../../prisma/prisma"
import { getPredefinedTags } from '@/app/backend/lib/tagsCache'
//import { checkAuth } from "../../lib/auth-utils"

// Validation schema
const AddTagSchema = z.object({
  thesis_id: z.number().int().positive("Invalid thesis ID"),
  tag_name: z.string().min(1, "Tag name is required").max(50, "Tag name is too long")
})

export async function addTagToThesis(formData: FormData) {
  try {
    // authentication and authorization
    // const auth = await checkAuth({ requiredRole: "supervisor" })
    // if (!auth.authenticated || !auth.authorized) {
    //   return { success: false, message: auth.message }
    // }

    // get and validate form data
    const thesis_id = parseInt(formData.get('thesis_id') as string)
    const tag_name = formData.get('tag_name') as string

    const parsed = AddTagSchema.safeParse({ thesis_id, tag_name })
    if (!parsed.success) {
      return { success: false, message: parsed.error.errors[0].message }
    }

    // check if thesis exists and belongs to this supervisor
    const existingThesis = await prisma.thesis_proposal.findUnique({
      where: { thesis_id },
      include: { supervisor: true }
    })

    if (!existingThesis) {
      return { success: false, message: "Thesis proposal not found" }
    }

    if (existingThesis.supervisor_id !== auth.userId) {
      return { success: false, message: "You can only modify your own thesis proposals" }
    }

    // check tag is valid using cached predefined tags
    const validTags = await getPredefinedTags()
    if (!validTags.has(tag_name)) {
      return { success: false, message: `Invalid tag: "${tag_name}" is not a predefined tag.` }
    }

    // add tag to thesis
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
