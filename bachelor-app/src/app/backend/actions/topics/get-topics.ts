"use server"

import { prisma } from "@/lib/prisma"

export type Topic = {
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

export interface PaginatedTopicsResponse {
  success: boolean
  topics: Topic[]
  totalCount: number
  totalPages: number
  currentPage: number
  message?: string
}

// Type for recommendation items from the API
interface RecommendationItem {
  id: string
  score?: number
  // Add other fields as needed based on your API response
}

// Type for the recommendations API response
interface RecommendationsResponse {
  theses: RecommendationItem[]
  // Add other fields as needed based on your API response
}

export async function getTopics(
  searchQuery?: string,
  page = 1,
  limit = 10,
  studentId?: string,
): Promise<PaginatedTopicsResponse> {
  try {
    // Calculate offset
    const offset = (page - 1) * limit

    // Build where clause for search
    const whereClause = searchQuery?.trim()
      ? {
          OR: [
            {
              title: {
                contains: searchQuery.trim(),
                mode: "insensitive" as const,
              },
            },
            {
              description: {
                contains: searchQuery.trim(),
                mode: "insensitive" as const,
              },
            },
            {
              thesis_proposal_tag: {
                some: {
                  tag: {
                    tag_name: {
                      contains: searchQuery.trim(),
                      mode: "insensitive" as const,
                    },
                  },
                },
              },
            },
          ],
        }
      : {}

    // Get total count
    const totalCount = await prisma.thesis_proposal.count({
      where: whereClause,
    })

    // Fetch normal topics with pagination
    const thesisProposals = await prisma.thesis_proposal.findMany({
      where: whereClause,
      select: {
        thesis_id: true,
        title: true,
        description: true,
        thesis_type: true,
        supervisor: {
          select: {
            user_parent: {
              select: {
                name: true,
                surname: true,
                faculty: {
                  select: {
                    faculty_name: true,
                  },
                },
              },
            },
          },
        },
        thesis_proposal_tag: {
          select: {
            tag: {
              select: {
                tag_name: true,
              },
            },
          },
        },
      },
      orderBy: {
        title: "asc",
      },
      skip: offset,
      take: limit,
    })

    const formattedTopics: Topic[] = thesisProposals.map((thesis) => {
      const tags = thesis.thesis_proposal_tag.map((t) => t.tag.tag_name)
      const field = tags[0] || thesis.thesis_type
      const user = thesis.supervisor.user_parent

      return {
        id: thesis.thesis_id,
        title: thesis.title,
        field,
        description: thesis.description || "No description provided",
        professor: {
          name: `${user?.name ?? ""} ${user?.surname ?? ""}`.trim(),
          department: user?.faculty?.faculty_name || "Not specified",
        },
        tags,
      }
    })

    // Handle recommendations if studentId provided (only for first page)
    let finalTopics = formattedTopics
    const adjustedTotalCount = totalCount

    if (studentId && page === 1) {
      try {
        // Fetch all thesis proposals for recommendations (not paginated)
        const allThesisProposals = await prisma.thesis_proposal.findMany({
          where: whereClause,
          select: {
            thesis_id: true,
            title: true,
            description: true,
            thesis_type: true,
            supervisor: {
              select: {
                user_parent: {
                  select: {
                    name: true,
                    surname: true,
                    faculty: {
                      select: {
                        faculty_name: true,
                      },
                    },
                  },
                },
              },
            },
            thesis_proposal_tag: {
              select: {
                tag: {
                  select: {
                    tag_name: true,
                  },
                },
              },
            },
          },
          orderBy: {
            title: "asc",
          },
        })

        // Fetch recommendations
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/recommendations?studentId=${studentId}`, {
          cache: "no-store",
        })

        if (res.ok) {
          const data: RecommendationsResponse = await res.json()
          const recommendations = data.theses || []

          // Map recommendations to Topic format
          const recommendedTopics: Topic[] = recommendations
            .map((rec: RecommendationItem) => {
              const thesis = allThesisProposals.find((t) => t.thesis_id === rec.id)
              if (!thesis) return null

              const tags = thesis.thesis_proposal_tag.map((t) => t.tag.tag_name)
              const user = thesis.supervisor.user_parent

              return {
                id: thesis.thesis_id,
                title: thesis.title,
                field: tags[0] || thesis.thesis_type,
                description: thesis.description || "No description provided",
                professor: {
                  name: `${user?.name ?? ""} ${user?.surname ?? ""}`.trim(),
                  department: user?.faculty?.faculty_name || "Not specified",
                },
                tags,
              }
            })
            .filter((topic: Topic | null): topic is Topic => topic !== null)

          // Remove recommended topics from the normal list to avoid duplicates
          const recommendedIds = new Set(recommendedTopics.map((r) => r.id))
          const remainingTopics = formattedTopics.filter((topic) => !recommendedIds.has(topic.id))

          // For first page, show recommendations first, then fill with remaining topics
          const availableSlots = limit - recommendedTopics.length
          const topicsToShow = availableSlots > 0 ? remainingTopics.slice(0, availableSlots) : []

          finalTopics = [...recommendedTopics, ...topicsToShow]
        }
      } catch (err) {
        console.error("Failed to fetch recommendations:", err)
        // Fall back to normal topics if recommendations fail
      }
    }

    const totalPages = Math.ceil(adjustedTotalCount / limit)

    return {
      success: true,
      topics: finalTopics,
      totalCount: adjustedTotalCount,
      totalPages,
      currentPage: page,
    }
  } catch (error) {
    console.error("Error fetching topics:", error)
    console.error("Error fetching topics:", error instanceof Error ? error.message : error)

    return {
      success: false,
      message: (error as Error).message || "Unknown error",
      topics: [],
      totalCount: 0,
      totalPages: 0,
      currentPage: page,
    }

  }
}
