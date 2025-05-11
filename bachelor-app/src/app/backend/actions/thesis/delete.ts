'use server'

import { z } from "zod"
//import { getServerSession } from "next-auth"
import {prisma} from "../../../backend/prisma/prisma"

// Validation schema
const DeleteThesisSchema = z.object({
  thesis_id: z.number().int().positive("Invalid thesis ID")
})

export async function deleteThesisProposal(formData: FormData) {
  try {
    // authentication check
    //const session = await getServerSession(authOptions)
    
    // if (!session) {
    //   return { success: false, message: "You must be logged in" }
    // }
    
    // authorization check
    // if (session.user.role !== "supervisor") {
    //   return { success: false, message: "Only supervisors can delete thesis proposals" }
    // }
    
    // validate data
    const thesis_id = parseInt(formData.get('thesis_id') as string)
    
    // validate input
    const validationResult = DeleteThesisSchema.safeParse({ thesis_id })
    
    if (!validationResult.success) {
      const errorMessage = validationResult.error.errors[0]?.message || "Invalid thesis ID"
      return { success: false, message: errorMessage }
    }
    
    const data = validationResult.data
    
    // check if thesis exists and belongs to this supervisor
    const userId = parseInt(session.user.id)
    const existingThesis = await prisma.thesis_proposal.findUnique({
      where: { thesis_id: data.thesis_id },
      include: { supervisor: true }
    })
    
    if (!existingThesis) {
      return { success: false, message: "Thesis proposal not found" }
    }
    
    if (existingThesis.supervisor_id !== userId) {
      return { success: false, message: "You can only delete your own thesis proposals" }
    }
    
    // delete thesis tags first (due to foreign key constraints)
    await prisma.thesis_proposal_tag.deleteMany({
      where: { thesis_id: data.thesis_id }
    })
    
    //delete thesis proposal
    await prisma.thesis_proposal.delete({
      where: { thesis_id: data.thesis_id }
    })
    
    return { 
      success: true, 
      message: "Thesis proposal deleted successfully"
    }
  } catch (error) {
    console.error("Error deleting thesis proposal:", error)
    return { success: false, message: "Failed to delete thesis proposal" }
  }
}