"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/app/backend/actions/auth/login";
import Link from "next/link";

export default function LoginForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleLogin(formData: FormData) {
    setIsLoading(true);
    setError(null);

    try {
      const result = await login(formData);

      if (result?.success) {
        router.push("/");
      } else {
        setError(
          result?.message || "Login failed. Please check your credentials."
        );
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="max-w-md mx-auto rounded-lg overflow-hidden shadow-lg bg-[#0f0f2e] text-white p-6">
      <h2 className="text-2xl font-bold text-center mb-6">Log In</h2>

      {error && (
        <div className="bg-red-500/20 border border-red-500/50 text-white p-3 rounded-md mb-4">
          {error}
        </div>
      )}

      <form action={handleLogin} method="POST" className="space-y-6">
        <div className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-1 text-sm font-medium">
              Email:
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full bg-transparent border border-white/30 rounded-md text-white p-2 placeholder:text-white/50"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block mb-1 text-sm font-medium"
            >
              Password:
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="w-full bg-transparent border border-white/30 rounded-md text-white p-2 placeholder:text-white/50"
              placeholder="••••••••"
            />
          </div>
        </div>

        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              className="mr-2 bg-transparent border border-white/30"
            />
            <label htmlFor="remember">Remember me</label>
          </div>
          <Link
            href="/auth/forgot-password"
            className="text-white/70 hover:text-white transition-colors"
          >
            Forgot password?
          </Link>
        </div>

        <div className="pt-4">
          <button
            type="submit"
            disabled={isLoading}
            className="btn-hover w-full py-2 px-4 rounded-md text-center"
          >
            {isLoading ? "Logging in..." : "Log In"}
          </button>
        </div>

        <div className="text-center text-sm mt-4">
          <span className="text-white/70">Don&apos;t have an account?</span>{" "}
          <Link href="/auth/signup" className="text-white hover:underline">
            Sign up
          </Link>
        </div>
      </form>
    </div>
  );
}
