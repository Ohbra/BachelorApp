interface InterestsTagsProps {
  interests: string[];
  variant?: "default" | "secondary" | "outline" | "destructive";
  highlighted?: boolean;
}

export function InterestsTags({
  interests,
  variant = "secondary",
  highlighted = false,
}: InterestsTagsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {interests.map((interest, index) => (
        <span
          key={index}
          className={`text-xs px-3 py-1.5 rounded-full ${
            highlighted ? "bg-[#FFDE59] text-black" : "bg-[#1a1a3a] text-white"
          }`}
        >
          {interest}
        </span>
      ))}
    </div>
  );
}
