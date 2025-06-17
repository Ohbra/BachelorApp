'use server'

import { prisma } from "@/lib/prisma"
import { RecommendationItem } from '@/app/backend/api/recommendations/route' 

export type Topic = {
  id: string;
  title: string;
  field: string;
  description: string;
  professor: {
    name: string;
    department: string;
  };
  tags: string[];
}

export async function getTopics(searchQuery?: string, studentId?: string) {
  try {
    // Fetch normal topics
    const thesisProposals = await prisma.thesis_proposal.findMany({
      where: searchQuery
        ? {
            OR: [
              {
                title: {
                  contains: searchQuery,
                  mode: 'insensitive',
                },
              },
              {
                description: {
                  contains: searchQuery,
                  mode: 'insensitive',
                },
              },
              {
                thesis_proposal_tag: {
                  some: {
                    tag: {
                      tag_name: {
                        contains: searchQuery,
                        mode: 'insensitive',
                      },
                    },
                  },
                },
              },
            ],
          }
        : undefined,
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
        title: 'asc',
      },
    })

    const formattedTopics: Topic[] = thesisProposals.map((thesis) => {
      const tags = thesis.thesis_proposal_tag.map((t) => t.tag.tag_name)
      const field = tags[0] || thesis.thesis_type
      const user = thesis.supervisor.user_parent

      return {
        id: thesis.thesis_id,
        title: thesis.title,
        field,
        description: thesis.description || 'No description provided',
        professor: {
          name: `${user?.name ?? ''} ${user?.surname ?? ''}`.trim(),
          department: user?.faculty?.faculty_name || 'Not specified',
        },
        tags,
      }
    })

    // Fetch recommendations if studentId provided
    let recommendedTopics: Topic[] = []
    if (studentId) {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/recommendations?studentId=${studentId}`,
          { cache: 'no-store' }
        )
        if (!res.ok) throw new Error('Failed to fetch recommendations')
        const data = await res.json()
        const recommendations = data.theses as RecommendationItem[]

        // Map recommendations to Topic format
        recommendedTopics = recommendations.map((rec) => {
          const thesis = thesisProposals.find((t) => t.thesis_id === rec.id)
          if (!thesis) return null

          const tags = thesis.thesis_proposal_tag.map((t) => t.tag.tag_name)
          const user = thesis.supervisor.user_parent

          return {
            id: thesis.thesis_id,
            title: thesis.title,
            field: tags[0] || thesis.thesis_type,
            description: thesis.description || 'No description provided',
            professor: {
              name: `${user?.name ?? ''} ${user?.surname ?? ''}`.trim(),
              department: user?.faculty?.faculty_name || 'Not specified',
            },
            tags,
          }
        }).filter((topic): topic is Topic => topic !== null)
      } catch (err) {
        console.error('Failed to fetch recommendations:', err)
      }
    }

    // Remove recommended topics from the normal list to avoid duplicates
    const recommendedIds = new Set(recommendedTopics.map((r) => r.id))
    const remainingTopics = formattedTopics.filter((topic) => !recommendedIds.has(topic.id))

    // Create the final list: recommendations first, then the rest
    const finalTopics = recommendedTopics.length > 0
      ? [...recommendedTopics, ...remainingTopics]
      : formattedTopics

    return {
      success: true,
      topics: finalTopics,
    }
  } catch (error) {
    console.error('Error fetching topics:', error)
    return {
      success: false,
      message: 'Failed to fetch topics',
      topics: [],
    }
  }
}
