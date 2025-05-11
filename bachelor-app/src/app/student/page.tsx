import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function StudentProfile() {
  return (
    <div className="max-w-md mx-auto rounded-lg overflow-hidden shadow-lg bg-[#0B0021] text-white">
      <div className="p-4">
        <div className="flex items-center mb-4">
          <Link href="/">
            <button className="btn-hover p-1 rounded-full">
              <ChevronLeft className="h-5 w-5 mr-2" />
            </button>
          </Link>
          <h2 className="text-lg font-semibold">Name Student</h2>
        </div>
        <div>
          <p className="text-sm opacity-80">Faculty | Study course</p>
          <p className="text-sm opacity-80">Matr.-Nr.</p>
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
            This is a short description of the student. It can contain
            information on how often they prefer to meet up with their students
            or if they have any special requirements or preferences.
          </p>

          <h3 className="text-sm font-medium mb-2">Interests:</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {[
              "Data science",
              "AI",
              "Frontend",
              "Marketing",
              "UX / UI Design",
            ].map((interest, index) => (
              <span
                key={index}
                className="hover-card text-xs px-3 py-1.5 rounded-full"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
