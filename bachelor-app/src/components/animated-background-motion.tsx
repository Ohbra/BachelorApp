"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedBackgroundMotionProps {
  variant?: "yellow-purple" | "purple-yellow";
  className?: string;
}

export function AnimatedBackgroundMotion({
  variant = "yellow-purple",
  className,
}: AnimatedBackgroundMotionProps) {
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
        "fixed inset-0 z-[-1] overflow-hidden bg-[#0f0f2e]",
        className
      )}
    >
      {variant === "yellow-purple" ? (
        <>
          <motion.div
            className="absolute rounded-full opacity-70"
            style={{
              background:
                "radial-gradient(circle, rgba(255, 225, 93, 1) 0%, rgba(255, 225, 93, 0) 70%)",
              filter: "blur(60px)",
              top: "10%",
              left: "10%",
              width: "60%",
              height: "60%",
            }}
            animate={{
              x: [0, 20, -20, 0],
              y: [0, -20, 20, 0],
              scale: [1, 1.1, 0.9, 1],
              borderRadius: [
                "60% 40% 30% 70% / 60% 30% 70% 40%",
                "70% 30% 50% 50% / 30% 30% 70% 70%",
                "30% 60% 70% 40% / 50% 60% 30% 60%",
                "60% 40% 30% 70% / 60% 30% 70% 40%",
              ],
            }}
            transition={{
              duration: 20,
              ease: "easeInOut",
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="absolute rounded-full opacity-60"
            style={{
              background:
                "radial-gradient(circle, rgba(157, 141, 241, 1) 0%, rgba(157, 141, 241, 0) 70%)",
              filter: "blur(60px)",
              bottom: "10%",
              right: "10%",
              width: "50%",
              height: "50%",
            }}
            animate={{
              x: [0, -20, 20, 0],
              y: [0, 20, -20, 0],
              scale: [1, 0.9, 1.1, 1],
              borderRadius: [
                "60% 40% 30% 70% / 60% 30% 70% 40%",
                "30% 60% 70% 40% / 50% 60% 30% 60%",
                "70% 30% 50% 50% / 30% 30% 70% 70%",
                "60% 40% 30% 70% / 60% 30% 70% 40%",
              ],
            }}
            transition={{
              duration: 20,
              ease: "easeInOut",
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: 1,
            }}
          />
        </>
      ) : (
        <>
          <motion.div
            className="absolute rounded-full opacity-60"
            style={{
              background:
                "radial-gradient(circle, rgba(157, 141, 241, 1) 0%, rgba(157, 141, 241, 0) 70%)",
              filter: "blur(60px)",
              top: "10%",
              right: "10%",
              width: "60%",
              height: "60%",
            }}
            animate={{
              x: [0, -20, 20, 0],
              y: [0, -20, 20, 0],
              scale: [1, 1.1, 0.9, 1],
              borderRadius: [
                "60% 40% 30% 70% / 60% 30% 70% 40%",
                "70% 30% 50% 50% / 30% 30% 70% 70%",
                "30% 60% 70% 40% / 50% 60% 30% 60%",
                "60% 40% 30% 70% / 60% 30% 70% 40%",
              ],
            }}
            transition={{
              duration: 20,
              ease: "easeInOut",
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="absolute rounded-full opacity-70"
            style={{
              background:
                "radial-gradient(circle, rgba(255, 225, 93, 1) 0%, rgba(255, 225, 93, 0) 70%)",
              filter: "blur(60px)",
              bottom: "10%",
              left: "10%",
              width: "50%",
              height: "50%",
            }}
            animate={{
              x: [0, 20, -20, 0],
              y: [0, 20, -20, 0],
              scale: [1, 0.9, 1.1, 1],
              borderRadius: [
                "60% 40% 30% 70% / 60% 30% 70% 40%",
                "30% 60% 70% 40% / 50% 60% 30% 60%",
                "70% 30% 50% 50% / 30% 30% 70% 70%",
                "60% 40% 30% 70% / 60% 30% 70% 40%",
              ],
            }}
            transition={{
              duration: 20,
              ease: "easeInOut",
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: 1,
            }}
          />
        </>
      )}
    </div>
  );
}
