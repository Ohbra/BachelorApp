'use server'

import { z } from "zod"
//import { getServerSession } from "next-auth"
import {prisma} from "../../prisma/prisma"

// Validation schema
const SupervisorProfileSchema = z.object({
  vita: z.string().optional(),
  way_of_working: z.string().optional(),
  profile_tha: z.string().max(2048, "Bio is too long").optional()
})

export async function updateSupervisorProfile(formData: FormData) {
  try {
    // authentication check
    // const session = await getServerSession(authOptions)
    
    // if (!session) {
    //   return { success: false, message: "You must be logged in" }
    // }
    
    // // authorization check
    // if (session.user.role !== "supervisor") {
    //   return { success: false, message: "Only supervisors can update supervisor profiles" }
    // }
    
    // get and validate data
    const vita = formData.get('vita') as string || undefined
    const way_of_working = formData.get('way_of_working') as string || undefined
    const profile_tha = formData.get('profile_tha') as string || undefined
    
    // validate input
    const validationResult = SupervisorProfileSchema.safeParse({
      vita,
      way_of_working,
      profile_tha
    })
    
    if (!validationResult.success) {
      const errorMessage = validationResult.error.errors[0]?.message || "Invalid input data"
      return { success: false, message: errorMessage }
    }
    
    const data = validationResult.data
    
    // check if supervisor profile exists
    const userId = parseInt(session.user.id)
    const supervisor = await prisma.supervisor.findUnique({
      where: { supervisor_id: userId }
    })
    
    if (!supervisor) {
      return { success: false, message: "Supervisor profile not found" }
    }
    
    // update supervisor profile
    await prisma.supervisor.update({
      where: { supervisor_id: userId },
      data: {
        vita: data.vita,
        way_of_working: data.way_of_working,
        profile_tha: data.profile_tha
      }
    })
    
    return { 
      success: true, 
      message: "Supervisor profile updated successfully"
    }
  } catch (error) {
    console.error("Error updating supervisor profile:", error)
    return { success: false, message: "Failed to update supervisor profile" }
  }
}