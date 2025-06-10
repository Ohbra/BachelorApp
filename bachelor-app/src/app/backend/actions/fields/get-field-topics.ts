/* File: src/app/backend/actions/fields/get-field-topics.ts */

"use server";

import { prisma } from "../../prisma/prisma";

/**
 * A simplified Topic shape for UI consumption.
 */
export interface Topic {
  id: string;
  title: string;
  description: string;
  field: string;
  professor: string;
  tags: string[];
}

/**
 * Fetches all thesis proposals tagged with the given field name.
 * Returns a flat list of Topic objects.
 * @param fieldName Name of the tag/field to filter by
 * @returns Promise resolving to an array of Topic objects
 * @throws Error if `fieldName` is invalid or the query fails
 */
export async function getFieldTopics(fieldName: string): Promise<Topic[]> {
  // Validate input
  if (typeof fieldName !== "string" || fieldName.trim() === "") {
    throw new Error("getFieldTopics: 'fieldName' must be a non-empty string.");
  }
  const normalizedField = fieldName.trim();

  try {
    // Query thesis proposals that have at least one tag matching the normalizedField
    const rawTheses = await prisma.thesis_proposal.findMany({
      where: {
        thesis_proposal_tag: {
          some: {
            tag: { tag_name: normalizedField }
          }
        }
      },
      include: {
        supervisor: {
          select: {
            user_parent: {
              select: { name: true, surname: true }
            }
          }
        },
        thesis_proposal_tag: {
          select: { tag: { select: { tag_name: true } } }
        }
      }
    });

    // Map Prisma results into our Topic shape
    return rawTheses.map((thesis) => {
      const tags = thesis.thesis_proposal_tag.map(t => t.tag.tag_name);
      const field = tags.includes(normalizedField)
        ? normalizedField
        : tags[0] ?? normalizedField;  // fallback to requested field if no tags

      const parent = thesis.supervisor?.user_parent;
      const professor = parent
        ? [parent.name, parent.surname].filter(Boolean).join(" ")
        : "Unknown";

      return {
        id: thesis.thesis_id,
        title: thesis.title ?? "Untitled",
        description: thesis.description ?? "",
        field,
        professor,
        tags
      };
    });

  } catch (error) {
    console.error(`getFieldTopics(${normalizedField}) error:`, error);
    throw new Error(`Failed to fetch topics for field '${normalizedField}'.`);
  }
}
