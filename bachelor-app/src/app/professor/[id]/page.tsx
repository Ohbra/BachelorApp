"use client";

import Link from "next/link";
import { ChevronLeft } from "lucide-react";

// This would typically come from a database or API
const professors = {
  prof1: {
    name: "Name Prof.",
    role: "Data Science",
    faculty: "Faculty | field",
    email: "email@address.com",
    phone: "0123456789",
    topics: ["Title topic", "Title topic", "Title topic"],
    description:
      "This is a short description of how the professor likes to work with their students. It includes information about how they prefer to meet up with their students or if they have any special requirements or preferences.",
  },
  prof2: {
    name: "Jane Smith",
    role: "Frontend Development",
    faculty: "Faculty | field",
    email: "jane.smith@address.com",
    phone: "0123456789",
    topics: ["UI/UX Design", "React", "Web Accessibility"],
    description:
      "I prefer to meet with students weekly to discuss progress and challenges. I'm available for additional support via email and encourage students to collaborate with each other.",
  },
  prof3: {
    name: "Name Professor",
    role: "Economy",
    faculty: "Faculty | field",
    email: "email@address.com",
    phone: "0123456789",
    topics: ["Title topic", "Title topic", "Title topic"],
    description:
      "This is a short description of how the professor likes to work with their students. It includes information about how they prefer to meet up with their students or if they have any special requirements or preferences.",
  },
};

export default function ProfessorPage({ params }: { params: { id: string } }) {
  const professor =
    professors[params.id as keyof typeof professors] || professors.prof1;

  return (
    <div className="max-w-md mx-auto bg-[#0B0021] min-h-screen text-white">
      <div className="p-6">
        {/* Header with back button */}
        <div className="flex items-center mb-6">
          <Link href="/">
            <button className="btn-hover p-1 rounded-full">
              <ChevronLeft className="h-6 w-6 mr-2 text-white" />
            </button>
          </Link>
          <h2 className="text-xl font-bold text-white">{professor.name}</h2>
        </div>

        {/* Professor Profile */}
        <div className="flex items-center mb-4">
          <div className="flex-1">
            <h2 className="text-xl font-bold">{professor.name}</h2>
            <p className="text-sm opacity-80">{professor.faculty}</p>
          </div>
          <div className="h-16 w-16 bg-[#e0e0ff] rounded-full ml-4"></div>
        </div>

        <div>
          <p className="text-sm opacity-80">{professor.email}</p>
          {professor.phone && (
            <p className="text-sm opacity-80">{professor.phone}</p>
          )}
        </div>

        <div className="mt-4">
          <button className="btn-hover py-1 px-4 rounded-full text-xs">
            send email
          </button>
        </div>

        {professor.description && (
          <div className="mt-6">
            <h3 className="text-lg font-bold mb-2">
              How I like to work with my students:
            </h3>
            <p className="text-sm text-white/80">{professor.description}</p>
          </div>
        )}

        {professor.topics && professor.topics.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-bold mb-3">List of offered topics:</h3>
            <div className="space-y-3">
              {professor.topics.map((topic, index) => (
                <div key={index} className="hover-card p-4 rounded-2xl">
                  <h4 className="font-bold card-content">Title topic</h4>
                  <p className="text-sm text-white/70 card-subtitle">field</p>
                  <p className="text-sm text-white/70 card-subtitle">
                    This is a short description of the topic...
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
