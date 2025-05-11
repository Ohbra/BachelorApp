"use client";

import Link from "next/link";
import { ChevronLeft } from "lucide-react";

// This would typically come from a database or API
const topics = {
  topic1: {
    title: "Title topic",
    field: "field",
    faculty: "Faculty",
    description:
      "This is the topic description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
    professor: {
      name: "Name Professor",
      email: "email@address.com",
      phone: "0123456789",
    },
    requirements: [
      "Short description of the needed requirements. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.",
      "Skills or prior knowledge. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.",
    ],
    tags: ["Data science", "Frontend", "Marketing", "AI", "UX/UI Design"],
  },
};

export default function TopicPage({ params }: { params: { id: string } }) {
  const topic = topics[params.id as keyof typeof topics] || topics.topic1;

  return (
    <div className="max-w-md mx-auto bg-[#e6e6ff] min-h-screen text-black">
      <div className="p-6">
        {/* Header with back button */}
        <div className="flex items-center mb-6">
          <Link href="/">
            <button className="btn-hover p-1 rounded-full">
              <ChevronLeft className="h-6 w-6 mr-2" />
            </button>
          </Link>
          <h2 className="text-xl font-bold">{topic.title}</h2>
        </div>

        <div>
          <p className="text-sm text-gray-600">
            {topic.faculty} | {topic.field}
          </p>
          <p className="text-sm font-medium mt-2">{topic.professor.name}</p>
          <p className="text-sm">{topic.professor.email}</p>
          <p className="text-sm">{topic.professor.phone}</p>
          <button className="btn-hover py-1 px-4 border border-gray-300 rounded-full bg-transparent text-black text-xs mt-4">
            send email
          </button>
        </div>

        <div className="mt-8">
          <p className="text-sm mb-6">{topic.description}</p>

          <h3 className="text-lg font-bold mb-3">Requirements:</h3>
          <ul className="list-disc pl-5 text-sm space-y-3">
            {topic.requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>

          <h3 className="text-lg font-bold mt-6 mb-3">Tags:</h3>
          <div className="flex flex-wrap gap-2">
            {topic.tags.map((tag, index) => (
              <span
                key={index}
                className="hover-card text-sm bg-[#d8d8ff] px-4 py-2 rounded-full shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
