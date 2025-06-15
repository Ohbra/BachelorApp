'use server'

import { z } from 'zod'
import { prisma } from '../../prisma/prisma'
import { getPredefinedTags } from '@/app/backend/lib/tagsCache'
import { getUserSession } from '@/app/backend/utils/auth-helpers'


// Validation schema
const ThesisSchema = z.object({
  title: z.string().min(5, 'Title must be at least 5 characters').max(255, 'Title is too long'),
  description: z.string().min(20, 'Description must be at least 20 characters'),
  requirements: z.string().optional(),
  thesis_type: z.string().min(1, 'Thesis type is required'),
  application_start: z.string().refine(date => !isNaN(Date.parse(date)), {
    message: 'Invalid start date'
  }),
  application_end: z.string().refine(date => !isNaN(Date.parse(date)), {
    message: 'Invalid end date'
  }),
  tags: z.array(z.string()).optional()
})

export async function createThesisProposal(formData: FormData) {
  try {
    const user = await getUserSession()
    if (!user) {
     return { success: false, message: 'You must be logged in' }
    }

    const title = formData.get('title') as string
    const description = formData.get('description') as string
    const requirements = formData.get('requirements') as string || null
    const thesis_type = formData.get('thesis_type') as string
    const application_start = formData.get('application_start') as string
    const application_end = formData.get('application_end') as string
    const tagsInput = formData.get('tags') as string
    const tags = tagsInput ? tagsInput.split(',').map(tag => tag.trim()) : []

    const validationResult = ThesisSchema.safeParse({
      title,
      description,
      requirements,
      thesis_type,
      application_start,
      application_end,
      tags
    })

    if (!validationResult.success) {
      const errorMessage = validationResult.error.errors[0]?.message || 'Invalid input data'
      return { success: false, message: errorMessage }
    }

    const data = validationResult.data
    const startDate = new Date(data.application_start)
    const endDate = new Date(data.application_end)

    if (startDate > endDate) {
      return { success: false, message: 'End date must be after start date' }
    }

    if (startDate < new Date()) {
      return { success: false, message: 'Start date cannot be in the past' }
    }

    const userId = user.id
    const supervisor = await prisma.supervisor.findUnique({
      where: { supervisor_id: userId }
    })

    if (!supervisor) {
      return { success: false, message: 'Supervisor profile not found' }
    }

    const thesisProposal = await prisma.thesis_proposal.create({
      data: {
        title: data.title,
        description: data.description,
        requirements: data.requirements || null,
        thesis_type: data.thesis_type,
        application_start: startDate,
        application_end: endDate,
        supervisor_id: supervisor.supervisor_id
      }
    })

    if (data.tags && data.tags.length > 0) {
      const validTagNames = await getPredefinedTags()

      for (const tagName of data.tags) {
        if (!validTagNames.has(tagName)) {
          return { success: false, message: `Invalid tag: "${tagName}" is not a predefined tag.` }
        }

        await prisma.thesis_proposal_tag.create({
          data: {
            thesis_id: thesisProposal.thesis_id,
            tag_name: tagName
          }
        })
      }
    }

    return {
      success: true,
      message: 'Thesis proposal created successfully',
      thesisId: thesisProposal.thesis_id
    }
  } catch (error) {
    console.error('Error creating thesis proposal:', error)
    return { success: false, message: 'Failed to create thesis proposal' }
  }
}
