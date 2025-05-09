import { login, signup } from './actions'

export default function LoginPage() {
  return (
    <form>
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" required />
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" required />
      <button formAction={async (formData) => { await login(formData); }}>Log in</button>
      <button formAction={async (formData) => { await signup(formData); }}>Sign up</button>
    </form>
  )
}