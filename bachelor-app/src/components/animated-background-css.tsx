"use client";

import { cn } from "@/lib/utils";

interface AnimatedBackgroundCSSProps {
  variant: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}

export function AnimatedBackgroundCSS({
  variant,
  className,
}: AnimatedBackgroundCSSProps) {
  // Define blob configurations based on variant
  const blobConfigs = {
    1: [
      { color: "#FFE15D", top: "20%", left: "20%", size: "40vw", delay: "0s" },
      {
        color: "#9D8DF1",
        top: "60%",
        left: "60%",
        size: "30vw",
        delay: "0.5s",
      },
    ],
    2: [
      {
        color: "#FFE15D",
        top: "30%",
        left: "20%",
        size: "40vw",
        delay: "0.2s",
      },
      {
        color: "#9D8DF1",
        top: "50%",
        left: "70%",
        size: "35vw",
        delay: "0.7s",
      },
    ],
    3: [
      {
        color: "#FFE15D",
        top: "40%",
        left: "50%",
        size: "35vw",
        delay: "0.3s",
      },
      {
        color: "#9D8DF1",
        top: "20%",
        left: "20%",
        size: "30vw",
        delay: "0.1s",
      },
    ],
    4: [
      {
        color: "#FFE15D",
        top: "70%",
        left: "50%",
        size: "40vw",
        delay: "0.4s",
      },
      {
        color: "#9D8DF1",
        top: "30%",
        left: "30%",
        size: "35vw",
        delay: "0.2s",
      },
    ],
    5: [
      {
        color: "#FFE15D",
        top: "50%",
        left: "30%",
        size: "30vw",
        delay: "0.5s",
      },
      {
        color: "#9D8DF1",
        top: "30%",
        left: "70%",
        size: "35vw",
        delay: "0.3s",
      },
    ],
    6: [
      {
        color: "#FFE15D",
        top: "20%",
        left: "20%",
        size: "40vw",
        delay: "0.6s",
      },
      {
        color: "#9D8DF1",
        top: "60%",
        left: "60%",
        size: "30vw",
        delay: "0.4s",
      },
    ],
  }[variant];

  return (
    <div
      className={cn(
        "fixed inset-0 -z-10 overflow-hidden bg-[#0f0f2e]",
        className
      )}
    >
      {blobConfigs.map((blob, index) => (
        <div
          key={index}
          className="blob absolute rounded-full opacity-70 animate-blob"
          style={{
            backgroundColor: blob.color,
            top: blob.top,
            left: blob.left,
            width: blob.size,
            height: blob.size,
            animationDelay: blob.delay,
            filter: "blur(40px)",
          }}
        />
      ))}
    </div>
  );
}
