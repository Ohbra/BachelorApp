"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { AnimatedBlobsCSS } from "./animated-blobs-css";
import { useMediaQuery } from "@/hooks/use-media-query";

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
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  // Create memoized callback functions to avoid dependency issues
  const handleNextSlide = useCallback(() => {
    if (isAnimating) return;

    if (currentSlide < slides.length - 1) {
      setDirection("next");
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prev) => prev + 1);
        setIsAnimating(false);
      }, 300);
    } else {
      router.push("/get-started");
    }
  }, [currentSlide, isAnimating, router]);

  const handlePrevSlide = useCallback(() => {
    if (isAnimating || currentSlide === 0) return;

    setDirection("prev");
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prev) => prev - 1);
      setIsAnimating(false);
    }, 300);
  }, [currentSlide, isAnimating]);

  // Also update the goToNextSlide and goToPrevSlide functions to use the callbacks
  const goToNextSlide = handleNextSlide;
  const goToPrevSlide = handlePrevSlide;

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
        handleNextSlide();
      } else if (e.key === "ArrowLeft") {
        handlePrevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNextSlide, handlePrevSlide]);

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
        handleNextSlide();
      } else if (touchEndX - touchStartX > 50) {
        // Swipe right
        handlePrevSlide();
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
  }, [handleNextSlide, handlePrevSlide]);

  return (
    <div className="flex flex-col h-screen bg-transparent text-white overflow-hidden relative">
      {/* Animated background blobs */}
      <AnimatedBlobsCSS variant={slides[currentSlide].variant} />

      {/* Add a semi-transparent overlay to ensure text readability if needed */}
      <div className="absolute inset-0 bg-[#0f0f2e] opacity-30 z-0"></div>

      <div
        className={`flex flex-col ${
          isDesktop ? "items-center justify-center" : ""
        } h-full z-10 relative`}
      >
        {/* Content container - centered on desktop, bottom-aligned on mobile */}
        <div
          className={`
          ${
            isDesktop
              ? "max-w-4xl w-full flex items-center justify-between"
              : "flex-1 flex flex-col justify-end p-6"
          }
        `}
        >
          <div
            className={`
            ${isDesktop ? "max-w-xl" : ""}
            transition-all duration-300 ${
              isAnimating
                ? direction === "next"
                  ? "opacity-0 translate-x-10"
                  : "opacity-0 -translate-x-10"
                : "opacity-100 translate-x-0"
            }
          `}
          >
            <h1
              className={`${
                isDesktop ? "text-5xl" : "text-2xl md:text-4xl"
              } font-bold mb-4`}
            >
              {slides[currentSlide].title}
            </h1>
            <p
              className={`${
                isDesktop ? "text-xl" : "text-sm md:text-base"
              } text-white/80 mb-8 max-w-md`}
            >
              {slides[currentSlide].description}
            </p>
          </div>

          {isDesktop && (
            <div className="flex space-x-4">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index <= currentSlide ? "bg-white w-12" : "bg-white/30 w-8"
                  }`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  disabled={isAnimating}
                />
              ))}
            </div>
          )}
        </div>

        {/* Navigation buttons - only shown on mobile */}
        {!isDesktop && (
          <div className="flex justify-between items-center p-6">
            <button
              onClick={goToPrevSlide}
              className={`p-2 rounded-full transition-opacity ${
                currentSlide === 0 ? "opacity-0" : "opacity-100"
              }`}
              aria-label="Previous slide"
              disabled={currentSlide === 0 || isAnimating}
            >
              <ChevronLeft className="h-6 w-6 md:h-8 md:w-8 text-white" />
            </button>
            <button
              onClick={goToNextSlide}
              className="p-2 rounded-full"
              aria-label="Next slide"
              disabled={isAnimating}
            >
              <ChevronRight className="h-6 w-6 md:h-8 md:w-8 text-white" />
            </button>
          </div>
        )}

        {/* Progress indicator - only shown on mobile */}
        {!isDesktop && (
          <div className="p-6 md:p-8 flex justify-center">
            <div className="w-full max-w-xs md:max-w-sm bg-white/20 h-1 rounded-full flex">
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
        )}
      </div>

      {/* Desktop navigation buttons */}
      {isDesktop && (
        <div className="absolute inset-x-0 bottom-12 flex justify-center space-x-8 z-20">
          <button
            onClick={goToPrevSlide}
            className={`p-4 rounded-full bg-white/10 hover:bg-white/20 transition-all ${
              currentSlide === 0
                ? "opacity-0 pointer-events-none"
                : "opacity-100"
            }`}
            aria-label="Previous slide"
            disabled={currentSlide === 0 || isAnimating}
          >
            <ChevronLeft className="h-8 w-8 text-white" />
          </button>
          <button
            onClick={goToNextSlide}
            className="p-4 rounded-full bg-white/10 hover:bg-white/20 transition-all"
            aria-label="Next slide"
            disabled={isAnimating}
          >
            <ChevronRight className="h-8 w-8 text-white" />
          </button>
        </div>
      )}
    </div>
  );
}

export default OnboardingFlow;
