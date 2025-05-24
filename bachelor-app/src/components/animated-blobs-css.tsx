"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";

interface AnimatedBlobsCSSProps {
  variant?: "yellow-purple" | "purple-yellow";
  className?: string;
}

export function AnimatedBlobsCSS({
  variant = "yellow-purple",
  className,
}: AnimatedBlobsCSSProps) {
  const [mounted, setMounted] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  // Ensure hydration is complete before showing animations
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="fixed inset-0 z-[-1] bg-[#0f0f2e]" />;
  }

  return (
    <div
      className={cn(
        "fixed inset-0 z-[-1] overflow-hidden bg-[#0f0f2e]",
        className
      )}
    >
      <style jsx global>{`
        @keyframes blob-float {
          0% {
            transform: translate(0, 0) scale(1) rotate(0deg);
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          }
          33% {
            transform: translate(3%, 3%) scale(1.05) rotate(60deg);
            border-radius: 70% 30% 50% 50% / 30% 30% 70% 70%;
          }
          66% {
            transform: translate(-3%, -3%) scale(0.95) rotate(120deg);
            border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
          }
          100% {
            transform: translate(0, 0) scale(1) rotate(180deg);
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          }
        }

        .blob-yellow {
          position: absolute;
          border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          background: linear-gradient(17.92deg, #f6ff00 0%, #dad8ff 100%);
          backdrop-filter: blur(80px);
          animation: blob-float 12s ease-in-out infinite;
        }

        .blob-purple {
          position: absolute;
          border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          background: linear-gradient(36.96deg, #dad8ff 0%, #080c33 100%);
          backdrop-filter: blur(80px);
          animation: blob-float 12s ease-in-out infinite reverse;
        }
      `}</style>

      {variant === "yellow-purple" ? (
        <>
          <div
            className="blob-yellow"
            style={
              isDesktop
                ? {
                    width: "500px",
                    height: "700px",
                    top: "5%",
                    left: "5%",
                  }
                : {
                    width: "259px",
                    height: "364px",
                    top: "79.7px",
                    left: "-133px",
                  }
            }
          />
          <div
            className="blob-purple"
            style={
              isDesktop
                ? {
                    width: "500px",
                    height: "700px",
                    bottom: "5%",
                    right: "5%",
                    animationDelay: "3s",
                  }
                : {
                    width: "259px",
                    height: "364px",
                    top: "372.71px",
                    left: "177px",
                    animationDelay: "3s",
                  }
            }
          />
        </>
      ) : (
        <>
          <div
            className="blob-purple"
            style={
              isDesktop
                ? {
                    width: "500px",
                    height: "700px",
                    top: "5%",
                    right: "5%",
                  }
                : {
                    width: "259px",
                    height: "364px",
                    top: "79.7px",
                    left: "177px",
                  }
            }
          />
          <div
            className="blob-yellow"
            style={
              isDesktop
                ? {
                    width: "500px",
                    height: "700px",
                    bottom: "5%",
                    left: "5%",
                    animationDelay: "3s",
                  }
                : {
                    width: "259px",
                    height: "364px",
                    top: "372.71px",
                    left: "-133px",
                    animationDelay: "3s",
                  }
            }
          />
        </>
      )}
    </div>
  );
}
