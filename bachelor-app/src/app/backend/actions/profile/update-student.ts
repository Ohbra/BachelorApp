'use server'

import { z } from "zod"
//import { getServerSession } from "next-auth"
import {prisma} from "../../prisma/prisma"

// validation schema
const StudentProfileSchema = z.object({
  course_of_study: z.string().optional()
})

export async function updateStudentProfile(formData: FormData) {
  try {
    // authentication check
    // const session = await getServerSession(authOptions)
    
    // if (!session) {
    //   return { success: false, message: "You must be logged in" }
    // }
    
    // // authorization check
    // if (session.user.role !== "student") {
    //   return { success: false, message: "Only students can update student profiles" }
    // }
    
    // extract and validate data
    const course_of_study = formData.get('course_of_study') as string || undefined
    
    // validate input
    const validationResult = StudentProfileSchema.safeParse({
      course_of_study
    })
    
    if (!validationResult.success) {
      const errorMessage = validationResult.error.errors[0]?.message || "Invalid input data"
      return { success: false, message: errorMessage }
    }
    
    const data = validationResult.data
    
    // check if student profile exists
    const userId = parseInt(session.user.id)
    const student = await prisma.student.findUnique({
      where: { student_id: userId }
    })
    
    if (!student) {
      return { success: false, message: "Student profile not found" }
    }
    
    // if course of study is changing, validate it exists
    if (data.course_of_study && data.course_of_study !== student.course_of_study) {
      const courseExists = await prisma.course_of_study.findUnique({
        where: { course_name: data.course_of_study }
      })
      
      if (!courseExists) {
        return { success: false, message: "Course of study not found" }
      }
    }
    
    // update student profile
    if (data.course_of_study) {
      await prisma.student.update({
        where: { student_id: userId },
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