"use client";

import { useState } from "react";
import type { ProfessorDetails } from "@/app/backend/actions/professors/get-professor-detail";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { EditProfileDialog } from "./edit-profile-dialog";
import { DeleteTopicDialog } from "./delete-topic-dialog";
import { Plus, ChevronRight, ChevronDown, Edit, Trash2 } from "lucide-react";
import Link from "next/link";

// Mock data for topics
const mockOfferedTopics = [
  {
    id: "1",
    title: "Machine Learning in Healthcare",
    field: "Computer Science",
    description:
      "This is a short description of the topic exploring the applications of machine learning algorithms in healthcare diagnostics and treatment optimization.",
    fullDescription:
      "This comprehensive topic explores the applications of machine learning algorithms in healthcare diagnostics and treatment optimization. Students will work on real-world datasets to develop predictive models for disease diagnosis, drug discovery, and personalized treatment plans. The project involves data preprocessing, feature engineering, model selection, and evaluation using various ML techniques including deep learning, ensemble methods, and reinforcement learning.",
  },
  {
    id: "2",
    title: "Sustainable Urban Planning",
    field: "Architecture",
    description:
      "This is a short description of the topic focusing on sustainable urban development and smart city technologies.",
    fullDescription:
      "This topic focuses on sustainable urban development and smart city technologies. Students will research and propose innovative solutions for urban challenges including traffic management, energy efficiency, waste management, and green infrastructure. The project combines theoretical knowledge with practical applications using GIS systems, IoT sensors, and data analytics to create comprehensive urban planning strategies.",
  },
  {
    id: "3",
    title: "Blockchain in Supply Chain",
    field: "Business",
    description:
      "This is a short description of the topic examining blockchain technology applications in supply chain management.",
    fullDescription:
      "This topic examines blockchain technology applications in supply chain management and logistics. Students will analyze current supply chain challenges and develop blockchain-based solutions to improve transparency, traceability, and efficiency. The project includes smart contract development, consensus mechanism analysis, and implementation of decentralized applications for supply chain tracking.",
  },
];

const mockPreviousTopics = [
  {
    id: "p1",
    title: "AI Ethics in Autonomous Vehicles",
    field: "Computer Science",
  },
  {
    id: "p2",
    title: "Green Building Certification Systems",
    field: "Architecture",
  },
  { id: "p3", title: "Digital Marketing Analytics", field: "Business" },
];

const mockEducation = [
  {
    degree: "PhD in Computer Science",
    institution: "Technical University of Munich",
    year: "2015",
  },
  {
    degree: "Masters Degree",
    institution: "University of Stuttgart",
    year: "2010",
  },
  {
    degree: "Bachelors Degree",
    institution: "University of Applied Sciences",
    year: "2008",
  },
];

const mockExperience = [
  {
    title: "Professor of Computer Science",
    company: "University of Applied Sciences Augsburg",
    period: "since 2020",
  },
  {
    title: "Senior Research Scientist",
    company: "Siemens AG",
    period: "2016-2020",
  },
  {
    title: "Research Associate",
    company: "Fraunhofer Institute",
    period: "2011-2016",
  },
];

interface ProfessorProfileProps {
  details: ProfessorDetails;
}

export function ProfessorProfile({ details }: ProfessorProfileProps) {
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [expandedTopics, setExpandedTopics] = useState<Set<string>>(new Set());
  const [deleteTopicId, setDeleteTopicId] = useState<string | null>(null);
  const [topics, setTopics] = useState(mockOfferedTopics);

  // Get initials for avatar fallback
  const nameParts = details.name.split(" ");
  const initials =
    nameParts.length >= 2
      ? `${nameParts[0].charAt(0)}${nameParts[nameParts.length - 1].charAt(
          0
        )}`.toUpperCase()
      : details.name.charAt(0).toUpperCase();

  // For demo purposes, assume current user can edit
  const canEdit = true;

  const toggleTopicExpansion = (topicId: string) => {
    const newExpanded = new Set(expandedTopics);
    if (newExpanded.has(topicId)) {
      newExpanded.delete(topicId);
    } else {
      newExpanded.add(topicId);
    }
    setExpandedTopics(newExpanded);
  };

  const handleDeleteTopic = (topicId: string) => {
    setDeleteTopicId(topicId);
  };

  const confirmDeleteTopic = () => {
    if (deleteTopicId) {
      // Remove topic from the list
      setTopics(topics.filter((topic) => topic.id !== deleteTopicId));
      // Close expanded state if it was expanded
      const newExpanded = new Set(expandedTopics);
      newExpanded.delete(deleteTopicId);
      setExpandedTopics(newExpanded);
      // Reset delete state
      setDeleteTopicId(null);
    }
  };

  const truncateText = (text: string, maxLength = 100) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  // Get the topic being deleted
  const topicToDelete = deleteTopicId
    ? topics.find((topic) => topic.id === deleteTopicId)
    : null;

  return (
    <div className="min-h-screen bg-[#0f0f2e] text-white">
      <div className="container mx-auto py-4 px-4 max-w-md md:max-w-4xl">
        {/* Header Section */}
        <div className="mb-6">
          <div className="flex flex-col items-center mb-6">
            <Avatar className="h-20 w-20 md:h-24 md:w-24 mb-4">
              <AvatarImage
                src="/placeholder.svg?height=96&width=96"
                alt={details.name}
              />
              <AvatarFallback className="bg-[#e0e0ff] text-[#0f0f2e] text-xl">
                {initials}
              </AvatarFallback>
            </Avatar>
            <h1 className="text-xl md:text-2xl font-bold text-center">
              {details.name}
            </h1>
            <p className="text-white/80 text-sm md:text-base">
              {details.department} |{" "}
              {details.subjectArea !== "Not specified"
                ? details.subjectArea
                : "Computer Science"}
            </p>
            <p className="text-white/70 text-sm">email@address.com</p>
            <p className="text-white/70 text-sm">0123456789</p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mb-6">
            <Button className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black font-medium">
              send email
            </Button>
            <Button
              variant="outline"
              className="flex-1 border-white/30 text-white hover:bg-white/10"
            >
              go to the profile
            </Button>
          </div>
        </div>

        {/* Offered Topics Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">List of offered topics:</h2>
            {canEdit && (
              <Link href={`/professor/${details.id}/create-topic`}>
                <Button
                  size="sm"
                  className="bg-yellow-400 hover:bg-yellow-500 text-black"
                >
                  <Plus className="h-4 w-4 mr-1" />
                  Create New Topic
                </Button>
              </Link>
            )}
          </div>

          <div className="space-y-3">
            {topics.map((topic) => {
              const isExpanded = expandedTopics.has(topic.id);
              return (
                <Card key={topic.id} className="bg-[#1a1a3a] border-white/10">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-medium text-white">
                            {topic.title}
                          </h3>
                          <button
                            onClick={() => toggleTopicExpansion(topic.id)}
                            className="p-1 hover:bg-white/10 rounded"
                          >
                            {isExpanded ? (
                              <ChevronDown className="h-4 w-4 text-white/70" />
                            ) : (
                              <ChevronRight className="h-4 w-4 text-white/70" />
                            )}
                          </button>
                        </div>
                        <p className="text-sm text-white/70 mb-2">
                          {topic.field}
                        </p>
                        <p className="text-sm text-white/80">
                          {isExpanded
                            ? topic.fullDescription
                            : truncateText(topic.description)}
                        </p>
                      </div>

                      {/* Edit and Delete buttons - always visible for owners */}
                      {canEdit && (
                        <div className="flex gap-1 ml-2">
                          <Button
                            size="sm"
                            variant="ghost"
                            className="h-8 w-8 p-0 hover:bg-white/10"
                            onClick={() => {
                              // Navigate to edit page - for now just log
                              console.log("Edit topic:", topic.id);
                            }}
                          >
                            <Edit className="h-3 w-3 text-white/70" />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="h-8 w-8 p-0 hover:bg-red-400/10"
                            onClick={() => handleDeleteTopic(topic.id)}
                          >
                            <Trash2 className="h-3 w-3 text-red-400" />
                          </Button>
                        </div>
                      )}
                    </div>

                    {/* Additional action buttons when expanded */}
                    {canEdit && isExpanded && (
                      <div className="flex gap-2 mt-3 pt-3 border-t border-white/10">
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-white/30 text-white hover:bg-white/10"
                          onClick={() => {
                            // Navigate to edit page - for now just log
                            console.log("Edit topic:", topic.id);
                          }}
                        >
                          <Edit className="h-3 w-3 mr-1" />
                          Edit Topic
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-red-400/30 text-red-400 hover:bg-red-400/10"
                          onClick={() => handleDeleteTopic(topic.id)}
                        >
                          <Trash2 className="h-3 w-3 mr-1" />
                          Delete Topic
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Work Style Section */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-3">
            How I like to work with my students:
          </h2>
          <Card className="bg-[#1a1a3a] border-white/10">
            <CardContent className="p-4">
              <p className="text-white/80 text-sm leading-relaxed">
                This is a short description of how this professor likes to work
                with their students. They prefer to meet up with their students
                or if they have any special requirements or preferences. I
                believe in collaborative learning and encourage students to take
                ownership of their projects. Regular meetings, clear
                communication, and hands-on guidance are key to successful
                thesis completion.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Previous Topics Section */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-3">Previous topics:</h2>
          <div className="space-y-2">
            {mockPreviousTopics.map((topic) => (
              <Card key={topic.id} className="bg-[#1a1a3a] border-white/10">
                <CardContent className="p-3">
                  <h3 className="font-medium text-white text-sm">
                    {topic.title}
                  </h3>
                  <p className="text-xs text-white/70">{topic.field}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CV/Vita Section */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-3">Vita:</h2>
          <div className="space-y-4">
            {/* Education */}
            {mockEducation.map((edu, index) => (
              <div key={index} className="border-b border-white/20 pb-3">
                <h3 className="font-medium text-white text-sm">{edu.degree}</h3>
                <p className="text-white/70 text-xs">
                  {edu.institution} | {edu.year}
                </p>
              </div>
            ))}

            {/* Experience */}
            {mockExperience.map((exp, index) => (
              <div key={index} className="border-b border-white/20 pb-3">
                <h3 className="font-medium text-white text-sm">{exp.title}</h3>
                <p className="text-white/70 text-xs">
                  {exp.company} | {exp.period}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Edit Profile Button for Owner */}
        {canEdit && (
          <div className="mb-6">
            <Button
              onClick={() => setIsEditProfileOpen(true)}
              variant="outline"
              className="w-full border-white/30 text-white hover:bg-white/10"
            >
              <Edit className="h-4 w-4 mr-2" />
              Edit Profile Information
            </Button>
          </div>
        )}
      </div>

      {/* Edit Dialog */}
      {canEdit && (
        <EditProfileDialog
          open={isEditProfileOpen}
          onOpenChange={setIsEditProfileOpen}
          details={details}
        />
      )}

      {/* Delete Topic Dialog */}
      {topicToDelete && (
        <DeleteTopicDialog
          open={!!deleteTopicId}
          onOpenChange={(open) => !open && setDeleteTopicId(null)}
          topicTitle={topicToDelete.title}
          onConfirm={confirmDeleteTopic}
        />
      )}
    </div>
  );
}
