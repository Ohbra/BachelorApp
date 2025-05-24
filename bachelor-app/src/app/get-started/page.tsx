"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { AnimatedBlobsCSS } from "@/components/animated-blobs-css";
import { useMediaQuery } from "@/hooks/use-media-query";

export default function GetStarted() {
  const router = useRouter();
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <div className="flex flex-col h-screen bg-transparent text-white overflow-hidden relative">
      {/* Background blobs */}
      <AnimatedBlobsCSS variant="yellow-purple" />

      {/* Add a semi-transparent overlay to ensure text readability if needed */}
      <div className="absolute inset-0 bg-[#0f0f2e] opacity-30 z-0"></div>

      <div
        className={`flex ${
          isDesktop ? "items-center justify-center" : "flex-col"
        } h-full z-10 relative`}
      >
        {/* Content container */}
        <div
          className={`
          ${
            isDesktop
              ? "max-w-4xl w-full flex items-center justify-between p-12"
              : "flex-1 flex flex-col justify-end p-6"
          }
        `}
        >
          <div className={`${isDesktop ? "max-w-xl" : ""}`}>
            <h1
              className={`${
                isDesktop ? "text-5xl" : "text-2xl md:text-4xl"
              } font-bold mb-4`}
            >
              Get started today!
            </h1>
            <p
              className={`${
                isDesktop ? "text-xl" : "text-sm md:text-base"
              } text-white/80 mb-8 max-w-md`}
            >
              Login by entering your email address.
            </p>

            <div className={`space-y-3 ${isDesktop ? "max-w-sm" : "max-w-md"}`}>
              <Button
                onClick={() => router.push("/auth/signup")}
                className={`w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium ${
                  isDesktop ? "py-3 text-lg" : "py-2 md:py-3"
                }`}
              >
                Create account
              </Button>

              <Button
                onClick={() => router.push("/auth/login")}
                className={`w-full bg-transparent border border-white hover:bg-white/10 text-white ${
                  isDesktop ? "py-3 text-lg" : "py-2 md:py-3"
                }`}
              >
                Login
              </Button>

              <div className="text-center mt-2">
                <Link
                  href="/"
                  className={`${
                    isDesktop ? "text-lg" : "text-sm md:text-base"
                  } text-white/70 hover:text-white`}
                >
                  Enter as guest
                </Link>
              </div>
            </div>
          </div>

          {/* Visual element for desktop */}
          {isDesktop && (
            <div className="w-96 h-96 rounded-full bg-white/5 backdrop-blur-lg flex items-center justify-center">
              <div className="text-4xl font-bold">Thesium</div>
            </div>
          )}
        </div>

        {/* Progress indicator - only shown on mobile */}
        {!isDesktop && (
          <div className="p-6 md:p-8 flex justify-center">
            <div className="w-full max-w-xs md:max-w-sm bg-white/20 h-1 rounded-full">
              <div className="bg-white h-1 rounded-full transition-all duration-300 w-full"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
