'use server'

import { z } from 'zod'
import { prisma } from '../../prisma/prisma'
import { getPredefinedTags } from '@/app/backend/lib/tagsCache'
import { getUserSession } from '@/app/backend/utils/auth-helpers'

const AddTagSchema = z.object({
  thesis_id: z.number().int().positive('Invalid thesis ID'),
  tag_name: z.string().min(1, 'Tag name is required').max(50, 'Tag name is too long')
})

export async function addTagToThesis(formData: FormData) {
  try {
    const user = await getUserSession()
    if (!user) {
      return { success: false, message: 'You must be logged in' }
    }

    const thesis_id = parseInt(formData.get('thesis_id') as string)
    const tag_name = formData.get('tag_name') as string

    const validationResult = AddTagSchema.safeParse({ thesis_id, tag_name })
    if (!validationResult.success) {
      const errorMessage = validationResult.error.errors[0]?.message || 'Invalid input data'
      return { success: false, message: errorMessage }
    }

    const data = validationResult.data

    const thesis = await prisma.thesis_proposal.findUnique({
      where: { thesis_id: data.thesis_id }
    })

    if (!thesis) {
      return { success: false, message: 'Thesis proposal not found' }
    }

    const supervisor = await prisma.supervisor.findUnique({
      where: { supervisor_id: user.id }
    })

    if (!supervisor || thesis.supervisor_id !== supervisor.supervisor_id) {
      return { success: false, message: 'You can only modify your own thesis proposals' }
    }

    const validTagNames = await getPredefinedTags()
    if (!validTagNames.has(data.tag_name)) {
      return { success: false, message: `Invalid tag: "${data.tag_name}" is not a predefined tag.` }
    }

    await prisma.thesis_proposal_tag.create({
      data: {
        thesis_id: data.thesis_id,
        tag_name: data.tag_name
      }
    })

    return {
      success: true,
      message: 'Tag added successfully'
    }
  } catch (error) {
    console.error('Error adding tag to thesis:', error)
    return { success: false, message: 'Failed to add tag to thesis' }
  }
}
