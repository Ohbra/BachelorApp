"use client";

import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function EditStudentProfile() {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([
    "Data science",
    "AI",
    "Frontend",
  ]);

  const toggleInterest = (interest: string) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter((i) => i !== interest));
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  return (
    <div className="max-w-md mx-auto rounded-lg overflow-hidden shadow-lg bg-[#0B0021] text-white">
      <div className="p-4">
        <div className="flex items-center mb-6">
          <Link href="/student">
            <button className="btn-hover p-1 rounded-full">
              <ChevronLeft className="h-5 w-5 mr-2" />
            </button>
          </Link>
          <h2 className="text-lg font-semibold">Edit profile</h2>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-medium mb-3">Personal Information</h3>
            <div className="space-y-3">
              <div className="relative">
                <input
                  placeholder="Full name"
                  className="w-full bg-transparent border border-white/30 rounded-md text-white p-2 placeholder:text-white/50"
                />
              </div>
              <div className="relative">
                <input
                  placeholder="Email address"
                  className="w-full bg-transparent border border-white/30 rounded-md text-white p-2 placeholder:text-white/50"
                />
              </div>
              <div className="relative">
                <input
                  placeholder="Phone number"
                  className="w-full bg-transparent border border-white/30 rounded-md text-white p-2 placeholder:text-white/50"
                />
              </div>
              <div className="relative">
                <input
                  placeholder="Faculty"
                  className="w-full bg-transparent border border-white/30 rounded-md text-white p-2 placeholder:text-white/50"
                />
              </div>
              <div className="relative">
                <input
                  placeholder="Study course"
                  className="w-full bg-transparent border border-white/30 rounded-md text-white p-2 placeholder:text-white/50"
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-3">Profile picture</h3>
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-[#e0e0ff] rounded-full"></div>
              <button className="btn-hover py-1 px-4 rounded-full text-xs">
                Upload new picture
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-3">About me</h3>
            <textarea
              className="w-full h-24 bg-transparent border border-white/30 rounded-md p-2 text-white text-sm"
              placeholder="Describe yourself, your interests, and how you prefer to work with professors."
            ></textarea>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-3">Choose interests</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Data science",
                "Frontend",
                "Marketing",
                "AI",
                "UX/UI Design",
                "Backend",
                "Mobile",
                "Blockchain",
              ].map((interest) => (
                <button
                  key={interest}
                  onClick={() => toggleInterest(interest)}
                  className={`text-xs px-3 py-1.5 rounded-full transition-all duration-300 ${
                    selectedInterests.includes(interest)
                      ? "bg-gradient-to-r from-[#FFE15D] to-[#806b00] text-black"
                      : "hover-card bg-[#1a1a3a] text-white"
                  }`}
                >
                  {interest}
                </button>
              ))}
            </div>
          </div>

          <div className="flex space-x-3">
            <button className="btn-hover py-2 px-4 rounded-md flex-1">
              Save changes
            </button>
            <Link href="/student" className="flex-1">
              <button className="w-full py-2 px-4 border border-white/30 rounded-md text-white bg-transparent btn-hover">
                Cancel
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
