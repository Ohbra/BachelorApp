"use server";

import { prisma } from '../../prisma/prisma'

export type ProfessorDetails = {
  id: string;
  name: string;
  department: string;
  profile?: string;
  researchPriorities?: string;
  subjectArea?: string;
};

export async function getProfessorDetails(professorId: string) {
  try {
    const supervisor = await prisma.supervisor.findUnique({
      where: { supervisor_id: professorId },
      select: {
        supervisor_id: true,
        title: true,
        research_priorities: true,
        subject_area: true,
        user_parent: {
          select: {
            name: true,
            surname: true,
            faculty: { select: { faculty_name: true } },
          },
        },
      },
    });

    if (!supervisor) {
      return { success: false, message: "Professor not found" };
    }

    const details: ProfessorDetails = {
      id: supervisor.supervisor_id,
      name: `${supervisor.user_parent.name} ${supervisor.user_parent.surname}`,
      department: supervisor.user_parent.faculty?.faculty_name || "Not specified",
      profile: supervisor.title || "Not specified",
      researchPriorities: supervisor.research_priorities || "Not specified",
      subjectArea: supervisor.subject_area || "Not specified",
    };

    return { success: true, details };
  } catch (error) {
    console.error("Error fetching professor details:", error);
    return { success: false, message: "Failed to fetch professor details" };
  }
}
