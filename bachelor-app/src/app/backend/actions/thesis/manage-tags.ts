'use server'

import { z } from "zod"
import { prisma } from "../../prisma/prisma"
import { getPredefinedTags } from '@/app/backend/lib/tagsCache'
//import { checkAuth } from "../../lib/auth-utils"

// Validation schemas
const AddTagSchema = z.object({
  thesis_id: z.number().int().positive("Invalid thesis ID"),
  tag_name: z.string().min(1, "Tag name is required").max(50, "Tag name is too long")
})

export async function addTagToThesis(formData: FormData) {
  try {
    // Authentication and authorization check
    //const auth = await checkAuth({ requiredRole: "supervisor" })
    
    // if (!auth.authenticated) {
    //   return { success: false, message: auth.message }
    // }
    
    // if (!auth.authorized) {
    //   return { success: false, message: auth.message }
    // }
    
    // Extract and validate data
    const thesis_id = parseInt(formData.get('thesis_id') as string)
    const tag_name = formData.get('tag_name') as string
    
    // Rest of your function...
    
    // Check if thesis exists and belongs to this supervisor
    const existingThesis = await prisma.thesis_proposal.findUnique({
      where: { thesis_id: data.thesis_id },
      include: { supervisor: true }
    })
    
    if (!existingThesis) {
      return { success: false, message: "Thesis proposal not found" }
    }
    
    if (existingThesis.supervisor_id !== auth.userId) {
      return { success: false, message: "You can only modify your own thesis proposals" }
    }
    
    // Rest of your function...
  } catch (error) {
    console.error("Error adding tag to thesis:", error)
    return { success: false, message: "Failed to add tag to thesis" }
  }
}