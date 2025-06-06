"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { getStudentProfile, StudentProfile } from "../backend/actions/student/get-student-profile";

export default function StudentProfilePage() {
  const [profile, setProfile] = useState<StudentProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchProfile() {
      const res = await getStudentProfile();
      if (res.success && res.profile) {
        setProfile(res.profile);
      } else {
        console.error("⚠️ Failed to load profile:", res.message);
      }
      setIsLoading(false);
    }
    fetchProfile();
  }, []);

  return (
    <div className="max-w-md mx-auto rounded-lg overflow-hidden shadow-lg bg-[#0B0021] text-white">
      <div className="p-4">
        <div className="flex items-center mb-4">
          <Link href="/">
            <button className="btn-hover p-1 rounded-full">
              <ChevronLeft className="h-5 w-5 mr-2" />
            </button>
          </Link>
          <h2 className="text-lg font-semibold">
            {isLoading ? "Loading..." : profile ? `${profile.name} ${profile.surname}` : "No profile found"}
          </h2>
        </div>

        {profile && (
          <>
            <div>
              <p className="text-sm opacity-80">
                {profile.faculty || "No faculty"} | {profile.course || "No course"}
              </p>
              <p className="text-sm opacity-80">{profile.matriculationNumber}</p>
            </div>
            <div className="mt-2">
              <Link href="/student/edit">
                <button className="btn-hover py-1 px-4 rounded-full text-xs">
                  edit profile
                </button>
              </Link>
            </div>
            <div className="mt-4">
              <p className="text-xs text-white/70 mb-4">
                {profile.description ?? "No description provided"}
              </p>
              <h3 className="text-sm font-medium mb-2">Interests:</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {profile.tags.length > 0 ? (
                  profile.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="hover-card text-xs px-3 py-1.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))
                ) : (
                  <p className="text-xs opacity-50">No interests added</p>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
