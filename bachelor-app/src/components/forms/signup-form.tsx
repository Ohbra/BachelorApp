"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signup } from "@/app/backend/actions/auth/signup";
import Link from "next/link";

export default function SignupForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSignup(formData: FormData) {
    setIsLoading(true);
    setError(null);

    try {
      const result = await signup(formData);

      if (result.success) {
        router.push("/auth/login");
      } else {
        setError(
          result.message || "Signup failed. Please check your information."
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
      <h2 className="text-2xl font-bold text-center mb-6">Create Account</h2>

      {error && (
        <div className="bg-red-500/20 border border-red-500/50 text-white p-3 rounded-md mb-4">
          {error}
        </div>
      )}

      <form action={handleSignup} method="POST" className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block mb-1 text-sm font-medium">
              First Name:
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full bg-transparent border border-white/30 rounded-md text-white p-2 placeholder:text-white/50"
              placeholder="First name"
            />
          </div>

          <div>
            <label htmlFor="surname" className="block mb-1 text-sm font-medium">
              Last Name:
            </label>
            <input
              id="surname"
              name="surname"
              type="text"
              required
              className="w-full bg-transparent border border-white/30 rounded-md text-white p-2 placeholder:text-white/50"
              placeholder="Last name"
            />
          </div>
        </div>

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
          <label htmlFor="password" className="block mb-1 text-sm font-medium">
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
          <p className="text-xs text-white/50 mt-1">
            Password must be at least 8 characters long with a mix of letters,
            numbers, and symbols.
          </p>
        </div>

        <div>
          <label htmlFor="role" className="block mb-1 text-sm font-medium">
            Role:
          </label>
          <select
            id="role"
            name="role"
            className="w-full bg-transparent border border-white/30 rounded-md text-white p-2"
            required
          >
            <option value="" disabled selected className="bg-[#0f0f2e]">
              Select role
            </option>
            <option value="student" className="bg-[#0f0f2e]">
              Student
            </option>
            <option value="supervisor" className="bg-[#0f0f2e]">
              Supervisor
            </option>
          </select>
        </div>

        <div>
          <label
            htmlFor="faculty_name"
            className="block mb-1 text-sm font-medium"
          >
            Faculty:
          </label>
          <input
            id="faculty_name"
            name="faculty_name"
            type="text"
            required
            className="w-full bg-transparent border border-white/30 rounded-md text-white p-2 placeholder:text-white/50"
            placeholder="e.g. Computer Science"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="study_program"
              className="block mb-1 text-sm font-medium"
            >
              Study Program:
            </label>
            <input
              id="study_program"
              name="study_program"
              type="text"
              className="w-full bg-transparent border border-white/30 rounded-md text-white p-2 placeholder:text-white/50"
              placeholder="e.g. Web Development"
            />
          </div>

          <div>
            <label htmlFor="level" className="block mb-1 text-sm font-medium">
              Degree Level:
            </label>
            <select
              id="level"
              name="level"
              className="w-full bg-transparent border border-white/30 rounded-md text-white p-2"
            >
              <option value="" disabled selected className="bg-[#0f0f2e]">
                Select level
              </option>
              <option value="bachelor" className="bg-[#0f0f2e]">
                Bachelor
              </option>
              <option value="master" className="bg-[#0f0f2e]">
                Master
              </option>
            </select>
          </div>
        </div>

        <div className="flex items-center mt-4">
          <input
            type="checkbox"
            id="terms"
            name="terms"
            required
            className="mr-2 bg-transparent border border-white/30"
          />
          <label htmlFor="terms" className="text-sm">
            I agree to the{" "}
            <Link href="/terms" className="text-white hover:underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-white hover:underline">
              Privacy Policy
            </Link>
          </label>
        </div>

        <div className="pt-4">
          <button
            type="submit"
            disabled={isLoading}
            className="btn-hover w-full py-2 px-4 rounded-md text-center"
          >
            {isLoading ? "Creating account..." : "Sign up"}
          </button>
        </div>

        <div className="text-center text-sm mt-4">
          <span className="text-white/70">Already have an account?</span>{" "}
          <Link href="/auth/login" className="text-white hover:underline">
            Log in
          </Link>
        </div>
      </form>
    </div>
  );
}
