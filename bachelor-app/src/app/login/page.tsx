
'use client'

import LoginForm from '@/components/forms/login-form'
import SignupForm from '@/components/forms/signup-form'
import { useState } from 'react'

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className="max-w-md mx-auto rounded-lg overflow-hidden shadow-lg bg-[#0B0021] text-white p-6">
      <h1 className="text-2xl font-bold mb-6">
        {isLogin ? 'Log In' : 'Sign Up'}
      </h1>

      {isLogin ? (
        <>
          <LoginForm />
          <button onClick={() => setIsLogin(false)} className="mt-4 text-blue-400 underline">
            Need an account? Sign up
          </button>
        </>
      ) : (
        <>
          <SignupForm />
          <button onClick={() => setIsLogin(true)} className="mt-4 text-blue-400 underline">
            Already have an account? Log in
          </button>
        </>
      )}
    </div>
  )
}


