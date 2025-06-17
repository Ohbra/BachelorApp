'use server'

import { prisma } from "@/lib/prisma"

export type Professor = {
  id: string
  name: string
  department: string
}

export async function getProfessors() {
  try {
    const professors = await prisma.supervisor.findMany({
      select: {
        supervisor_id: true,
        user_parent: {
          select: {
            name: true,
            surname: true,
            faculty: {
              select: {
                faculty_name: true
              }
            }
          }
        }
      },
      orderBy: {
        user_parent: {
          surname: 'asc'
        }
      }
    })

    const formattedProfessors: Professor[] = professors.map((prof) => ({
      id: prof.supervisor_id.toString(),
      name: `${prof.user_parent?.name || ''} ${prof.user_parent?.surname || ''}`.trim(),
      department: prof.user_parent?.faculty?.faculty_name || 'Not specified'
    }))

    return { success: true, professors: formattedProfessors }
  } catch (error) {
    console.error('Error fetching professors:', error)
    return { success: false, message: 'Failed to fetch professors', professors: [] }
  }
}