import type React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes } from "react";

interface YellowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export function YellowButton({
  children,
  className,
  ...props
}: YellowButtonProps) {
  return (
    <Button
      className={cn(
        "bg-yellow-400 hover:bg-yellow-500 text-black font-medium",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
}
