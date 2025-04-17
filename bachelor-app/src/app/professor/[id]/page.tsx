"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { ProfileCard } from "@/components/profile-card";
import { Button } from "@/components/ui/button";

// This would typically come from a database or API
const professors = {
  prof1: {
    name: "Name Prof.",
    role: "Data Science",
    email: "email@address.com",
    phone: "0123456789",
    topics: ["Data Science", "Machine Learning", "AI"],
    description:
      "This is a short description of how the professor likes to work with their students. It includes information about how they prefer to meet up with their students or if they have any special requirements or preferences.",
  },
  prof2: {
    name: "Jane Smith",
    role: "Frontend Development",
    email: "jane.smith@address.com",
    phone: "0123456789",
    topics: ["UI/UX Design", "React", "Web Accessibility"],
    description:
      "I prefer to meet with students weekly to discuss progress and challenges. I'm available for additional support via email and encourage students to collaborate with each other.",
  },
  prof3: {
    name: "Michael Johnson",
    role: "Economics",
    email: "michael.johnson@address.com",
    phone: "0123456789",
    topics: ["Macroeconomics", "Financial Markets", "Economic Policy"],
    description:
      "I believe in a hands-on approach to learning economics. Students should be prepared to analyze real-world cases and apply theoretical concepts to current economic situations.",
  },
  prof4: {
    name: "Sarah Williams",
    role: "Economics",
    email: "sarah.williams@address.com",
    phone: "0123456789",
    topics: ["Microeconomics", "Game Theory", "Behavioral Economics"],
    description:
      "My approach focuses on critical thinking and problem-solving. I expect students to come prepared with questions and engage actively in discussions.",
  },
  prof5: {
    name: "David Brown",
    role: "Economics",
    email: "david.brown@address.com",
    phone: "0123456789",
    topics: [
      "International Economics",
      "Development Economics",
      "Economic History",
    ],
    description:
      "I encourage students to explore the historical and cultural contexts of economic theories. My office hours are flexible, and I'm always open to discussing research opportunities.",
  },
};

export default function ProfessorPage({ params }: { params: { id: string } }) {
  const professor =
    professors[params.id as keyof typeof professors] || professors.prof1;

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

      <div className="mx-auto max-w-2xl">
        <h1 className="mb-6 text-2xl font-bold">Professor Profile</h1>
        <ProfileCard
          name={professor.name}
          role={professor.role}
          email={professor.email}
          phone={professor.phone}
          topics={professor.topics}
          description={professor.description}
        />
      </div>
    </div>
  );
}
