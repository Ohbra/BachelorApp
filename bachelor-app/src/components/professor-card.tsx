"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { getProfessorDetails, ProfessorDetails } from "../app/backend/actions/professors/get-professor-detail";

interface ProfessorCardProps {
  id: string;
  name: string;
  department: string;
  className?: string;
}

export function ProfessorCard({
  id,
  name,
  department,
  className,
}: ProfessorCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [details, setDetails] = useState<ProfessorDetails | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleExpand = async () => {
    if (expanded) {
      setExpanded(false);
    } else {
      setIsLoading(true);
      const res = await getProfessorDetails(id);
      if (res.success && res.details) {
        setDetails(res.details);
      } else {
        console.error("⚠️ Failed to fetch professor details:", res.message);
      }
      setIsLoading(false);
      setExpanded(true);
    }
  };

  return (
    <div className={cn("list-card bg-[#1a1a3a] p-4 rounded-3xl shadow-lg relative overflow-hidden", className)}>
      <div className="flex justify-between items-start">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-bold text-lg card-title">{name}</h3>
            <button onClick={handleExpand} className="p-1 rounded-full z-10">
              {expanded ? (
                <ChevronDown className="h-4 w-4 card-icon" />
              ) : (
                <ChevronRight className="h-4 w-4 card-icon" />
              )}
            </button>
          </div>
          <p className="text-sm text-white/70 card-subtitle">{department}</p>

          {expanded && (
            <div className="mt-4 text-sm text-white/70">
              {isLoading ? (
                <p>Loading details...</p>
              ) : (
                <>
                  <p><span className="font-semibold">Profile:</span> {details?.profile}</p>
                  <p><span className="font-semibold">Research:</span> {details?.researchPriorities}</p>
                  <p><span className="font-semibold">Subject Area:</span> {details?.subjectArea}</p>
                </>
              )}
            </div>
          )}
        </div>

        {!expanded && (
          <Link href={`/professor/${id}`} className="z-10">
            <ChevronRight className="h-6 w-6 text-white/70 card-icon" />
          </Link>
        )}
      </div>
    </div>
  );
}
