"use server";

import { createClient } from "../../utils/server";
import { prisma } from "../../prisma/prisma";

export type StudentProfile = {
  id: string;
  name: string;
  surname: string;
  faculty: string | null;
  course: string | null;
  matriculationNumber: string;
  description: string | null;
  tags: string[];
};

export async function getStudentProfile() {
  try {
    // Create server-side Supabase client
    const supabase = await createClient();

    // Get the logged-in user from Supabase
    const { data: { user }, error } = await supabase.auth.getUser();
    if (error || !user) {
      console.error("⚠️ No logged-in user:", error);
      return { success: false, message: "Not logged in", profile: null };
    }

    const studentId = user.id;
    console.log("getStudentProfile called with:", studentId);

    // Fetch student profile from your DB
    const student = await prisma.student.findUnique({
      where: { student_id: studentId },
      include: {
        user_parent: {
          select: {
            name: true,
            surname: true,
            faculty: { select: { faculty_name: true } },
          },
        },
        course_of_study: { select: { course_name: true } },
        student_tag: { select: { tag_name: true } },
      },
    });

    console.log(" Found student:", student);

    if (!student) {
      return { success: false, message: "Student not found", profile: null };
    }

    const profile: StudentProfile = {
      id: student.student_id,
      name: student.user_parent.name,
      surname: student.user_parent.surname,
      faculty: student.user_parent.faculty?.faculty_name ?? null,
      course: student.course_of_study?.course_name ?? null,
      matriculationNumber: student.student_id,
      description: "No description provided",
      tags: student.student_tag.map((t) => t.tag_name),
    };

    return { success: true, profile };
  } catch (error) {
    console.error("Error fetching student profile:", error);
    return { success: false, message: "Failed to fetch student profile", profile: null };
  }
}
