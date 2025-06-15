"use server"

import { z } from "zod"
import { prisma } from "../../prisma/prisma"
import { revalidatePath } from "next/cache"

// Define the schema for validation
const createThesisProposalSchema = z.object({
  title: z.string().min(1, "Title is required").max(200, "Title must be less than 200 characters"),
  faculty: z.string().min(1, "Faculty is required"),
  studyCourse: z.string().min(1, "Study course is required"),
  description: z.string().min(1, "Description is required").max(2000, "Description must be less than 2000 characters"),
  requirements: z.array(z.string()).min(1, "At least one requirement is needed"),
  tags: z.array(z.string()).min(1, "At least one tag must be selected"),
  supervisorId: z.string().min(1, "Supervisor ID is required"),
})

type CreateThesisProposalInput = z.infer<typeof createThesisProposalSchema>

// Define the state type for useActionState
export type ThesisProposalState = {
  success: boolean
  error?: string
  message?: string
  thesisId?: string
  details?: string[]
} | null

export async function createThesisProposal(
  prevState: ThesisProposalState,
  formData: FormData,
): Promise<ThesisProposalState> {
  try {
    // Extract form data
    const title = formData.get("title") as string
    const faculty = formData.get("faculty") as string
    const studyCourse = formData.get("studyCourse") as string
    const description = formData.get("description") as string
    const supervisorId = formData.get("supervisorId") as string

    // Parse requirements (they come as separate form fields)
    const requirements: string[] = []
    let requirementIndex = 0
    while (formData.has(`requirement_${requirementIndex}`)) {
      const requirement = formData.get(`requirement_${requirementIndex}`) as string
      if (requirement && requirement.trim()) {
        requirements.push(requirement.trim())
      }
      requirementIndex++
    }

    // Parse selected tags
    const tags: string[] = []
    let tagIndex = 0
    while (formData.has(`tag_${tagIndex}`)) {
      const tag = formData.get(`tag_${tagIndex}`) as string
      if (tag) {
        tags.push(tag)
      }
      tagIndex++
    }

    // Validate input
    const validatedInput = createThesisProposalSchema.parse({
      title: title?.trim(),
      faculty: faculty?.trim(),
      studyCourse: studyCourse?.trim(),
      description: description?.trim(),
      requirements,
      tags,
      supervisorId,
    })

    // Check if supervisor exists
    const supervisor = await prisma.supervisor.findUnique({
      where: { supervisor_id: validatedInput.supervisorId },
    })

    if (!supervisor) {
      return {
        success: false,
        error: "Supervisor not found",
      }
    }

    // Create the thesis proposal
    const thesisProposal = await prisma.thesis_proposal.create({
      data: {
        title: validatedInput.title,
        description: validatedInput.description,
        requirements: validatedInput.requirements.join("\n"), // Store as newline-separated string
        thesis_type: "Bachelor", // Default, could be made configurable
        application_start: new Date(),
        application_end: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
        supervisor_id: validatedInput.supervisorId,
      },
    })

    // Create or connect tags
    for (const tagName of validatedInput.tags) {
      // First, ensure the tag exists
      await prisma.tag.upsert({
        where: { tag_name: tagName },
        update: {}, // Don't update if exists
        create: { tag_name: tagName },
      })

      // Then create the relationship
      await prisma.thesis_proposal_tag.create({
        data: {
          thesis_id: thesisProposal.thesis_id,
          tag_name: tagName,
        },
      })
    }

    // Revalidate the professor page to show the new proposal
    revalidatePath(`/professor/${validatedInput.supervisorId}`)
    revalidatePath("/") // Also revalidate home page

    return {
      success: true,
      message: "Thesis proposal created successfully!",
      thesisId: thesisProposal.thesis_id,
    }
  } catch (error) {
    console.error("Error creating thesis proposal:", error)

    if (error instanceof z.ZodError) {
      return {
        success: false,
        error: "Invalid form data",
        details: error.errors.map((err) => `${err.path.join(".")}: ${err.message}`),
      }
    }

    return {
      success: false,
      error: "Failed to create thesis proposal. Please try again.",
    }
  }
}

// Helper function to get available faculties
export async function getFaculties() {
  try {
    const faculties = await prisma.faculty.findMany({
      select: {
        faculty_name: true,
      },
      orderBy: {
        faculty_name: "asc",
      },
    })

    return {
      success: true,
      faculties: faculties.map((f) => f.faculty_name),
    }
  } catch (error) {
    console.error("Error fetching faculties:", error)
    return {
      success: false,
      faculties: [],
    }
  }
}

// Helper function to validate supervisor
export async function validateSupervisor(supervisorId: string) {
  try {
    const supervisor = await prisma.supervisor.findUnique({
      where: { supervisor_id: supervisorId },
      include: {
        user_parent: {
          select: {
            name: true,
            surname: true,
            faculty: {
              select: {
                faculty_name: true,
              },
            },
          },
        },
      },
    })

    if (!supervisor) {
      return {
        success: false,
        error: "Supervisor not found",
      }
    }

    return {
      success: true,
      supervisor: {
        id: supervisor.supervisor_id,
        name: `${supervisor.user_parent?.name} ${supervisor.user_parent?.surname}`,
        faculty: supervisor.user_parent?.faculty?.faculty_name,
      },
    }
  } catch (error) {
    console.error("Error validating supervisor:", error)
    return {
      success: false,
      error: "Failed to validate supervisor",
    }
  }
}
