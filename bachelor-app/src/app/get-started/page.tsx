"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { AnimatedBlobs } from "@/components/animated-blobs";

export default function GetStarted() {
  const router = useRouter();

  return (
    <div className="flex flex-col h-screen bg-[#0f0f2e] text-white">
      <div className="flex-1 flex flex-col relative overflow-hidden">
        {/* Background blobs */}
        <AnimatedBlobs variant="yellow-purple" />

        <div className="flex-1 flex flex-col justify-end p-8 z-10">
          <h1 className="text-2xl font-bold mb-4">Get started today!</h1>
          <p className="text-sm text-white/80 mb-8">
            Login by entering your email address.
          </p>

          <div className="space-y-3">
            <Button
              onClick={() => router.push("/auth/signup")}
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium"
            >
              Create account
            </Button>

            <Button
              onClick={() => router.push("/auth/login")}
              className="w-full bg-transparent border border-white hover:bg-white/10 text-white"
            >
              Login
            </Button>

            <div className="text-center mt-2">
              <Link href="/" className="text-sm text-white/70 hover:text-white">
                Enter as guest
              </Link>
            </div>
          </div>
        </div>

        {/* Progress indicator */}
        <div className="p-6 flex justify-center">
          <div className="w-full max-w-xs bg-white/20 h-1 rounded-full">
            <div className="bg-white h-1 rounded-full transition-all duration-300 w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
