"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface BlobBackgroundProps {
  variant: "yellow-purple" | "purple-yellow";
  className?: string;
}

export function BlobBackground({ variant, className }: BlobBackgroundProps) {
  const [mounted, setMounted] = useState(false);

  // Only show animation after component is mounted to prevent hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="fixed inset-0 -z-10 bg-[#0f0f2e]" />;
  }

  return (
    <div
      className={cn(
        "fixed inset-0 -z-10 overflow-hidden bg-[#0f0f2e]",
        className
      )}
    >
      {variant === "yellow-purple" ? (
        <>
          <div className="blob-yellow absolute top-[10%] left-[10%] w-[60%] h-[60%] rounded-full opacity-70" />
          <div className="blob-purple absolute bottom-[10%] right-[10%] w-[50%] h-[50%] rounded-full opacity-60" />
        </>
      ) : (
        <>
          <div className="blob-purple absolute top-[10%] right-[10%] w-[60%] h-[60%] rounded-full opacity-70" />
          <div className="blob-yellow absolute bottom-[10%] left-[10%] w-[50%] h-[50%] rounded-full opacity-60" />
        </>
      )}
    </div>
  );
}
