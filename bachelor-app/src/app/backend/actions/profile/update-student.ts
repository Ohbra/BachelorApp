'use server'

import { z } from "zod"
import { prisma } from "../../prisma/prisma"
import { getUserSession } from '@/app/backend/utils/auth-helpers'

const StudentProfileSchema = z.object({
  course_of_study: z.string().optional()
})

export async function updateStudentProfile(formData: FormData) {
  try {
    const user = await getUserSession()
    if (!user) {
      return { success: false, message: "You must be logged in" }
    }

    // check if student profile exists
    const student = await prisma.student.findUnique({
      where: { student_id: user.id }
    })

    if (!student) {
      return { success: false, message: "Only students can update student profiles" }
    }

    // extract and validate input
    const course_of_study = formData.get('course_of_study') as string | undefined

    const validationResult = StudentProfileSchema.safeParse({ course_of_study })
    if (!validationResult.success) {
      const errorMessage = validationResult.error.errors[0]?.message || "Invalid input data"
      return { success: false, message: errorMessage }
    }

    const data = validationResult.data

    // if course of study is changing, validate existence
    if (data.course_of_study && data.course_of_study !== student.course_of_study) {
      const courseExists = await prisma.course_of_study.findUnique({
        where: { course_name: data.course_of_study }
      })

      if (!courseExists) {
        return { success: false, message: "Course of study not found" }
      }

      // update student profile
      await prisma.student.update({
        where: { student_id: user.id },
        data: {
          course_of_study: data.course_of_study
        }
      })
    }

    return {
      success: true,
      message: "Student profile updated successfully"
    }

  } catch (error) {
    console.error("Error updating student profile:", error)
    return { success: false, message: "Failed to update student profile" }
  }
}
