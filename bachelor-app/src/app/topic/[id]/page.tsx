"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { getTopicDetails, type TopicDetails } from "@/app/backend/actions/topics/get-topic-details"

export default function TopicPage({ params }: { params: Promise<{ id: string }> }) {
  const [topic, setTopic] = useState<TopicDetails | null>(null)
  const [loading, setLoading] = useState(true)
  const [topicId, setTopicId] = useState<string | null>(null)

  // Resolve params first
  useEffect(() => {
    async function resolveParams() {
      const resolvedParams = await params
      setTopicId(resolvedParams.id)
    }
    resolveParams()
  }, [params])

  // Fetch topic data once we have the ID
  useEffect(() => {
    if (!topicId) return

    async function fetchTopic() {
      const res = await getTopicDetails(topicId)
      if (res.success && res.details) {
        setTopic(res.details)
      } else {
        console.error("⚠️ Failed to fetch topic details:", res.message)
      }
      setLoading(false)
    }

    fetchTopic()
  }, [topicId])

  if (loading) {
    return <div className="text-center text-sm text-gray-500 mt-10">Loading topic details...</div>
  }

  if (!topic) {
    return <div className="text-center text-sm text-red-500 mt-10">Topic not found.</div>
  }

  return (
    <div className="max-w-md mx-auto bg-[#e6e6ff] min-h-screen text-black">
      <div className="p-6">
        {/* Header with back button */}
        <div className="flex items-center mb-6">
          <Link href="/?tab=topics">
            <button className="btn-hover p-1 rounded-full">
              <ChevronLeft className="h-6 w-6 mr-2" />
            </button>
          </Link>
          <h2 className="text-xl font-bold">{topic.title}</h2>
        </div>

        <div>
          <p className="text-sm text-gray-600">
            {topic.supervisor.faculty} | {topic.field}
          </p>
          <p className="text-sm font-medium mt-2">
            {topic.supervisor.name} {topic.supervisor.surname}
          </p>
          <p className="text-sm">{topic.supervisor.email || "No email"}</p>
          <p className="text-sm">{topic.supervisor.phone || "No phone"}</p>
          {topic.supervisor.email && (
            <button
              className="btn-hover py-1 px-4 border border-gray-300 rounded-full bg-transparent text-black text-xs mt-4"
              onClick={() => (window.location.href = `mailto:${topic.supervisor.email}`)}
            >
              send email
            </button>
          )}
        </div>

        <div className="mt-8">
          <p className="text-sm mb-6">{topic.description}</p>

          {topic.requirements && (
            <>
              <h3 className="text-lg font-bold mb-3">Requirements:</h3>
              <ul className="list-disc pl-5 text-sm space-y-3">
                {topic.requirements.split("\n").map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </>
          )}

          <h3 className="text-lg font-bold mt-6 mb-3">Tags:</h3>
          <div className="flex flex-wrap gap-2">
            {topic.tags.map((tag, index) => (
              <span key={index} className="hover-card text-sm bg-[#d8d8ff] px-4 py-2 rounded-full shadow-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
