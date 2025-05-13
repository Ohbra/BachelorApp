'use server'

import { z } from 'zod'
import { prisma } from '@/app/backend/prisma/prisma'
import { getUserSession } from '@/app/backend/utils/auth-helpers'

// Validation schema
const DeleteThesisSchema = z.object({
  thesis_id: z.number().int().positive('Invalid thesis ID'),
})

export async function deleteThesisProposal(formData: FormData) {
  try {
    const user = await getUserSession()
    if (!user) {
      return { success: false, message: 'You must be logged in' }
    }

    const role = user.user_metadata?.role
    if (role !== 'supervisor') {
      return { success: false, message: 'Only supervisors can delete thesis proposals' }
    }

    const thesis_id = parseInt(formData.get('thesis_id') as string)
    const validationResult = DeleteThesisSchema.safeParse({ thesis_id })

    if (!validationResult.success) {
      const errorMessage = validationResult.error.errors[0]?.message || 'Invalid thesis ID'
      return { success: false, message: errorMessage }
    }

    const data = validationResult.data
    const userId = user.id

    const existingThesis = await prisma.thesis_proposal.findUnique({
      where: { thesis_id: data.thesis_id },
    })

    if (!existingThesis) {
      return { success: false, message: 'Thesis proposal not found' }
    }

    if (existingThesis.supervisor_id !== userId) {
      return { success: false, message: 'You can only delete your own thesis proposals' }
    }

    await prisma.thesis_proposal_tag.deleteMany({
      where: { thesis_id: data.thesis_id },
    })

    await prisma.thesis_proposal.delete({
      where: { thesis_id: data.thesis_id },
    })

    return {
      success: true,
      message: 'Thesis proposal deleted successfully',
    }
  } catch (error) {
    console.error('Error deleting thesis proposal:', error)
    return { success: false, message: 'Failed to delete thesis proposal' }
  }
}
