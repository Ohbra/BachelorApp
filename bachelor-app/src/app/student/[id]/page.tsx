"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { ProfileCard } from "@/components/profile-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { InterestsTags } from "@/components/interests-tags";

// This would typically come from a database or API
const students = {
  student1: {
    name: "Name Student",
    role: "Student",
    faculty: "Faculty / Study program",
    email: "email@address.com",
    phone: "0123456789",
    interests: ["Data science", "Frontend", "Marketing", "AI", "UX/UI Design"],
    courses: [
      {
        name: "Programming",
        semester: "WS 2023/24",
        professor: "Andreas Müller",
      },
      {
        name: "Screendesign",
        semester: "SS 2024",
        professor: "Sarah Smith",
      },
      {
        name: "Data science Basics",
        semester: "WS 2024/25",
        professor: "Doris Gershov",
      },
    ],
    bio: "This is the student bio. It can contain information on how often they prefer to meet up with their advisors or if they have any special requirements or preferences.",
  },
};

export default function StudentPage({ params }: { params: { id: string } }) {
  const student =
    students[params.id as keyof typeof students] || students.student1;

  return (
    <div className="container mx-auto p-4">
      <div className="mb-6">
        <Link href="/">
          <Button variant="ghost" className="pl-0">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to search
          </Button>
        </Link>
      </div>

      <div className="mx-auto max-w-2xl space-y-6">
        <h1 className="text-2xl font-bold">Student Profile</h1>

        <ProfileCard
          name={student.name}
          role={student.role}
          faculty={student.faculty}
          email={student.email}
          phone={student.phone}
          isStudent={true}
          description={student.bio}
        />

        <Card>
          <CardContent className="pt-6 space-y-4">
            <div>
              <h3 className="text-lg font-medium">Interests</h3>
              <InterestsTags interests={student.interests} />
            </div>

            <div>
              <h3 className="text-lg font-medium">Previous Courses</h3>
              <div className="space-y-2">
                {student.courses.map((course, index) => (
                  <div key={index}>
                    <p className="font-medium">{course.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {course.semester} | {course.professor}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
