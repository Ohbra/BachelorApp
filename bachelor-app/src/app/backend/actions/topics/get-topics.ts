'use server'

import { prisma } from '../../prisma/prisma'

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

export async function getTopics(searchQuery?: string) {
  try {
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

    return {
      success: true,
      topics: formattedTopics,
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
