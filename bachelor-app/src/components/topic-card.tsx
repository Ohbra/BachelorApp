"use client";

import { ChevronRight, ChevronDown } from "lucide-react";
import Link from "next/link";

interface TopicCardProps {
  id?: string;
  title: string;
  field: string;
  description: string;
  professor?: {
    name: string;
    department: string;
  };
  tags?: string[];
  expanded?: boolean;
  onExpand?: () => void;
}

export function TopicCard({
  id = "topic1",
  title,
  field,
  description,
  professor,
  tags = [],
  expanded = false,
  onExpand = () => {},
}: TopicCardProps) {
  return (
    <div className="list-card bg-[#1a1a3a] p-5 rounded-3xl shadow-lg relative overflow-hidden">
      <div className="flex justify-between items-start">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-medium card-title">{title}</h3>
            <button onClick={onExpand} className="p-1 rounded-full z-10">
              {expanded ? (
                <ChevronDown className="h-4 w-4 card-icon" />
              ) : (
                <ChevronRight className="h-4 w-4 card-icon" />
              )}
            </button>
          </div>
          <p className="text-xs text-white/70 card-subtitle">{field}</p>
          <p className="text-xs mt-1 text-white/70 card-subtitle">
            {description}
          </p>

          {expanded && professor && (
            <div className="mt-4 space-y-2">
              <h4 className="text-sm font-medium card-title">Professor</h4>
              <div className="flex flex-col gap-1 text-sm">
                <p className="card-title">{professor.name}</p>
                <p className="text-white/70 card-subtitle">
                  {professor.department}
                </p>
              </div>
            </div>
          )}

          {expanded && tags && tags.length > 0 && (
            <div className="mt-4">
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs px-3 py-1 rounded-full bg-white/10 card-subtitle z-10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {!expanded && (
          <Link href={`/topic/${id}`} className="z-10">
            <ChevronRight className="h-5 w-5 text-white/70 card-icon" />
          </Link>
        )}
      </div>
    </div>
  );
}
