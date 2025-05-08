import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

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
  return (
    <Link href={`/professor/${id}`} className={cn("block", className)}>
      <div className="list-card bg-[#1a1a3a] flex items-center justify-between p-4 rounded-full shadow-lg">
        <div>
          <h3 className="font-bold text-lg card-title">{name}</h3>
          <p className="text-sm text-white/70 card-subtitle">{department}</p>
        </div>
        <ChevronRight className="h-6 w-6 text-white/70 card-icon" />
      </div>
    </Link>
  );
}
