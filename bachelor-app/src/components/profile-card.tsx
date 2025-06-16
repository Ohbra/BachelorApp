import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { YellowButton } from "@/components/yellow-button";

interface ProfileCardProps {
  name: string;
  role: string;
  faculty?: string;
  email: string;
  phone?: string;
  topics?: string[];
  description?: string;
  avatarSrc?: string;
  isStudent?: boolean;
  showBackButton?: boolean;
}

export function ProfileCard({
  name,
  role,
  faculty,
  email,
  phone,
  topics = [],
  description,
  avatarSrc,
  isStudent = false,
}: ProfileCardProps) {
  // Get initials for avatar fallback
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className="max-w-md mx-auto rounded-lg overflow-hidden shadow-lg bg-[#0f0f2e] text-white p-4">
      <div className="flex items-center mb-4">
        <div className="flex-1">
          <h2 className="text-lg font-semibold">{name}</h2>
          <p className="text-sm opacity-80">
            {faculty} | {role}
          </p>
          {isStudent && <p className="text-sm opacity-80">Matr.-Nr.</p>}
        </div>
        <Avatar className="h-16 w-16 bg-[#e0e0ff] ml-4">
          <AvatarImage src={avatarSrc || "/placeholder.svg"} alt={name} />
          <AvatarFallback className="text-gray-800">{initials}</AvatarFallback>
        </Avatar>
      </div>

      <div>
        <p className="text-sm opacity-80">{email}</p>
        {phone && <p className="text-sm opacity-80">{phone}</p>}
      </div>

      <div className="mt-2">
        <Link href={isStudent ? "/student/edit" : "/professor/edit"}>
          <YellowButton>
            {isStudent ? "edit profile" : "send email"}
          </YellowButton>
        </Link>
      </div>

      {description && (
        <div className="mt-4">
          <p className="text-xs text-white/70 mb-4">{description}</p>
        </div>
      )}

      {isStudent && (
        <div className="mt-4">
          <h3 className="text-sm font-medium mb-2">Interests:</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {topics.map((topic, index) => (
              <span
                key={index}
                className="text-xs bg-[#1a1a3a] px-3 py-1.5 rounded-full"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      )}

      {!isStudent && topics && topics.length > 0 && (
        <div className="mt-4">
          <h3 className="text-sm font-medium mb-2">List of offered topics:</h3>
          <div className="space-y-2">
            {topics.map((topic, index) => (
              <div key={index} className="bg-[#1a1a3a] p-3 rounded-md">
                <h4 className="font-medium">Title topic</h4>
                <p className="text-xs text-white/70">field</p>
                <p className="text-xs text-white/70">
                  This is a short description of the topic...
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
