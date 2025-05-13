'use client'

import { useRouter } from 'next/navigation'
import { login } from '@/app/backend/actions/auth/login'

export default function LoginForm() {
  const router = useRouter()

  async function handleLogin(formData: FormData) {
    const result = await login(formData)

    if (result?.success) {
      router.push('/')
    } else {
      router.push('/error')
    }
  }

  return (
    <form
      action={handleLogin}
      method="POST"
      className="space-y-6 bg-white p-6 rounded shadow-md max-w-md mx-auto mt-10 text-black"
    >
      <h2 className="text-2xl font-bold text-center mb-4">Log In</h2>

      <div className="space-y-4">
        <div>
          <label htmlFor="email" className="block mb-1">Email:</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label htmlFor="password" className="block mb-1">Password:</label>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="w-full border p-2 rounded"
          />
        </div>
      </div>

      <div className="text-center pt-4">
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Log In
        </button>
      </div>
    </form>
  )
}

