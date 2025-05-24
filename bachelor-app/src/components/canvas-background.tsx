"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface CanvasBackgroundProps {
  variant?: "yellow-purple" | "purple-yellow";
  className?: string;
}

export function CanvasBackground({
  variant = "yellow-purple",
  className,
}: CanvasBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Define colors based on variant
    const colors =
      variant === "yellow-purple"
        ? { blob1: "#FFE15D", blob2: "#9D8DF1" }
        : { blob1: "#9D8DF1", blob2: "#FFE15D" };

    // Animation variables
    let animationFrameId: number;
    let time = 0;

    // Draw function
    const draw = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Fill background
      ctx.fillStyle = "#0f0f2e";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw first blob
      const x1 = canvas.width * 0.3 + Math.sin(time * 0.5) * 50;
      const y1 = canvas.height * 0.3 + Math.cos(time * 0.3) * 50;
      const radius1 =
        Math.min(canvas.width, canvas.height) *
        0.4 *
        (0.9 + Math.sin(time * 0.2) * 0.1);

      // Create gradient for first blob
      const gradient1 = ctx.createRadialGradient(x1, y1, 0, x1, y1, radius1);
      gradient1.addColorStop(0, colors.blob1);
      gradient1.addColorStop(1, "rgba(15, 15, 46, 0)");

      // Draw first blob
      ctx.beginPath();
      ctx.fillStyle = gradient1;
      ctx.arc(x1, y1, radius1, 0, Math.PI * 2);
      ctx.fill();

      // Draw second blob
      const x2 = canvas.width * 0.7 + Math.sin(time * 0.3) * 50;
      const y2 = canvas.height * 0.7 + Math.cos(time * 0.5) * 50;
      const radius2 =
        Math.min(canvas.width, canvas.height) *
        0.35 *
        (0.9 + Math.sin(time * 0.3) * 0.1);

      // Create gradient for second blob
      const gradient2 = ctx.createRadialGradient(x2, y2, 0, x2, y2, radius2);
      gradient2.addColorStop(0, colors.blob2);
      gradient2.addColorStop(1, "rgba(15, 15, 46, 0)");

      // Draw second blob
      ctx.beginPath();
      ctx.fillStyle = gradient2;
      ctx.arc(x2, y2, radius2, 0, Math.PI * 2);
      ctx.fill();

      // Update time
      time += 0.01;

      // Request next frame
      animationFrameId = requestAnimationFrame(draw);
    };

    // Start animation
    draw();

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [variant]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("fixed inset-0 -z-1", className)}
      style={{ zIndex: -1 }}
    />
  );
}
