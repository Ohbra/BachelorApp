'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '../backend/utils/server'
import { z } from "zod"

// email and password are handled by supabase
const UserSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  surname: z.string().min(2, "Surname must be at least 2 characters"),
  role: z.enum(["student", "supervisor"]),
  faculty: z.string(), // name of the faculty
  courseOfStudy: z.string().optional() // optional for supervisors 
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
  else { // remove console log in production
    console.log("Login successful:", authData.user.id)  }

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

export async function signup(formData: FormData) {
  const supabase = await createClient()

  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const name = formData.get('name') as string
  const surname = formData.get('surname') as string
  const role = formData.get('role') as string
  const faculty = formData.get('faculty_name') as string
  const courseOfStudy = formData.get('study_program') as string | undefined

  // Validate with Zod - exclude email and password as Supabase handles those
  const validatedData = UserSchema.parse({
    name,
    surname,
    role,
    faculty,
    courseOfStudy,
  })

  // Supabase auth signup
  const { data: authData, error: signupError } = await supabase.auth.signUp({
    email,
    password,
  })

  if (signupError || !authData.user) {
    console.error("Auth signup error:", signupError)
    return { success: false, message: signupError?.message ?? "Unknown signup error" }
  }

  try {
    // Retrieve faculty ID from the faculty name with better error handling
    const { data: facultyData, error: facultyError } = await supabase
      .from('faculty')
      .select('faculty_id')
      .eq('faculty_name', validatedData.faculty)
      .single()

    if (facultyError || !facultyData) {
      console.error("Faculty lookup error:", facultyError)
      return { success: false, message: `Faculty not found: ${validatedData.faculty}` }
    }

  const user_id = authData.user.id
  console.log("User created with ID:", user_id)

   const faculty_id = facultyData.faculty_id
   console.log("Found faculty ID:", faculty_id)

   // test if user is created 
   const { data: userInfo } = await supabase.auth.getUser();
   if (userInfo.user) {
     console.log('auth.uid():', userInfo.user.id);
   } else {
     console.error('User info is null or undefined');
   }
   console.log('authData.user.id:', authData.user.id);
   
   // function to trigger insert into user_parent
  if (authData) {
   const { error: insertError } = await supabase.rpc('insert_user_parent', {
   user_id: authData.user.id,
   name: validatedData.name,
   surname: validatedData.surname,
   role: validatedData.role,
   timespent: 0,
   faculty_id: faculty_id, // Use the retrieved faculty_id
  });

    if (insertError) {
      console.error("User parent insertion error:", insertError)
      return { success: false, message: `Failed to create user profile: ${insertError.message}` }
    }
    else {
      console.log("User parent created successfully")
    }
}
       // Role-specific inserts
    if (validatedData.role === "student" && validatedData.courseOfStudy) {

  try {
    // Retrieve course ID from the course name with better error handling
    const { data: stdProgramData, error: courseOfStudyError } = await supabase
      .from('course_of_study')
      .select('course_id')
      .eq('course_name', validatedData.courseOfStudy)
      .single()

    if (courseOfStudyError || !stdProgramData) {
      console.error("course of study lookup error:", courseOfStudyError)
      return { success: false, message: `course not found: ${validatedData.courseOfStudy}` }
    }

      const { error: studentError } = await supabase
        .from('student')
        .insert({
          student_id: user_id,
          course_id: stdProgramData.course_id,
        })

      if (studentError) {
        console.error("Student record creation error:", studentError)
        return { success: false, message: `Failed to create student record: ${studentError.message}` }
      }
      console.log("Student record created")
    }
    catch(error) {
    console.error("Unexpected error during signup:", error)
    }

     } 
     else if (validatedData.role === "supervisor") {
      const { error: supervisorError } = await supabase
        .from('supervisor')
        .insert({
          supervisor_id: user_id,
        })

      if (supervisorError) {
        console.error("Supervisor record creation error:", supervisorError)
        return { success: false, message: `Failed to create supervisor record: ${supervisorError.message}` }
      }
      
      console.log("Supervisor record created")
    }

    // Success case
    console.log("Signup completed successfully")
    revalidatePath('/', 'layout')
    redirect('/')
    return { success: true, message: "User registered successfully" }
    
  } catch (error) {
    // Catch any other errors
    console.error("Unexpected error during signup:", error)
    return { success: false, message: `An unexpected error occurred: ${error instanceof Error ? error.message : 'Unknown error'}` }
  }
} 

 //// Insert into user_parent with improved error handling
    //const { data: parentData, error: parentError } = await supabase
      //.from('user_parent')
      //.insert({
        //user_id,
        //name: validatedData.name,
        //surname: validatedData.surname,
        //role: validatedData.role,
        //timespent: 0,
        //faculty_id: faculty_id, // Use the retrieved faculty_id
      //})
      //.select()
    //if (parentError) {
      //console.error("User parent insertion error:", parentError)
      //return { success: false, message: `Failed to create user profile: ${parentError.message}` }
    //}

    // console.log("User parent created:", parentData.user_id)

