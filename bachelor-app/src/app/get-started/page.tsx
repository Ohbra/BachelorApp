"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function GetStarted() {
  const router = useRouter();

  return (
    <div className="flex flex-col h-screen bg-[#0f0f2e] text-white">
      <div className="flex-1 flex flex-col relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute top-0 left-0 w-1/2 h-1/2 rounded-full blur-3xl opacity-50 -translate-x-1/4 -translate-y-1/4 bg-gradient-to-br from-yellow-400 via-yellow-300 to-transparent"></div>

        <div className="flex-1 flex flex-col justify-end p-8 z-10">
          <h1 className="text-2xl font-bold mb-4">Get started today!</h1>
          <p className="text-sm text-white/80 mb-8">
            Login by entering your email address.
          </p>

          <Button
            onClick={() => router.push("/auth/login")}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium"
          >
            Create account
          </Button>
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
