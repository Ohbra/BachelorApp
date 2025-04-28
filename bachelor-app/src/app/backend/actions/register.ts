'use server'

import { z } from "zod"
import bcrypt from "bcryptjs"
import {prisma} from "../prisma/prisma"

const UserSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  surname: z.string().min(2, "Surname must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  role: z.enum(["student", "supervisor"]),
  faculty: z.string(),
  courseOfStudy: z.string().optional()
})

export async function registerUser(formData: FormData) {
  try {
    const name = formData.get('name') as string
    const surname = formData.get('surname') as string
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const role = formData.get('role') as string
    const faculty = formData.get('faculty') as string
    const courseOfStudy = formData.get('courseOfStudy') as string | undefined
    
    // Validate input
    const validatedData = UserSchema.parse({
      name,
      surname,
      email,
      password,
      role,
      faculty,
      courseOfStudy
    })
    
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { uni_email: validatedData.email }
    })
    
    if (existingUser) {
      return { success: false, message: "User with this email already exists" }
    }
    
    // Hash password
    const hashedPassword = await bcrypt.hash(validatedData.password, 10)
    
    // Create user
    const user = await prisma.user.create({
      data: {
        name: validatedData.name,
        surname: validatedData.surname,
        uni_email: validatedData.email,
        password_hash: hashedPassword,
        role: validatedData.role,
        faculty_name: validatedData.faculty
      }
    })
    
    // Create role-specific profile
    if (validatedData.role === "student" && validatedData.courseOfStudy) {
      await prisma.student.create({
        data: {
          id: user.id,
          student_id: `S${Date.now()}`,
          course_of_study_name: validatedData.courseOfStudy
        }
      })
    } else if (validatedData.role === "supervisor") {
      await prisma.supervisor.create({
        data: {
          id: user.id,
          supervisor_id: `P${Date.now()}`
        }
      })
    }
    
    return { success: true, message: "User registered successfully" }
  } catch (error) {
    console.error("Registration error:", error)
    if (error instanceof z.ZodError) {
      return { success: false, message: error.errors[0].message }
    }
    return { success: false, message: "Failed to register user" }
  }
}