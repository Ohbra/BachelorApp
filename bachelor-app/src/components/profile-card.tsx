import { Mail } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

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
    <Card className="w-full max-w-sm">
      <CardHeader className="flex flex-row items-start gap-4 space-y-0">
        <Avatar className="h-16 w-16">
          <AvatarImage src={avatarSrc || "/placeholder.svg"} alt={name} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <div className="space-y-1.5">
          <h3 className="text-xl font-semibold">{name}</h3>
          <div className="flex flex-col gap-1 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              {isStudent ? <span>{faculty}</span> : <span>{role}</span>}
            </div>
            <div className="flex items-center gap-1">
              <Mail className="h-3.5 w-3.5" />
              <span>{email}</span>
            </div>
            {phone && (
              <div className="flex items-center gap-1">
                <span>{phone}</span>
              </div>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {topics && topics.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-sm font-medium">List of offered topics:</h4>
            <div className="flex flex-wrap gap-2">
              {topics.map((topic, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {topic}
                </Badge>
              ))}
            </div>
          </div>
        )}
        {description && (
          <div className="space-y-2">
            <h4 className="text-sm font-medium">
              How I like to work with my students:
            </h4>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button size="sm" variant="outline" className="w-full text-xs">
          Send email
        </Button>
        <Button size="sm" className="w-full text-xs">
          Go to the profile
        </Button>
      </CardFooter>
    </Card>
  );
}
