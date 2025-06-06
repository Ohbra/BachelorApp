"use server";
import { prisma } from '../../prisma/prisma';

export type TopicDetails = {
  id: string;
  title: string;
  description: string;
  requirements: string | null;
  field: string;
  supervisor: {
    name: string;
    surname: string;
    email?: string;
    phone?: string;
    faculty: string | null;
  };
  tags: string[];
};

export async function getTopicDetails(topicId: string) {
  try {
    const topic = await prisma.thesis_proposal.findUnique({
      where: { thesis_id: topicId },
      select: {
        thesis_id: true,
        title: true,
        description: true,
        requirements: true,
        thesis_type: true,
        supervisor: {
          select: {
            user_parent: {
              select: {
                name: true,
                surname: true,
                faculty: { select: { faculty_name: true } },
                users: {
                  select: {
                    email: true,
                    phone: true,
                  },
                },
              },
            },
          },
        },
        thesis_proposal_tag: {
          select: {
            tag: { select: { tag_name: true } },
          },
        },
      },
    });

    if (!topic) {
      return { success: false, message: "Topic not found" };
    }

    const tags = topic.thesis_proposal_tag.map((t) => t.tag.tag_name);

    const details: TopicDetails = {
      id: topic.thesis_id,
      title: topic.title,
      description: topic.description,
      requirements: topic.requirements,
      field: tags[0] || topic.thesis_type,
      supervisor: {
        name: topic.supervisor.user_parent.name,
        surname: topic.supervisor.user_parent.surname,
        email: topic.supervisor.user_parent.users?.email || undefined,
        phone: topic.supervisor.user_parent.users?.phone || undefined,
        faculty: topic.supervisor.user_parent.faculty?.faculty_name || null,
      },
      tags,
    };

    return { success: true, details };
  } catch (err) {
    console.error("Error fetching topic details:", err);
    return { success: false, message: "Failed to fetch topic details" };
  }
}
