'use server'

import { z } from 'zod'
import { prisma } from '@/app/backend/prisma/prisma'
import { getUserSession } from '@/app/backend/utils/auth-helpers'

const UpdateStudentProfileSchema = z.object({
  name: z.string().min(1, 'Name is required').max(50),
  surname: z.string().min(1, 'Surname is required').max(50),
  birthdate: z.string().optional(),
  gender: z.string().max(1).optional(),
  faculty_id: z.string().optional(),
  course_id: z.string().optional(),
  interests: z.array(z.string().max(50)).optional()
})

export async function updateStudentProfileExtended(formData: FormData) {
  try {
    const user = await getUserSession()
    if (!user) {
      return { success: false, message: 'You must be logged in' }
    }

    const data = {
      name: formData.get('name') as string,
      surname: formData.get('surname') as string,
      birthdate: formData.get('birthdate') as string | null,
      gender: formData.get('gender') as string | null,
      faculty_id: formData.get('faculty_id') as string | null,
      course_id: formData.get('course_id') as string | null,
      interests: formData.get('interests') ? JSON.parse(formData.get('interests') as string) : []
    }

    const parsed = UpdateStudentProfileSchema.safeParse(data)
    if (!parsed.success) {
      return { success: false, message: parsed.error.errors[0].message }
    }

    // Check if user exists and is a student
    const existingUser = await prisma.user_parent.findUnique({
      where: { user_id: user.id },
      include: { 
        student: {
          include: {
            student_tag: true
          }
        }
      }
    })

    if (!existingUser) {
      return { success: false, message: 'User not found' }
    }

    if (existingUser.role !== 'student') {
      return { success: false, message: 'Only students can update student profiles' }
    }

    // Use transaction to ensure all updates succeed or fail together
    await prisma.$transaction(async (tx) => {
      // Update user_parent table
      await tx.user_parent.update({
        where: { user_id: user.id },
        data: {
          name: parsed.data.name,
          surname: parsed.data.surname,
          birthdate: parsed.data.birthdate ? new Date(parsed.data.birthdate) : null,
          gender: parsed.data.gender,
          faculty_id: parsed.data.faculty_id || existingUser.faculty_id
        }
      })

      // Update student table if course_id is provided
      if (parsed.data.course_id && existingUser.student) {
        await tx.student.update({
          where: { student_id: user.id },
          data: {
            course_id: parsed.data.course_id
          }
        })
      }

      // Update student tags (interests) if provided
      if (parsed.data.interests && parsed.data.interests.length > 0) {
        // Remove existing tags
        await tx.student_tag.deleteMany({
          where: { student_id: user.id }
        })

        // Add new tags
        for (const interest of parsed.data.interests) {
          // Ensure the tag exists
          await tx.tag.upsert({
            where: { tag_name: interest },
            update: {},
            create: { tag_name: interest }
          })

          // student_tag relationship
          await tx.student_tag.create({
            data: {
              student_id: user.id,
              tag_name: interest
            }
          })
        }
      }
    })

    return { success: true, message: 'Profile updated successfully' }

  } catch (error) {
    console.error('Error updating profile:', error)
    return { success: false, message: 'Failed to update profile' }
  }
}