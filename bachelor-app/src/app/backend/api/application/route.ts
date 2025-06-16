import { PrismaClient } from '@/app/backend/generated/prisma'
const prisma = new PrismaClient()
import { NextResponse } from 'next/server'

export async function GET() {
// TODO: Create a application with a student_id and thesis_id
  // const applications = await prisma.application.findMany({
  //   include: {
  //     student: {
  //       include: {
  //         user_parent: true
  //       }
  //     },
  //     thesis_proposal: true
  //   }
  // })

  return NextResponse.json({ message: "Not implemented" })
}

export async function POST(req: Request) {
  const data = await req.json()

  // const application = await prisma.application.create({
  //   data: {
  //     student_id: data.student_id,
  //     thesis_id: data.thesis_id,
  //     status: 'PENDING' // or your enum/string default
  //   }
  // })

  return NextResponse.json({ message: "Not implemented" })
}
