"use client"

import { useState, useEffect, useActionState, use } from "react"
import { useRouter } from "next/navigation"
import { ChevronLeft, AlertCircle, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  createThesisProposal,
  getFaculties,
  validateSupervisor,
  type ThesisProposalState,
} from "../../../backend/actions/thesis/create-thesis-proposal"

const PREDEFINED_TAGS = [
  "Data science",
  "HTML",
  "Frontend",
  "AI",
  "JavaScript",
  "CSS",
  "SEO",
  "UX / UI Design",
  "Marketing",
  "Controlling",
  "Machine Learning",
  "Backend",
  "Database",
  "Mobile Development",
  "Cloud Computing",
  "Cybersecurity",
  "Blockchain",
  "IoT",
  "DevOps",
  "Analytics",
]

export default function CreateTopicPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const router = useRouter()
  const resolvedParams = use(params)
  const [state, formAction, isPending] = useActionState<ThesisProposalState, FormData>(createThesisProposal, null)

  // Form state
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [requirements, setRequirements] = useState<string[]>([
    "Short description of the needed requirement. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy eirmod tempor invidunt",
    "Short description of the needed requirement. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy eirmod tempor invidunt",
  ])

  // Additional state
  const [faculties, setFaculties] = useState<string[]>([])
  const [supervisorValid, setSupervisorValid] = useState(false)
  const [supervisorInfo, setSupervisorInfo] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Load initial data
  useEffect(() => {
    async function loadInitialData() {
      setIsLoading(true)

      // Load faculties
      const facultiesResult = await getFaculties()
      if (facultiesResult.success) {
        setFaculties(facultiesResult.faculties)
      }

      // Validate supervisor
      const supervisorResult = await validateSupervisor(resolvedParams.id)
      if (supervisorResult.success) {
        setSupervisorValid(true)
        setSupervisorInfo(supervisorResult.supervisor)
      }

      setIsLoading(false)
    }

    loadInitialData()
  }, [resolvedParams.id])

  // Handle successful submission
  useEffect(() => {
    if (state?.success) {
      // Redirect after successful submission
      setTimeout(() => {
        router.push(`/professor/${resolvedParams.id}`)
      }, 2000)
    }
  }, [state?.success, router, resolvedParams.id])

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag))
    } else {
      setSelectedTags([...selectedTags, tag])
    }
  }

  const addRequirement = () => {
    setRequirements([...requirements, ""])
  }

  const updateRequirement = (index: number, value: string) => {
    const newRequirements = [...requirements]
    newRequirements[index] = value
    setRequirements(newRequirements)
  }

  const removeRequirement = (index: number) => {
    if (requirements.length > 1) {
      setRequirements(requirements.filter((_, i) => i !== index))
    }
  }

  const handleBack = () => {
    router.push(`/professor/${resolvedParams.id}`)
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#e6e6ff] to-[#d4d4ff] px-4 py-6">
        <div className="container mx-auto max-w-md md:max-w-2xl">
          <div className="flex items-center justify-center py-12">
            <div className="text-black/60">Loading...</div>
          </div>
        </div>
      </div>
    )
  }

  if (!supervisorValid) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#e6e6ff] to-[#d4d4ff] px-4 py-6">
        <div className="container mx-auto max-w-md md:max-w-2xl">
          <div className="flex items-center mb-6">
            <button onClick={handleBack} className="mr-3 p-1 hover:bg-black/10 rounded">
              <ChevronLeft className="h-5 w-5 text-black" />
            </button>
            <h1 className="text-lg md:text-xl font-semibold text-black">Create a new thesis proposal</h1>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex items-center">
              <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
              <p className="text-red-700">Invalid supervisor ID. Please check the URL and try again.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e6e6ff] to-[#d4d4ff] px-4 py-6">
      <div className="container mx-auto max-w-md md:max-w-2xl">
        {/* Header */}
        <div className="flex items-center mb-6">
          <button onClick={handleBack} className="mr-3 p-1 hover:bg-black/10 rounded" disabled={isPending}>
            <ChevronLeft className="h-5 w-5 text-black" />
          </button>
          <h1 className="text-lg md:text-xl font-semibold text-black">Create a new thesis proposal</h1>
        </div>

        {/* Supervisor Info */}
        {supervisorInfo && (
          <div className="mb-6 p-4 bg-white/60 rounded-lg">
            <p className="text-sm text-black/70">Creating proposal for:</p>
            <p className="font-medium text-black">{supervisorInfo.name}</p>
            <p className="text-sm text-black/70">{supervisorInfo.faculty}</p>
          </div>
        )}

        {/* Success Message */}
        {state?.success && (
          <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
              <p className="text-green-700">Thesis proposal created successfully! Redirecting...</p>
            </div>
          </div>
        )}

        {/* Error Messages */}
        {state?.error && (
          <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex items-start">
              <AlertCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
              <div>
                <p className="text-red-700 font-medium">{state.error}</p>
                {state.details && (
                  <ul className="mt-2 text-sm text-red-600">
                    {state.details.map((detail: string, index: number) => (
                      <li key={index}>• {detail}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        )}

        <form action={formAction} className="space-y-6">
          {/* Hidden supervisor ID */}
          <input type="hidden" name="supervisorId" value={resolvedParams.id} />

          {/* Hidden tags */}
          {selectedTags.map((tag, index) => (
            <input key={index} type="hidden" name={`tag_${index}`} value={tag} />
          ))}

          {/* Basic Information */}
          <div>
            <h2 className="text-sm font-medium text-black mb-3">Basic information</h2>
            <div className="space-y-3">
              <Input
                name="title"
                placeholder="Enter the thesis title..."
                className="bg-white/80 border-black/20 rounded-full px-4 py-3 text-black placeholder:text-black/60 focus:border-black/40"
                required
                disabled={isPending}
              />
              <select
                name="faculty"
                className="w-full bg-white/80 border border-black/20 rounded-full px-4 py-3 text-black focus:border-black/40 focus:outline-none"
                required
                disabled={isPending}
                defaultValue=""
              >
                <option value="" disabled>
                  Select faculty...
                </option>
                {faculties.map((faculty) => (
                  <option key={faculty} value={faculty}>
                    {faculty}
                  </option>
                ))}
              </select>
              <Input
                name="studyCourse"
                placeholder="Study course..."
                className="bg-white/80 border-black/20 rounded-full px-4 py-3 text-black placeholder:text-black/60 focus:border-black/40"
                required
                disabled={isPending}
              />
            </div>
          </div>

          {/* Short Description */}
          <div>
            <h2 className="text-sm font-medium text-black mb-3">Short description</h2>
            <Textarea
              name="description"
              placeholder="This is the topic description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat, sed diam voluptua..."
              className="bg-white/80 border-black/20 rounded-2xl px-4 py-3 text-black placeholder:text-black/60 focus:border-black/40 min-h-[120px] md:min-h-[150px] resize-none"
              required
              disabled={isPending}
            />
          </div>

          {/* Requirements */}
          <div>
            <h2 className="text-sm font-medium text-black mb-3">Requirements</h2>
            <div className="space-y-3">
              {requirements.map((requirement, index) => (
                <div key={index} className="relative">
                  <Textarea
                    name={`requirement_${index}`}
                    value={requirement}
                    onChange={(e) => updateRequirement(index, e.target.value)}
                    placeholder="Short description of the needed requirement..."
                    className="bg-white/80 border-black/20 rounded-2xl px-4 py-3 text-black placeholder:text-black/60 focus:border-black/40 min-h-[80px] resize-none"
                    disabled={isPending}
                  />
                  {requirements.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeRequirement(index)}
                      className="absolute top-2 right-2 text-black/40 hover:text-red-500 text-sm"
                      disabled={isPending}
                    >
                      ✕
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={addRequirement}
                className="text-black/70 text-sm hover:text-black transition-colors disabled:opacity-50"
                disabled={isPending}
              >
                Add another requirement...
              </button>
            </div>
          </div>

          {/* Choose Tags */}
          <div>
            <h2 className="text-sm font-medium text-black mb-3">
              Choose tags {selectedTags.length > 0 && `(${selectedTags.length} selected)`}
            </h2>
            <div className="flex flex-wrap gap-2">
              {PREDEFINED_TAGS.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => toggleTag(tag)}
                  disabled={isPending}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors disabled:opacity-50 ${
                    selectedTags.includes(tag)
                      ? "bg-black text-white"
                      : "bg-white/80 text-black border border-black/20 hover:bg-white"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
            {selectedTags.length === 0 && <p className="text-red-500 text-sm mt-2">Please select at least one tag</p>}
          </div>

          {/* Form Actions */}
          <div className="flex gap-3 pt-4">
            <Button
              type="submit"
              disabled={isPending || selectedTags.length === 0}
              className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-3 rounded-full disabled:opacity-50"
            >
              {isPending ? "Creating..." : "Submit proposal"}
            </Button>
            <Button
              type="button"
              onClick={handleBack}
              variant="outline"
              disabled={isPending}
              className="flex-1 border-black/20 text-black hover:bg-black/5 py-3 rounded-full disabled:opacity-50"
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
