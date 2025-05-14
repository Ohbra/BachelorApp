"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface AnimatedBackgroundProps {
  variant: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}

export function AnimatedBackground({
  variant,
  className,
}: AnimatedBackgroundProps) {
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

    // Define blob configurations based on variant
    const blobConfigs = {
      1: [
        { color: "#FFE15D", x: 0.2, y: 0.2, size: 0.4, speed: 0.5 },
        { color: "#9D8DF1", x: 0.6, y: 0.6, size: 0.3, speed: 0.3 },
      ],
      2: [
        { color: "#FFE15D", x: 0.2, y: 0.3, size: 0.4, speed: 0.4 },
        { color: "#9D8DF1", x: 0.7, y: 0.5, size: 0.35, speed: 0.6 },
      ],
      3: [
        { color: "#FFE15D", x: 0.5, y: 0.4, size: 0.35, speed: 0.5 },
        { color: "#9D8DF1", x: 0.2, y: 0.2, size: 0.3, speed: 0.4 },
      ],
      4: [
        { color: "#FFE15D", x: 0.5, y: 0.7, size: 0.4, speed: 0.3 },
        { color: "#9D8DF1", x: 0.3, y: 0.3, size: 0.35, speed: 0.5 },
      ],
      5: [
        { color: "#FFE15D", x: 0.3, y: 0.5, size: 0.3, speed: 0.4 },
        { color: "#9D8DF1", x: 0.7, y: 0.3, size: 0.35, speed: 0.3 },
      ],
      6: [
        { color: "#FFE15D", x: 0.2, y: 0.2, size: 0.4, speed: 0.5 },
        { color: "#9D8DF1", x: 0.6, y: 0.6, size: 0.3, speed: 0.3 },
      ],
    }[variant];

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

      // Draw blobs
      blobConfigs.forEach((blob) => {
        const x =
          blob.x * canvas.width + Math.sin(time * blob.speed * 0.5) * 50;
        const y =
          blob.y * canvas.height + Math.cos(time * blob.speed * 0.3) * 50;
        const radius =
          blob.size *
          Math.min(canvas.width, canvas.height) *
          (0.9 + Math.sin(time * 0.2) * 0.1);

        // Create gradient
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        gradient.addColorStop(0, blob.color);
        gradient.addColorStop(1, "rgba(15, 15, 46, 0)");

        // Draw blob
        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      });

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
    <canvas ref={canvasRef} className={cn("fixed inset-0 -z-10", className)} />
  );
}
