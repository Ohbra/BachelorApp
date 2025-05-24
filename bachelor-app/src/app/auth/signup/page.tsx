// app/auth/signup/page.tsx
"use client"; // This component will use client-side hooks like useRouter

import SignupForm from "@/components/forms/signup-form"; // Import your SignupForm component
import { useRouter } from "next/navigation"; // Import useRouter for potential navigation
import Link from "next/link"; // Import Link for "Already have an account?"

export default function SignupPage() {
  const router = useRouter(); // Initialize router if you need programmatic navigation

  return (
    <div className="max-w-md mx-auto rounded-lg overflow-hidden shadow-lg bg-[#0B0021] text-white p-6">
      <h1 className="text-2xl font-bold mb-6">Sign Up</h1>

      {/* This will ONLY render the SignupForm */}
      <SignupForm />

      {/* Button to navigate back to the Login page */}
      <div className="mt-4 text-center">
        {" "}
        {/* Added text-center for better alignment */}
        <Link
          href="/auth/login" // Link to the dedicated login page
          className="text-blue-400 underline"
        ></Link>
      </div>
    </div>
  );
}
