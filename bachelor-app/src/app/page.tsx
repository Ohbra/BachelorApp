"use client"

import { useEffect, useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Search, ChevronRight, User } from "lucide-react"
import Link from "next/link"
import { getFieldsFromTags } from "../app/backend/actions/fields/get-fields"
import { getProfessors } from "../app/backend/actions/professors/get-professors"
import { getTopics } from "../app/backend/actions/topics/get-topics"
import { useMediaQuery } from "@/hooks/use-media-query"
import { createClient } from "@supabase/supabase-js"

type Field = {
  id: string
  name: string
  slug: string
}

type Professor = {
  id: string
  name: string
  department: string
}

type Topic = {
  id: string
  title: string
  field: string
  description: string
  professor: {
    name: string
    department: string
  }
  tags: string[]
}

export default function Home() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("fields")
  const [searchQuery, setSearchQuery] = useState("")
  const [expandedTopic, setExpandedTopic] = useState<number | null>(null)
  const [fields, setFields] = useState<Field[]>([])
  const [professors, setProfessors] = useState<Professor[]>([])
  const [topics, setTopics] = useState<Topic[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [hasLoadedData, setHasLoadedData] = useState({
    fields: false,
    professors: false,
    topics: false,
  })
  const isDesktop = useMediaQuery("(min-width: 1024px)")

  // Create supabase client outside of useEffect
  const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)

  const toggleExpand = (index: number) => {
    setExpandedTopic(expandedTopic === index ? null : index)
  }

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
    const params = new URLSearchParams(searchParams)
    params.set("tab", tab)
    router.push(`/?${params.toString()}`)
  }

  // Initialize activeTab from URL on mount only
  useEffect(() => {
    const tabFromUrl = searchParams.get("tab")
    if (tabFromUrl && ["fields", "professors", "topics"].includes(tabFromUrl)) {
      setActiveTab(tabFromUrl)
    }
  }, []) // Empty dependency array - run only on mount

  useEffect(() => {
    async function fetchFields() {
      if (hasLoadedData.fields) return // Don't refetch if already loaded

      setIsLoading(true)
      try {
        const res = await getFieldsFromTags()
        if (res.success) {
          setFields(res.fields)
          setHasLoadedData((prev) => ({ ...prev, fields: true }))
        }
      } catch (error) {
        console.error("Error fetching fields:", error)
      } finally {
        setIsLoading(false)
      }
    }

    async function fetchProfessors() {
      if (hasLoadedData.professors) return // Don't refetch if already loaded

      setIsLoading(true)
      try {
        const res = await getProfessors()
        if (res.success) {
          setProfessors(res.professors)
          setHasLoadedData((prev) => ({ ...prev, professors: true }))
        }
      } catch (error) {
        console.error("Error fetching professors:", error)
      } finally {
        setIsLoading(false)
      }
    }
  }, [activeTab, isMobile]);

    async function fetchTopics() {
      setIsLoading(true)
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser()
        const studentId = user?.id

        console.log("▶️ Logged-in studentId:", studentId)

        const res = await getTopics(searchQuery, studentId)

        console.log("▶️ Fetched topics:", res.topics)

        if (res.success) {
          setTopics(res.topics)
          setHasLoadedData((prev) => ({ ...prev, topics: true }))
        }
      } catch (error) {
        console.error("Error fetching topics:", error)
      } finally {
        setIsLoading(false)
      }
    }

    if (activeTab === "fields") fetchFields()
    else if (activeTab === "professors") fetchProfessors()
    else if (activeTab === "topics") fetchTopics()
  }, [activeTab, searchQuery]) // Removed supabase.auth dependency

  // Check if we should show loading or no data message
  const shouldShowLoading = isLoading || !hasLoadedData[activeTab as keyof typeof hasLoadedData]

  return (
    <main className="min-h-screen bg-[#110833] text-white">
      <div className="app-container">
        {/* Header with search and user icon */}
        <div className="header">
          <div className="search-container">
            <Search className="search-icon" />
            <input
              type="search"
              placeholder="Search"
              value={searchQuery}
              className="search-input"
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
          <Link href="/student" className="p-2 rounded-full border border-white/30 hover:bg-white/10 transition-colors">
            <User className="h-5 w-5 text-white" />
          </Link>
        </div>

        {/* Tabs */}
        <div className={`flex mb-8 relative border-b border-white/10 ${isDesktop ? "justify-center" : ""}`}>
          {["fields", "professors", "topics"].map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`flex-1 px-4 py-2 text-sm font-medium transition-all text-white tab-underline ${activeTab === tab ? "active" : ""} ${isDesktop ? "max-w-[200px]" : ""}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Fields */}
        {activeTab === "fields" &&
          (shouldShowLoading ? (
            <LoadingSpinner />
          ) : (
            <div
              className={`grid gap-4 ${isDesktop ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-5xl mx-auto" : "grid-cols-2"}`}
            >
              {fields.length > 0 ? (
                fields.map((field) => (
                  <Link key={field.id} href={`/fields/${field.slug}`} className="block">
                    <div className="field-card">
                      <span className="text-xl font-medium">{field.name}</span>
                    </div>
                  </Link>
                ))
              ) : (
                <p className="col-span-full text-center text-white/70 py-8">No fields found</p>
              )}
            </div>
          ))}

        {/* Professors */}
        {activeTab === "professors" &&
          (shouldShowLoading ? (
            <LoadingSpinner />
          ) : (
            <div className={`space-y-4 ${isDesktop ? "max-w-4xl mx-auto" : ""}`}>
              {professors.length > 0 ? (
                professors.map((professor) => (
                  <Link key={professor.id} href={`/professor/${professor.id}`} className="block">
                    <div className="list-card flex items-center justify-between rounded-full">
                      <div>
                        <h3 className="font-bold text-lg card-title">{professor.name}</h3>
                        <p className="text-sm text-white/70 card-subtitle">{professor.department}</p>
                      </div>
                      <ChevronRight className="h-6 w-6 text-white/70 card-icon" />
                    </div>
                  </Link>
                ))
              ) : (
                <p className="text-center text-white/70 py-8">No professors found</p>
              )}
            </div>
          ))}

        {/* Topics: recommended + normal */}
        {activeTab === "topics" && (
          <div className={`space-y-4 ${isDesktop ? "max-w-4xl mx-auto" : ""}`}>
            {shouldShowLoading ? (
              <LoadingSpinner />
            ) : topics.length > 0 ? (
              <>
                <h2 className="text-lg font-bold text-white/80">Recommended for you</h2>
                {topics.slice(0, 3).map((topic, index) => (
                  <TopicCard
                    key={topic.id}
                    topic={topic}
                    index={index}
                    expandedTopic={expandedTopic}
                    toggleExpand={toggleExpand}
                  />
                ))}
                <h2 className="text-lg font-bold text-white/80 mt-8">Other topics</h2>
                {topics.slice(3).map((topic, index) => (
                  <TopicCard
                    key={topic.id}
                    topic={topic}
                    index={index + 3}
                    expandedTopic={expandedTopic}
                    toggleExpand={toggleExpand}
                  />
                ))}
              </>
            ) : (
              <p className="text-center text-white/70 py-8">No topics found</p>
            )}
          </div>
        )}
      </div>
    </main>
  )
}

function TopicCard({
  topic,
  index,
  expandedTopic,
  toggleExpand,
}: { topic: Topic; index: number; expandedTopic: number | null; toggleExpand: (i: number) => void }) {
  return (
    <div className="list-card rounded-3xl">
      <div className="flex justify-between items-start">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-medium card-title">{topic.title}</h3>
            <button onClick={() => toggleExpand(index)} className="p-1 rounded-full">
              {expandedTopic === index ? (
                <ChevronRight className="h-4 w-4 card-icon rotate-90" />
              ) : (
                <div className="professors-list">
                  {professors.length > 0 ? (
                    professors.map((professor) => (
                      <Link
                        key={professor.id}
                        href={`/professor/${professor.id}`}
                        className="block"
                      >
                        <div className="professor-card">
                          <div>
                            <h3 className="font-bold text-lg card-title">
                              {professor.name}
                            </h3>
                            <p className="text-sm card-subtitle">
                              {professor.department}
                            </p>
                          </div>
                          <ChevronRight className="h-6 w-6 card-icon" />
                        </div>
                      </Link>
                    ))
                  ) : (
                    <p className="text-center text-white/70 py-8">
                      No professors found
                    </p>
                  )}
                </div>
              )}
            </>
          )}
          {expandedTopic === index && topic.tags?.length > 0 && (
            <div className="mt-4">
              <div className="flex flex-wrap gap-2">
                {topic.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="text-xs px-3 py-1 rounded-full bg-white/10 card-subtitle">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Pagination */}
        {!isLoading && pagination.totalPages > 1 && (
          <Pagination
            currentPage={pagination.currentPage}
            totalPages={pagination.totalPages}
            onPageChange={handlePageChange}
            isLoading={isLoading}
          />
        )}
      </div>
    </div>
  )
}

function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center py-12">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-white border-t-transparent"></div>
    </div>
  )
}
