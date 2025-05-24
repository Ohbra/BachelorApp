"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedBlobsProps {
  variant?: "yellow-purple" | "purple-yellow";
  className?: string;
}

export function AnimatedBlobs({
  variant = "yellow-purple",
  className,
}: AnimatedBlobsProps) {
  const [mounted, setMounted] = useState(false);

  // Ensure hydration is complete before showing animations
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
      <style jsx>{`
        .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.7;
          transition: all 0.5s ease-in-out;
        }

        .blob-yellow {
          background: radial-gradient(
            circle,
            rgba(255, 225, 93, 1) 0%,
            rgba(255, 225, 93, 0) 70%
          );
          animation: blob-morph 20s ease-in-out infinite alternate,
            blob-float 15s ease-in-out infinite;
        }

        .blob-purple {
          background: radial-gradient(
            circle,
            rgba(157, 141, 241, 1) 0%,
            rgba(157, 141, 241, 0) 70%
          );
          animation: blob-morph 20s ease-in-out infinite alternate-reverse,
            blob-float 15s ease-in-out infinite reverse;
        }

        @keyframes blob-morph {
          0% {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          }
          33% {
            border-radius: 70% 30% 50% 50% / 30% 30% 70% 70%;
          }
          66% {
            border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
          }
          100% {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          }
        }

        @keyframes blob-float {
          0% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(5%, 5%) scale(1.1);
          }
          66% {
            transform: translate(-5%, -5%) scale(0.9);
          }
          100% {
            transform: translate(0, 0) scale(1);
          }
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .blob-yellow,
          .blob-purple {
            filter: blur(40px);
          }
        }
      `}</style>

      {variant === "yellow-purple" ? (
        <>
          <div
            className="blob blob-yellow"
            style={{
              top: "10%",
              left: "10%",
              width: "60%",
              height: "60%",
            }}
          />
          <div
            className="blob blob-purple"
            style={{
              bottom: "10%",
              right: "10%",
              width: "50%",
              height: "50%",
            }}
          />
        </>
      ) : (
        <>
          <div
            className="blob blob-purple"
            style={{
              top: "10%",
              right: "10%",
              width: "60%",
              height: "60%",
            }}
          />
          <div
            className="blob blob-yellow"
            style={{
              bottom: "10%",
              left: "10%",
              width: "50%",
              height: "50%",
            }}
          />
        </>
      )}
    </div>
  );
}
