"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

import { NavigationTabs } from "@/components/navigation-tabs";
import { SearchBar } from "@/components/search-bar";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <main className="container mx-auto p-4">
      <div className="mb-8 space-y-4">
        <h1 className="text-2xl font-bold">Bachelor Academic Platform</h1>
        <p className="text-muted-foreground">
          Explore topics, connect with professors, and find your Bachelor
          academic interests
        </p>
      </div>

      <div className="mx-auto max-w-4xl">
        <Tabs defaultValue="fields" className="w-full">
          <NavigationTabs defaultValue="fields" />
          <TabsContent value="fields" className="space-y-4">
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
          </TabsContent>
          <TabsContent value="professors" className="space-y-4">
            <SearchBar showFilter={true} placeholder="Search professors" />
            <div className="space-y-4">
              {[
                {
                  id: "prof1",
                  name: "Name Professor",
                  department: "data science",
                },
                {
                  id: "prof2",
                  name: "Name Professor",
                  department: "frontend, UX design",
                },
                {
                  id: "prof3",
                  name: "Name Professor",
                  department: "economy",
                },
                {
                  id: "prof4",
                  name: "Name Professor",
                  department: "economy",
                },
                {
                  id: "prof5",
                  name: "Name Professor",
                  department: "economy",
                },
              ].map((professor, index) => (
                <Link href={`/professor/${professor.id}`} key={index}>
                  <div className="flex items-center justify-between rounded-md border p-4 shadow-sm hover:bg-muted/50 transition-colors">
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
                </Link>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="list" className="space-y-4">
            <SearchBar showFilter={true} placeholder="Search topics" />
            <div className="space-y-4">
              {[
                {
                  id: "topic1",
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
                  id: "topic2",
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
                  id: "topic3",
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
                <Link href={`/topic/${topic.id}`} key={index}>
                  <div className="flex items-center justify-between rounded-md border p-4 shadow-sm hover:bg-muted/50 transition-colors">
                    <div>
                      <h3 className="font-medium">{topic.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {topic.field}
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
                </Link>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
