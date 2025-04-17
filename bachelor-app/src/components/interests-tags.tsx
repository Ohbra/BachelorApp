import { Badge } from "@/components/ui/badge";

interface InterestsTagsProps {
  interests: string[];
  variant?: "default" | "secondary" | "outline" | "destructive";
}

export function InterestsTags({
  interests,
  variant = "secondary",
}: InterestsTagsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {interests.map((interest, index) => (
        <Badge key={index} variant={variant} className="text-xs">
          {interest}
        </Badge>
      ))}
    </div>
  );
}
