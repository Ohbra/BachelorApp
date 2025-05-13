//'use client'
//import { login, signup } from './actions'
//import { useState } from 'react'
//
//export default function LoginPage() {
  //const [isLogin, setIsLogin] = useState(true)
  //
  //return (
    //<div className="max-w-md mx-auto p-6 bg-white rounded shadow-md">
      //<h1 className="text-2xl font-bold mb-6">
        //{isLogin ? 'Log In' : 'Sign Up'}
      //</h1>
      //
      //<form className="space-y-4">
        //<div>
          //<label htmlFor="email" className="block mb-1">Email:</label>
          //<input 
            //id="email" 
            //name="email" 
            //type="email" 
            //className="w-full border p-2 rounded" 
            //required 
          ///>
        //</div>
        //
        //<div>
          //<label htmlFor="password" className="block mb-1">Password:</label>
          //<input 
            //id="password" 
            //name="password" 
            //type="password" 
            //className="w-full border p-2 rounded" 
            //required 
          ///>
        //</div>
        //
        //{!isLogin && (
          //<>
            //<div>
              //<label htmlFor="name" className="block mb-1">Name:</label>
              //<input 
                //id="name" 
                //name="name" 
                //type="text" 
                //className="w-full border p-2 rounded" 
                //required 
              ///>
            //</div>
            //
            //<div>
              //<label htmlFor="surname" className="block mb-1">Surname:</label>
              //<input 
                //id="surname" 
                //name="surname" 
                //type="text" 
                //className="w-full border p-2 rounded" 
                //required 
              ///>
            //</div>
            //
            //<div>
              //<label htmlFor="role" className="block mb-1">Role:</label>
              //<select 
                //id="role" 
                //name="role" 
                //className="w-full border p-2 rounded" 
                //required
              //>
                //<option value="">Select role</option>
                //<option value="student">Student</option>
                //<option value="supervisor">Supervisor</option>
              //</select>
            //</div>
            //
            //<div>
              //<label htmlFor="faculty_name" className="block mb-1">Faculty:</label>
              //<input 
                //id="faculty_name" 
                //name="faculty_name" 
                //type="text" 
                //className="w-full border p-2 rounded" 
                //required 
              ///>
            //</div>
            //
            //<div>
              //<label htmlFor="study_program" className="block mb-1">Study Program (for students):</label>
              //<input 
                //id="study_program" 
                //name="study_program" 
                //type="text" 
                //className="w-full border p-2 rounded" 
              ///>
            //</div>
//
            //<div>
              //<label htmlFor="level" className="block mb-1">Degree Level (for students e.g Bachelor | Master):</label>
              //<input 
                //id="level" 
                //name="level" 
                //type="text" 
                //className="w-full border p-2 rounded" 
              ///>
            //</div>
          //</>
        //)}
        //
        //<div className="flex space-x-4">
          //{isLogin ? (
            //<>
              //<button 
                //type="submit"
                //formAction={login}
                //className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              //>
                //Log in
              //</button>
              //<button 
                //type="button"
                //onClick={() => setIsLogin(false)}
                //className="text-blue-500 hover:underline"
              //>
                //Need an account? Sign up
              //</button>
            //</>
          //) : (
            //<>
              //<button 
                //type="submit"
                //formAction={signup}
                //className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              //>
                //Sign up
              //</button>
              //<button 
                //type="button"
                //onClick={() => setIsLogin(true)}
                //className="text-blue-500 hover:underline"
              //>
                //Already have an account? Log in
              //</button>
            //</>
          //)}
        //</div>
      //</form>
    //</div>
  //)
//}
//
'use client'

import { login, signup } from './actions'
import { useState } from 'react'

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className="max-w-md mx-auto rounded-lg overflow-hidden shadow-lg bg-[#0B0021] text-white">
      <h1 className="text-2xl font-bold mb-6">
        {isLogin ? 'Log In' : 'Sign Up'}
      </h1>

      <form method="POST" className="space-y-4">
        <fieldset className="space-y-4">
          <legend className="sr-only">{isLogin ? 'Login form' : 'Signup form'}</legend>

          <div>
            <label htmlFor="email" className="block mb-1">Email:</label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full border p-2 rounded"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block mb-1">Password:</label>
            <input
              id="password"
              name="password"
              type="password"
              className="w-full border p-2 rounded"
              required
            />
          </div>

          {!isLogin && (
            <>
              <div>
                <label htmlFor="name" className="block mb-1">Name:</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="w-full border p-2 rounded"
                  required
                />
              </div>

              <div>
                <label htmlFor="surname" className="block mb-1">Surname:</label>
                <input
                  id="surname"
                  name="surname"
                  type="text"
                  className="w-full border p-2 rounded"
                  required
                />
              </div>

              <div>
                <label htmlFor="role" className="block mb-1">Role:</label>
                <select
                  id="role"
                  name="role"
                  className="w-full border p-2 rounded"
                  required
                >
                  <option value="">Select role</option>
                  <option value="student">Student</option>
                  <option value="supervisor">Supervisor</option>
                </select>
              </div>

              <div>
                <label htmlFor="faculty_name" className="block mb-1">Faculty:</label>
                <input
                  id="faculty_name"
                  name="faculty_name"
                  type="text"
                  className="w-full border p-2 rounded"
                  required
                />
              </div>

              <div>
                <label htmlFor="study_program" className="block mb-1">Study Program (for students):</label>
                <input
                  id="study_program"
                  name="study_program"
                  type="text"
                  className="w-full border p-2 rounded"
                />
              </div>

              <div>
                <label htmlFor="level" className="block mb-1">Degree Level (e.g., Bachelor or Master):</label>
                <input
                  id="level"
                  name="level"
                  type="text"
                  className="w-full border p-2 rounded"
                />
              </div>
            </>
          )}
        </fieldset>

        <div className="flex space-x-4">
          {isLogin ? (
            <>
              <button
                type="submit"
                formAction={login}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Log in
              </button>
              <button
                type="button"
                onClick={() => setIsLogin(false)}
                className="text-blue-500 hover:underline"
              >
                Need an account? Sign up
              </button>
            </>
          ) : (
            <>
              <button
                type="submit"
                formAction={signup}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Sign up
              </button>
              <button
                type="button"
                onClick={() => setIsLogin(true)}
                className="text-blue-500 hover:underline"
              >
                Already have an account? Log in
              </button>
            </>
          )}
        </div>
      </form>
    </div>
  )
}


