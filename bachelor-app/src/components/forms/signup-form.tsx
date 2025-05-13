'use client'

import { useRouter } from 'next/navigation'
import { signup } from '@/app/backend/actions/auth/signup'

export default function SignupForm() {
  const router = useRouter()

  async function handleSignup(formData: FormData) {
    const result = await signup(formData)

    if (result.success) {
      router.push('/login')
    } else {
      router.push('/error')
    }
  }

  return (
    <form action={handleSignup} method="POST" className="space-y-4">
      <div>
        <label htmlFor="email" className="block mb-1">Email:</label>
        <input id="email" name="email" type="email" required className="w-full border p-2 rounded" />
      </div>

      <div>
        <label htmlFor="password" className="block mb-1">Password:</label>
        <input id="password" name="password" type="password" required className="w-full border p-2 rounded" />
      </div>

      <div>
        <label htmlFor="name" className="block mb-1">Name:</label>
        <input id="name" name="name" type="text" required className="w-full border p-2 rounded" />
      </div>

      <div>
        <label htmlFor="surname" className="block mb-1">Surname:</label>
        <input id="surname" name="surname" type="text" required className="w-full border p-2 rounded" />
      </div>

      <div>
        <label htmlFor="role" className="block mb-1">Role:</label>
        <select id="role" name="role" className="w-full border p-2 rounded" required>
          <option value="">Select role</option>
          <option value="student">Student</option>
          <option value="supervisor">Supervisor</option>
        </select>
      </div>

      <div>
        <label htmlFor="faculty_name" className="block mb-1">Faculty:</label>
        <input id="faculty_name" name="faculty_name" type="text" required className="w-full border p-2 rounded" />
      </div>

      <div>
        <label htmlFor="study_program" className="block mb-1">Study Program:</label>
        <input id="study_program" name="study_program" type="text" className="w-full border p-2 rounded" />
      </div>

      <div>
        <label htmlFor="level" className="block mb-1">Degree Level:</label>
        <select id="level" name="level" className="w-full border p-2 rounded">
          <option value="">Select level</option>
          <option value="bachelor">bachelor</option>
          <option value="master">master</option>
        </select>
      </div>

      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Sign up
      </button>
    </form>
  )
}
