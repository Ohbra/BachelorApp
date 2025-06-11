"use server"

import { prisma } from "../../prisma/prisma"

export interface UpdateProfileData {
  title?: string
  researchPriorities?: string
  subjectArea?: string
}

export interface UpdateProfileResponse {
  success: boolean
  message?: string
}

export async function updateProfessorProfile(
  professorId: string,
  data: UpdateProfileData,
): Promise<UpdateProfileResponse> {
  try {
    await prisma.supervisor.update({
      where: { supervisor_id: professorId },
      data: {
        title: data.title,
        research_priorities: data.researchPriorities,
        subject_area: data.subjectArea,
      },
    })

    return { success: true }
  } catch (error) {
    console.error("Error updating professor profile:", error)
    return { success: false, message: "Failed to update profile" }
  }
}
