"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Onboarding() {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Welcome to Bachelor App",
      description:
        "Connect to professors and learn about their requirements for your bachelor or master thesis",
      gradient: "from-yellow-400 via-yellow-300 to-transparent",
    },
    {
      title: "Welcome to Bachelor App",
      description:
        "Connect to professors and learn about their requirements for your bachelor or master thesis",
      gradient: "from-yellow-400 via-yellow-300 to-transparent",
    },
    {
      title: "Welcome to Bachelor App",
      description:
        "Connect to professors and learn about their requirements for your bachelor or master thesis",
      gradient: "from-purple-400 via-purple-300 to-transparent",
    },
    {
      title: "Welcome to Bachelor App",
      description:
        "Connect to professors and learn about their requirements for your bachelor or master thesis",
      gradient: "from-purple-400 via-purple-300 to-transparent",
    },
    {
      title: "Welcome to Bachelor App",
      description:
        "Connect to professors and learn about their requirements for your bachelor or master thesis",
      gradient: "from-yellow-400 via-yellow-300 to-transparent",
    },
    {
      title: "Welcome to Bachelor App",
      description:
        "Connect to professors and learn about their requirements for your bachelor or master thesis",
      gradient: "from-yellow-400 via-yellow-300 to-transparent",
    },
    {
      title: "Welcome to Bachelor App",
      description:
        "Connect to professors and learn about their requirements and way of working",
      gradient: "from-purple-400 via-purple-300 to-transparent",
    },
    {
      title: "Welcome to Bachelor App",
      description:
        "Connect to professors and learn about their requirements and way of working",
      gradient: "from-yellow-400 via-yellow-300 to-transparent",
    },
    {
      title: "Welcome to Bachelor App",
      description:
        "Connect to professors and learn about their requirements and way of working",
      gradient: "from-yellow-400 via-yellow-300 to-transparent",
    },
    {
      title: "Welcome to Bachelor App",
      description:
        "Connect to professors and learn about their requirements and way of working",
      gradient: "from-yellow-400 via-yellow-300 to-transparent",
    },
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      router.push("/get-started");
    }
  };

  return (
    <div className="flex flex-col h-screen bg-[#0f0f2e] text-white">
      <div className="flex-1 flex flex-col relative overflow-hidden">
        {/* Background gradient */}
        <div
          className={`absolute top-0 left-0 w-1/2 h-1/2 rounded-full blur-3xl opacity-50 -translate-x-1/4 -translate-y-1/4 bg-gradient-to-br ${slides[currentSlide].gradient}`}
        ></div>

        <div className="flex-1 flex flex-col justify-end p-8 z-10">
          <h1 className="text-2xl font-bold mb-4">
            {slides[currentSlide].title}
          </h1>
          <p className="text-sm text-white/80 mb-8">
            {slides[currentSlide].description}
          </p>

          <button
            onClick={nextSlide}
            className="self-end p-2 rounded-full bg-transparent"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>
        </div>

        {/* Progress indicator */}
        <div className="p-6 flex justify-center">
          <div className="w-full max-w-xs bg-white/20 h-1 rounded-full">
            <div
              className="bg-white h-1 rounded-full transition-all duration-300"
              style={{
                width: `${((currentSlide + 1) / slides.length) * 100}%`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
