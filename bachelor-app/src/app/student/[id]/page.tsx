"use client";

import { useEffect, useState } from "react";
import { ProfileCard } from "@/components/profile-card";
import { Header } from "@/components/header";

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
};

export default function StudentPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const [studentId, setStudentId] = useState<string>("");
  const [student, setStudent] = useState<typeof students.student1 | null>(null);

  // Resolve the params Promise
  useEffect(() => {
    const resolveParams = async () => {
      const resolvedParams = await params;
      setStudentId(resolvedParams.id);

      // Get student data
      const studentData =
        students[resolvedParams.id as keyof typeof students] ||
        students.student1;
      setStudent(studentData);
    };
    resolveParams();
  }, [params]);

  // Show loading state while params are being resolved
  if (!studentId || !student) {
    return (
      <div className="max-w-md mx-auto bg-[#0f0f2e] min-h-screen flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

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
  );
}
