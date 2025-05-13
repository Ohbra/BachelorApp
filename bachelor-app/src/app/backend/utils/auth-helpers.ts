import { createServerClient } from '@supabase/ssr'
import { createClient } from './supabase'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'


export async function getUserSession() {
  const cookieStore = cookies();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: async () => (await cookieStore).getAll(),
        setAll: (cookiesToSet) => {
          cookiesToSet.forEach(async ({ name, value, options }) => {
            (await cookieStore).set(name, value, options);
          });
        },
      },
    }
  );

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  return error || !user ? null : user;
}


// for anonymous access
/**
 * Checks if the current user is anonymous
 */
export async function isAnonymousUser() {
  const supabase = createClient()
  const { data: sessionData } = await supabase.auth.getSession()

  if (!sessionData.session) return false

  const jwt = sessionData.session.access_token
  const payload = JSON.parse(atob(jwt.split(".")[1]))
  return payload.is_anonymous || false
}

/**
 * Signs in a user anonymously
 */
export async function signInAnonymously() {
  const supabase = createClient()
  const { data, error } = await supabase.auth.signInAnonymously()

  if (error) {
    throw error
  }
  return data
}


