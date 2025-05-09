// this is a private page that requires authentication
// it will redirect to the login page if the user is not authenticated
import { redirect } from 'next/navigation'

import { createClient } from '../backend/utils/server'

export default async function PrivatePage() {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/login')
  }

  return <p>Hello {data.user.email}</p>
}