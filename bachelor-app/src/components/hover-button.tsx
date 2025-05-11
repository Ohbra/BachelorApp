import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes } from "react";

interface HoverButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "rounded";
  className?: string;
}

export function HoverButton({
  children,
  variant = "default",
  className,
  ...props
}: HoverButtonProps) {
  return (
    <button
      className={cn(
        "btn-hover",
        variant === "default" &&
          "py-2 px-4 border border-white/30 rounded-md bg-transparent text-white",
        variant === "outline" &&
          "py-2 px-4 border border-white/30 rounded-md bg-transparent text-white",
        variant === "rounded" &&
          "py-1 px-4 border border-white/30 rounded-full bg-transparent text-white text-xs",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
