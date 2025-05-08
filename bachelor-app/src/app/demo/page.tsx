"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { InterestsTags } from "@/components/interests-tags";
import { ProfileCard } from "@/components/profile-card";
import { SearchBar } from "@/components/search-bar";
import { TopicCard } from "@/components/topic-card";

export default function DemoPage() {
  const [expandedTopic, setExpandedTopic] = useState<number | null>(0);
  const [showFilter, setShowFilter] = useState(false);
  const [activeTab, setActiveTab] = useState("fields");

  const toggleExpand = (index: number) => {
    setExpandedTopic(expandedTopic === index ? null : index);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Professor Profile Card */}
        <div>
          <ProfileCard
            name="Name Prof."
            role="Data Science"
            email="email@address.com"
            phone="0123456789"
            topics={["Title topic", "Title topic", "Title topic"]}
            description="This is a short description of how the professor likes to work with their students. It includes information about how they prefer to meet up with their students or if they have any special requirements or preferences."
          />
        </div>

        {/* Student Profile Card */}
        <div>
          <ProfileCard
            name="Name Student"
            role="Student"
            faculty="Faculty / Study program"
            email="email@address.com"
            phone="012345678900"
            isStudent={true}
          />
          <div className="mt-4">
            <h4 className="mb-2 text-sm font-medium">Interests:</h4>
            <InterestsTags
              interests={[
                "Data science",
                "Frontend",
                "Marketing",
                "AI",
                "UX/UI Design",
              ]}
            />
          </div>
          <div className="mt-4">
            <h4 className="mb-2 text-sm font-medium">Previous courses:</h4>
            <div className="space-y-2 text-sm">
              <div>
                <p className="font-medium">Programming</p>
                <p className="text-muted-foreground">
                  WS 2023/24 | Andreas Müller
                </p>
              </div>
              <div>
                <p className="font-medium">Screendesign</p>
                <p className="text-muted-foreground">SS 2024 | Sarah Smith</p>
              </div>
              <div>
                <p className="font-medium">Data science Basics</p>
                <p className="text-muted-foreground">
                  WS 2024/25 | Doris Gershov
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Topic View with Search and Tabs */}
        <div>
          <Card className="p-4">
            <h3 className="mb-4 text-lg font-semibold">Topic</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium">field</h4>
                <p className="text-sm text-muted-foreground">description</p>
              </div>
              <div>
                <h4 className="text-sm font-medium">requirements</h4>
                <p className="text-sm text-muted-foreground">
                  Short description of the needed requirements. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut.
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Also at amet. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-medium">Tags</h4>
                <InterestsTags
                  interests={[
                    "Data science",
                    "Frontend",
                    "Marketing",
                    "AI",
                    "UX/UI Design",
                  ]}
                />
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Search and Navigation Section */}
      <div className="mt-8">
        <div className="w-full">
          <div className="flex border-b border-white/20 mb-4">
            {["fields", "professors", "list"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-sm font-medium transition-all border-b-2 text-white/70 ${
                  tab === activeTab
                    ? "border-white text-white"
                    : "border-transparent hover:text-white"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {activeTab === "fields" && (
            <div className="space-y-4">
              <SearchBar
                showFilter={true}
                placeholder="Search fields"
                onFilter={() => setShowFilter(!showFilter)}
              />
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                <div className="rounded-md border bg-card p-4 text-card-foreground shadow-sm">
                  <span>data science</span>
                </div>
                <div className="rounded-md border bg-card p-4 text-card-foreground shadow-sm">
                  <span>frontend</span>
                </div>
                <div className="rounded-md border bg-card p-4 text-card-foreground shadow-sm">
                  <span>backend</span>
                </div>
                <div className="rounded-md border bg-card p-4 text-card-foreground shadow-sm">
                  <span>UX design</span>
                </div>
                <div className="rounded-md border bg-card p-4 text-card-foreground shadow-sm">
                  <span>economy</span>
                </div>
                <div className="rounded-md border bg-card p-4 text-card-foreground shadow-sm">
                  <span>marketing</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === "professors" && (
            <div className="space-y-4">
              <SearchBar
                showFilter={true}
                placeholder="Search professors"
                onFilter={() => setShowFilter(!showFilter)}
              />
              <div className="space-y-4">
                {[
                  { name: "Name Professor", department: "data science" },
                  { name: "Name Professor", department: "frontend, UX design" },
                  { name: "Name Professor", department: "economy" },
                  { name: "Name Professor", department: "economy" },
                  { name: "Name Professor", department: "economy" },
                ].map((professor, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between rounded-md border p-4 shadow-sm"
                  >
                    <div>
                      <h3 className="font-medium">{professor.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {professor.department}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "list" && (
            <div className="space-y-4">
              <SearchBar
                showFilter={true}
                placeholder="Search topics"
                onFilter={() => setShowFilter(!showFilter)}
              />
              <div className="space-y-4">
                {[
                  {
                    title: "Title topic",
                    field: "field",
                    description: "This is a short description of the topic...",
                    professor: {
                      name: "Professor Name",
                      department: "Data Science",
                    },
                    tags: ["Data Science", "AI"],
                  },
                  {
                    title: "Title topic",
                    field: "field",
                    description: "This is a short description of the topic...",
                    professor: {
                      name: "Professor Name",
                      department: "UX Design",
                    },
                    tags: ["UX Design", "Frontend"],
                  },
                  {
                    title: "Title topic",
                    field: "field",
                    description: "This is a short description of the topic...",
                    professor: {
                      name: "Professor Name",
                      department: "Marketing",
                    },
                    tags: ["Marketing", "Economy"],
                  },
                ].map((topic, index) => (
                  <TopicCard
                    key={index}
                    title={topic.title}
                    field={topic.field}
                    description={topic.description}
                    professor={topic.professor}
                    tags={topic.tags}
                    expanded={expandedTopic === index}
                    onExpand={() => toggleExpand(index)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
