import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function FieldsList() {
  const fields = [
    {
      name: "Data Science",
      description: "Analysis and interpretation of complex data",
    },
    {
      name: "Frontend Development",
      description: "Creating user interfaces and experiences",
    },
    {
      name: "Backend Development",
      description: "Server-side logic and database management",
    },
    { name: "UX Design", description: "User experience research and design" },
    {
      name: "Economy",
      description: "Economic theory and business applications",
    },
    {
      name: "Marketing",
      description: "Digital and traditional marketing strategies",
    },
    {
      name: "Artificial Intelligence",
      description: "Machine learning and AI applications",
    },
    {
      name: "Mobile Development",
      description: "iOS and Android application development",
    },
    { name: "Cybersecurity", description: "Network and application security" },
    {
      name: "Cloud Computing",
      description: "Distributed systems and cloud architecture",
    },
    { name: "Game Development", description: "Game design and programming" },
    { name: "Blockchain", description: "Distributed ledger technologies" },
  ];

  return (
    <div className="max-w-md mx-auto rounded-lg overflow-hidden shadow-lg bg-[#0B0021] text-white">
      <div className="p-4">
        <div className="flex items-center mb-6">
          <Link href="/">
            <button className="btn-hover p-1 rounded-full">
              <ChevronLeft className="h-5 w-5 mr-2" />
            </button>
          </Link>
          <h2 className="text-lg font-semibold">Study Fields</h2>
        </div>

        <div className="space-y-3">
          {fields.map((field, index) => (
            <div key={index} className="hover-card">
              <h3 className="font-medium card-content">{field.name}</h3>
              <p className="text-sm text-white/70 card-subtitle">
                {field.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
