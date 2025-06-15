'use server'

import { revalidatePath } from 'next/cache'

import { createClient } from '../../../backend/utils/server'

// the sign out method from the client library.
//  It removes the active session and clears
//  Auth data from the storage medium.
export async function signOut() {
  const supabase = await createClient();
  const { error } = await supabase.auth.signOut()
    if (error) {
        console.error('Error signing out:', error);
        throw new Error('Failed to sign out');
    }
}


// signout from all other devices
export async function signOutOfOtherDevices() {
  const supabase = await createClient();
  const { error } = await supabase.auth.signOut({ scope: 'others'})
  if (error) {
    console.error('Error signing out:', error);
    throw new Error('Failed to sign out');
  }
  
  revalidatePath('/');
  return { success: true, message: 'Successfully signed out' };
}

export async function signOutOfCurrentDevice() {
  const supabase = await createClient();
  const { error } = await supabase.auth.signOut({ scope: 'local'})
    if (error) {
    console.error('Error signing out:', error);
    throw new Error('Failed to sign out');
    }
  
  revalidatePath('/');
  return { success: true, message: 'Successfully signed out' };
}


export async function signOutAction() {    
  try {
    await signOut();
    revalidatePath('/');
    return { success: true, message: 'Successfully signed out' };
  } catch (error) {
    console.error('Error signing out:', error);
    return { success: false, message: 'Failed to sign out' };
  }
}