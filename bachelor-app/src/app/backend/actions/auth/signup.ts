'use server'

import { revalidatePath } from 'next/cache'

import { createClient } from '../../../backend/utils/server'
import { z } from "zod"

const ProgramSchema = z.object({
  courseOfStudy: z.string().min(2, "Study program must be at least 2 characters"),
  level: z.enum(["bachelor", "master"]),
})

// email and password are handled by supabase
 const UserSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  surname: z.string().min(2, "Surname must be at least 2 characters"),
  role: z.enum(["student", "supervisor"]),
  faculty: z.string(),
  program: ProgramSchema.optional(),
}).refine(
  (data) => {
    if (data.role === 'student') {
      return !!data.program;
    }
    return true;
  },
  {
    message: "Program is required for students",
    path: ['program'],
  }
)

export async function signup(formData: FormData) {
  const supabase = await createClient()

  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const name = formData.get('name') as string
  const surname = formData.get('surname') as string
  const role = formData.get('role') as string
  const faculty = formData.get('faculty_name') as string
  const courseOfStudy = formData.get('study_program') as string | undefined
  const level = formData.get('level') as string | undefined; // e.g., "bachelor" or "master"

   try {
    const validatedData = UserSchema.parse({
      name,
      surname,
      role,
      faculty,
      ...(role === 'student'
        ? { program: { courseOfStudy, level } }
        : {}),
    })

    const { data: authData, error: signupError } = await supabase.auth.signUp({
      email,
      password,
    })

    if (signupError || !authData.user) {
      return { success: false, message: signupError?.message || 'Signup failed' }
    }

    const { data: facultyData, error: facultyError } = await supabase
      .from('faculty')
      .select('faculty_id')
      .eq('faculty_name', validatedData.faculty)
      .single()

    const user_id = authData.user.id

    if (facultyError || !facultyData) {
      const {data: authData, error: authError} = await supabase.auth.admin.deleteUser(user_id)
      if (authError) {
        console.error('Failed to delete user from auth:', authError)  
      } else console.log('Deleted user from auth:', authData)
      return { success: false, message: 'Faculty not found' }
    }


    const { error: insertError } = await supabase.rpc('insert_user_parent', {
      user_id,
      name: validatedData.name,
      surname: validatedData.surname,
      role: validatedData.role,
      timespent: 0,
      faculty_id: facultyData.faculty_id,
    })

    if (insertError) {
      await supabase.auth.admin.deleteUser(user_id)
      // console.error('Insert user_parent error:', insertError)
      // supabase function failed, delete the user so we don't have orphaned users
      // and users can retry signup
      return { success: false, message: 'Failed to insert user_parent' }
    }
    

    if (validatedData.role === 'student' && validatedData.program) {
      const { courseOfStudy, level } = validatedData.program
      const formattedCourseName = `${courseOfStudy} (${level})`

      const { data: stdProgramData, error: courseError } = await supabase
        .from('course_of_study')
        .select('course_id')
        .ilike('course_name', formattedCourseName)
        .single()

      if (courseError || !stdProgramData) {
        // console.error('Course selection error: ' + formattedCourseName, courseError)
        const {data: res, error:resErr}  = await supabase.from('user_parent').delete().eq('user_id', user_id)
        // delete the user from auth to prevent orphaned users
        const {data: authData, error: authError} = await supabase.auth.admin.deleteUser(user_id)
        return { success: false, message: 'Course not found' }
      }

      const { error: studentError } = await supabase.from('student').insert({
        student_id: user_id,
        course_id: stdProgramData.course_id,
      })

      if (studentError) {
        await supabase.from('user_parent').delete().eq('user_id', user_id)
        console.error('Insert student error:', studentError)
        await supabase.auth.admin.deleteUser(user_id)
        return { success: false, message: 'Failed to insert student' }
      }
    }
     // ! do not delete this code, it is for future use
     //else if (validatedData.role === 'supervisor') {
      //const { error: supervisorError } = await supabase.from('supervisor').insert({
        //supervisor_id: user_id,
      //})
//
      //if (supervisorError) {
        //console.error('Insert supervisor error:', supervisorError)
        //return { success: false, message: 'Failed to insert supervisor' }
      //}
    //}

    revalidatePath('/')
    return { success: true }
  } catch (error) {
    console.error(error)
    return { success: false, message: 'Unexpected error occurred' }
  }
}