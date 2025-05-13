'use server'

import { createClient } from '../../../backend/utils/server'

export async function login(formData: FormData) {
  const supabase = await createClient()

  const email = formData.get('email') as string
  const password = formData.get('password') as string

  const { data: authData, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error || !authData.user) {
    return { success: false, message: error?.message || "Login failed" }
  }

  return { success: true }
}
