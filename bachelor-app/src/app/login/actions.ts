'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '../backend/utils/server'
import { z } from "zod"
// possibly remove this import in the future or use it for hashing passwords directly in the database
// reason for non_use: supabase currently handles password hashing and storage 
import bcrypt from "bcryptjs"
import {prisma} from "../backend/prisma/prisma"

const UserSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  surname: z.string().min(2, "Surname must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  role: z.enum(["student", "supervisor"]),
  faculty: z.string(),
  courseOfStudy: z.string().optional()
})

export async function login(formData: FormData) {
  const supabase = await createClient()

  const email = formData.get('email') as string
  const password = formData.get('password') as string

  // Validate inputs here with zod if needed

  const { data: authData, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error || !authData.user) {
    redirect('/error')
    return { success: false, message: error?.message ?? "Login failed" }
  }

  const user_id = authData.user.id

  // Fetch user metadata from user_parent table
  const { data: userMeta, error: userMetaError } = await supabase
    .from('user_parent')
    .select('*')
    .eq('user_id', user_id)
    .single()

  if (userMetaError) {
    return { success: false, message: "User metadata not found" }
  }

  return {
    success: true,
    message: "Login successful",
    user: {
      id: user_id,
      email: authData.user.email,
      role: userMeta.role,
      name: userMeta.name,
    },
  }
}


// supabase handles auth and email uniqueness
export async function signup(formData: FormData) {
  const supabase = await createClient()

  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const name = formData.get('name') as string
  const surname = formData.get('surname') as string
  const role = formData.get('role') as string
  const faculty_name = formData.get('faculty_name') as string
  const study_program = formData.get('study_program') as string | undefined

  // Validate with Zod
  const validatedData = UserSchema.parse({
    name,
    surname,
    email,
    password,
    role,
    faculty: faculty_name,
    courseOfStudy: study_program
  })

  // Supabase handles auth & email uniqueness
  const { data: authData, error: signupError } = await supabase.auth.signUp({
    email,
    password,
  })

  if (signupError || !authData.user) {
    return { success: false, message: signupError?.message ?? "Unknown signup error" }
  }

  const user_id = authData.user.id

  // Insert into user_parent
  const { error: parentError } = await supabase.from('user_parent').insert({
    user_id,
    name: validatedData.name,
    surname: validatedData.surname,
    role: validatedData.role,
    uni_email: validatedData.email,
    reg_date: new Date().toISOString(),
    timespent: 0,
    faculty_name: validatedData.faculty,
  })

  if (parentError) {
    return { success: false, message: "Failed to create user profile" }
  }

  // Role-specific inserts
  if (validatedData.role === "student" && validatedData.courseOfStudy) {
    await supabase.from('student').insert({
      id: user_id,
      course_of_study_name: validatedData.courseOfStudy
    })
  } else if (validatedData.role === "supervisor") {
    await supabase.from('supervisor').insert({
      id: user_id,
    })
  }

  if (parentError) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/')
  return { success: true, message: "User registered successfully" }
}
