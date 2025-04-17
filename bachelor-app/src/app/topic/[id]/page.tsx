"use client";

import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { TopicCard } from "@/components/topic-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { InterestsTags } from "@/components/interests-tags";

// This would typically come from a database or API
const topics = {
  topic1: {
    title: "Machine Learning Fundamentals",
    field: "Data Science",
    description:
      "An introduction to the core concepts and algorithms in machine learning, including supervised and unsupervised learning approaches.",
    professor: {
      name: "Professor Name",
      department: "Data Science",
    },
    tags: ["Data Science", "AI", "Algorithms"],
    requirements:
      "Basic knowledge of statistics and programming (preferably Python). Students should be comfortable with linear algebra and calculus concepts.",
    additionalInfo:
      "This topic is suitable for students interested in pursuing careers in data science, AI research, or software engineering with a focus on intelligent systems.",
  },
  topic2: {
    title: "User Interface Design Principles",
    field: "UX Design",
    description:
      "Exploring the fundamental principles of effective user interface design and how they impact user experience.",
    professor: {
      name: "Professor Name",
      department: "UX Design",
    },
    tags: ["UX Design", "Frontend", "Human-Computer Interaction"],
    requirements:
      "Basic understanding of web technologies (HTML, CSS). No prior design experience required, but an interest in visual communication is beneficial.",
    additionalInfo:
      "Students will work on practical projects applying design principles to real-world interfaces. Portfolio-building opportunities available.",
  },
  topic3: {
    title: "Digital Marketing Analytics",
    field: "Marketing",
    description:
      "Understanding how to measure, analyze, and optimize digital marketing campaigns using data-driven approaches.",
    professor: {
      name: "Professor Name",
      department: "Marketing",
    },
    tags: ["Marketing", "Economy", "Analytics"],
    requirements:
      "Familiarity with basic marketing concepts. No technical prerequisites, but comfort with spreadsheets and data analysis is helpful.",
    additionalInfo:
      "This topic bridges business strategy and technical implementation, making it ideal for students interested in marketing roles with an analytical focus.",
  },
};

export default function TopicPage({ params }: { params: { id: string } }) {
  const [expanded, setExpanded] = useState(true);
  const topic = topics[params.id as keyof typeof topics] || topics.topic1;

  return (
    <div className="container mx-auto p-4">
      <div className="mb-6">
        <Link href="/">
          <Button variant="ghost" className="pl-0">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to search
          </Button>
        </Link>
      </div>

      <div className="mx-auto max-w-2xl space-y-6">
        <h1 className="text-2xl font-bold">Topic Details</h1>

        <TopicCard
          title={topic.title}
          field={topic.field}
          description={topic.description}
          professor={topic.professor}
          tags={topic.tags}
          expanded={expanded}
          onExpand={() => setExpanded(!expanded)}
        />

        <Card>
          <CardContent className="pt-6 space-y-4">
            <div>
              <h3 className="text-lg font-medium">Requirements</h3>
              <p className="text-muted-foreground">{topic.requirements}</p>
            </div>

            <div>
              <h3 className="text-lg font-medium">Additional Information</h3>
              <p className="text-muted-foreground">{topic.additionalInfo}</p>
            </div>

            <div>
              <h3 className="text-lg font-medium">Related Topics</h3>
              <InterestsTags
                interests={topic.tags.concat([
                  "Research Methods",
                  "Data Visualization",
                ])}
                variant="outline"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
