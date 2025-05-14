"use client";

import { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { AnimatedBlobs } from "./animated-blobs";

interface OnboardingSlide {
  title: string;
  description: string;
  variant: "yellow-purple" | "purple-yellow";
}

// Just 2 slides as shown in the images
const slides: OnboardingSlide[] = [
  {
    title: "Welcome to Thesium ...",
    description:
      "This is where you can find inspiration for your bachelor or master thesis...",
    variant: "yellow-purple",
  },
  {
    title: "Welcome to Thesium ...",
    description:
      "...connect to professors and learn about their requirements and way of working!",
    variant: "purple-yellow",
  },
];

export function OnboardingFlow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev" | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const router = useRouter();

  const goToNextSlide = () => {
    if (isAnimating) return;

    if (currentSlide < slides.length - 1) {
      setDirection("next");
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide(currentSlide + 1);
        setIsAnimating(false);
      }, 300);
    } else {
      router.push("/get-started");
    }
  };

  const goToPrevSlide = () => {
    if (isAnimating || currentSlide === 0) return;

    setDirection("prev");
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide(currentSlide - 1);
      setIsAnimating(false);
    }, 300);
  };

  const goToSlide = (index: number) => {
    if (isAnimating) return;

    setDirection(index > currentSlide ? "next" : "prev");
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsAnimating(false);
    }, 300);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        goToNextSlide();
      } else if (e.key === "ArrowLeft") {
        goToPrevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide, isAnimating]);

  // Handle swipe navigation for mobile
  useEffect(() => {
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX;
    };

    const handleTouchMove = (e: TouchEvent) => {
      touchEndX = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
      if (touchStartX - touchEndX > 50) {
        // Swipe left
        goToNextSlide();
      } else if (touchEndX - touchStartX > 50) {
        // Swipe right
        goToPrevSlide();
      }
    };

    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleTouchEnd);

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [currentSlide, isAnimating]);

  return (
    <div className="flex flex-col h-screen bg-[#0f0f2e] text-white overflow-hidden">
      {/* Animated background blobs */}
      <AnimatedBlobs variant={slides[currentSlide].variant} />

      <div className="flex-1 flex flex-col justify-end p-8 z-10 relative">
        <div
          className={`transition-all duration-300 ${
            isAnimating
              ? direction === "next"
                ? "opacity-0 translate-x-10"
                : "opacity-0 -translate-x-10"
              : "opacity-100 translate-x-0"
          }`}
        >
          <h1 className="text-2xl font-bold mb-4">
            {slides[currentSlide].title}
          </h1>
          <p className="text-sm text-white/80 mb-8">
            {slides[currentSlide].description}
          </p>
        </div>

        <div className="flex justify-between items-center">
          <button
            onClick={goToPrevSlide}
            className={`p-2 rounded-full transition-opacity ${
              currentSlide === 0 ? "opacity-0" : "opacity-100"
            }`}
            aria-label="Previous slide"
            disabled={currentSlide === 0 || isAnimating}
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>
          <button
            onClick={goToNextSlide}
            className="p-2 rounded-full"
            aria-label="Next slide"
            disabled={isAnimating}
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>
        </div>
      </div>

      {/* Progress indicator */}
      <div className="p-6 flex justify-center">
        <div className="w-full max-w-xs bg-white/20 h-1 rounded-full flex">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`h-full rounded-full transition-all duration-300 ${
                index <= currentSlide ? "bg-white" : "bg-transparent"
              }`}
              style={{ width: `${100 / slides.length}%` }}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              disabled={isAnimating}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
