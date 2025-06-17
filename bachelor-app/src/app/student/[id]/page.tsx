"use client"

import { ProfileCard } from "@/components/profile-card"
import { Header } from "@/components/header"

// This would typically come from a database or API
const students = {
  student1: {
    name: "Name Student",
    role: "Student",
    faculty: "Faculty / Study program",
    email: "email@address.com",
    phone: "0123456789",
    interests: ["Data science", "Frontend", "Marketing", "AI", "UX/UI Design"],
    bio: "This is a short description of the student. It can contain information on how often they prefer to meet up with their advisors or if they have any special requirements or preferences.",
  },
}

export default async function StudentPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const student = students[id as keyof typeof students] || students.student1

  return (
    <div className="max-w-md mx-auto bg-[#0f0f2e] min-h-screen">
      <Header title={student.name} showBack backUrl="/" />
      <ProfileCard
        name={student.name}
        role={student.role}
        faculty={student.faculty}
        email={student.email}
        phone={student.phone}
        topics={student.interests}
        description={student.bio}
        isStudent={true}
      />
    </div>
  )
}
