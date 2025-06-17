"use client"

import type React from "react"

import { useState } from "react"
import { createThesisProposal } from "@/app/backend/actions/thesis/create-thesis-proposal"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function CreateThesisProposal() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [requirements, setRequirements] = useState("")
  const [thesisType, setThesisType] = useState("")
  const [applicationStart, setApplicationStart] = useState("")
  const [applicationEnd, setApplicationEnd] = useState("")
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData()
    formData.append("title", title)
    formData.append("description", description)
    formData.append("requirements", requirements)
    formData.append("thesis_type", thesisType)
    formData.append("application_start", applicationStart)
    formData.append("application_end", applicationEnd)
    formData.append("tags", selectedTags.join(","))

    try {
      // Option 1: If the function expects formData and an empty object/null as second parameter
      const result = await createThesisProposal(formData, {})

      // Option 2: If you need to pass user session or other data, uncomment this instead:
      // const result = await createThesisProposal(formData, { userId: "current-user-id" })

      if (result?.success) {
        setMessage("Thesis proposal created!")
        setTitle("")
        setDescription("")
        setRequirements("")
        setThesisType("")
        setApplicationStart("")
        setApplicationEnd("")
        setSelectedTags([])
      } else {
        setMessage(result?.message || "Error creating thesis proposal.")
      }
    } catch (error) {
      console.error("Error creating thesis proposal:", error)
      setMessage("An unexpected error occurred.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form
      className="max-w-md mx-auto rounded-lg overflow-hidden shadow-lg bg-[#e6e6ff] text-black"
      onSubmit={handleSubmit}
    >
      <div className="p-4">
        <div className="flex items-center mb-6">
          <Link href="/">
            <div className="btn-hover p-1 rounded-full">
              <ChevronLeft className="h-5 w-5 mr-2" />
            </div>
          </Link>
          <h2 className="text-lg font-semibold">Create a new thesis proposal</h2>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium mb-2">Basic Information</h3>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Enter the thesis title"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
              <select
                className="w-full p-2 border border-gray-300 rounded-md"
                value={thesisType}
                onChange={(e) => setThesisType(e.target.value)}
                required
              >
                <option value="">Select thesis type</option>
                <option value="Bachelor">Bachelor</option>
                <option value="Master">Master</option>
              </select>
              <input
                type="date"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={applicationStart}
                onChange={(e) => setApplicationStart(e.target.value)}
                required
              />
              <input
                type="date"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={applicationEnd}
                onChange={(e) => setApplicationEnd(e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-2">Short Description</h3>
            <textarea
              className="w-full h-32 p-2 border border-gray-300 rounded-md"
              placeholder="This is the topic description..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          <div>
            <h3 className="text-sm font-medium mb-2">Requirements</h3>
            <textarea
              className="w-full h-24 p-2 border border-gray-300 rounded-md"
              placeholder="Short description of the needed requirement..."
              value={requirements}
              onChange={(e) => setRequirements(e.target.value)}
            />
          </div>

          <div>
            <h3 className="text-sm font-medium mb-2">Choose tags</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Data science",
                "HTML",
                "Frontend",
                "Java Script",
                "CSS",
                "AI",
                "UX / UI Design",
                "Marketing",
                "Consulting",
              ].map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => toggleTag(tag)}
                  className={`text-xs px-3 py-1.5 rounded-full transition-all duration-300 ${
                    selectedTags.includes(tag)
                      ? "bg-gradient-to-r from-[#FFE15D] to-[#806b00] text-black"
                      : "hover-card bg-[#d8d8ff] text-black"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <div className="flex space-x-3 pt-4">
            <button
              className="flex-1 bg-transparent border border-gray-300 rounded-md py-2 px-4 disabled:opacity-50"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Creating..." : "Submit proposal"}
            </button>
            <Link href="/" className="flex-1">
              <button
                type="button"
                className="w-full py-2 px-4 border border-gray-300 rounded-md text-black bg-transparent hover:bg-gray-100 transition-all duration-300"
              >
                Cancel
              </button>
            </Link>
          </div>
          {message && (
            <div
              className={`pt-2 text-center text-sm ${message.includes("Error") || message.includes("error") ? "text-red-700" : "text-green-700"}`}
            >
              {message}
            </div>
          )}
        </div>
      </div>
    </form>
  )
}
