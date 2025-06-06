"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { getProfessorDetails, type ProfessorDetails } from "../../backend/actions/professors/get-professor-detail"

export default function ProfessorPage({ params }: { params: { id: string } }) {
  const [professor, setProfessor] = useState<ProfessorDetails | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchProfessor() {
      setLoading(true)
      const response = await getProfessorDetails(params.id)
      if (response.success) {
        setProfessor(response.details!)
        setError(null)
      } else {
        setError(response.message || "Unknown error")
      }
      setLoading(false)
    }
    fetchProfessor()
  }, [params.id])

  return (
    <div className="max-w-md mx-auto bg-[#0B0021] min-h-screen text-white">
      <div className="p-6">
        <div className="flex items-center mb-6">
          <Link href="/?tab=professors">
            <button className="btn-hover p-1 rounded-full">
              <ChevronLeft className="h-6 w-6 mr-2 text-white" />
            </button>
          </Link>
          <h2 className="text-xl font-bold text-white">{professor?.name || "Loading..."}</h2>
        </div>

        {loading && <p>Loading professor details...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {professor && (
          <>
            <div className="flex items-center mb-4">
              <div className="flex-1">
                <h2 className="text-xl font-bold">{professor.name}</h2>
                <p className="text-sm opacity-80">{professor.department}</p>
              </div>
              <div className="h-16 w-16 bg-[#e0e0ff] rounded-full ml-4"></div>
            </div>

            <div>
              <p className="text-sm opacity-80">Profile: {professor.profile}</p>
            </div>

            <div className="mt-4">
              <button className="btn-hover py-1 px-4 rounded-full text-xs">send email</button>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-bold mb-2">Research Priorities:</h3>
              <p className="text-sm text-white/80">{professor.researchPriorities}</p>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-bold mb-3">Subject Area:</h3>
              <p className="text-sm text-white/70">{professor.subjectArea}</p>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
