import Link from "next/link";
import { cn } from "@/lib/utils";

interface FieldCardProps {
  name: string;
  href: string;
  className?: string;
}

export function FieldCard({ name, href, className }: FieldCardProps) {
  return (
    <Link href={href} className={cn("block", className)}>
      <div className="field-card">
        <span className="text-xl font-medium z-10">{name}</span>
      </div>
    </Link>
  );
}
