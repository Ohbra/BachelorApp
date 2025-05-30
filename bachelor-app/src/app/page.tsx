"use client";

import { useEffect, useState } from "react";
import { Search, ChevronRight, User } from "lucide-react";
import Link from "next/link";
import { getFieldsFromTags } from "../app/backend/actions/fields/get-fields";
import { getProfessors } from "../app/backend/actions/professors/get-professors";
import { getTopics } from "../app/backend/actions/topics/get-topics";
import { useMediaQuery } from "@/hooks/use-media-query";
import { createClient } from "@supabase/supabase-js";

type Field = {
  id: string;
  name: string;
  slug: string;
};

type Professor = {
  id: string;
  name: string;
  department: string;
};

type Topic = {
  id: string;
  title: string;
  field: string;
  description: string;
  professor: {
    name: string;
    department: string;
  };
  tags: string[];
};

export default function Home() {
  const [activeTab, setActiveTab] = useState("fields");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedTopic, setExpandedTopic] = useState<number | null>(null);
  const [fields, setFields] = useState<Field[]>([]);
  const [professors, setProfessors] = useState<Professor[]>([]);
  const [topics, setTopics] = useState<Topic[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const toggleExpand = (index: number) => {
    setExpandedTopic(expandedTopic === index ? null : index);
  };

  useEffect(() => {
    async function fetchFields() {
      setIsLoading(true);
      const res = await getFieldsFromTags();
      if (res.success) setFields(res.fields);
      setIsLoading(false);
    }

    async function fetchProfessors() {
      setIsLoading(true);
      const res = await getProfessors();
      if (res.success) setProfessors(res.professors);
      setIsLoading(false);
    }

    async function fetchTopics() {
      setIsLoading(true);
      const { data: { user } } = await supabase.auth.getUser();
      const studentId = user?.id;

      console.log('▶️ Logged-in studentId:', studentId);

      const res = await getTopics(searchQuery, studentId);

      console.log('▶️ Fetched topics:', res.topics);

      if (res.success) setTopics(res.topics);
      setIsLoading(false);
    }

    if (activeTab === "fields") fetchFields();
    else if (activeTab === "professors") fetchProfessors();
    else if (activeTab === "list") fetchTopics();
  }, [activeTab, searchQuery]);

  return (
    <main className="min-h-screen bg-[#0B0021] text-white">
      <div className={`mx-auto ${isDesktop ? "max-w-6xl px-8 py-6" : "max-w-md px-6 py-6"}`}>
        {/* Search bar */}
        <div className="flex items-center gap-3 mb-8">
          <div className={`relative flex-1 ${isDesktop ? "max-w-md mx-auto" : ""}`}>
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/70" />
            <input
              type="search"
              placeholder="Search"
              className="w-full bg-transparent border border-white/30 rounded-full text-white py-3 pl-12 pr-4 placeholder:text-white/70"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Link
            href="/student"
            className="p-2 rounded-full border border-white/30 hover:bg-white/10 transition-colors"
          >
            <User className="h-5 w-5 text-white" />
          </Link>
        </div>

        {/* Tabs */}
        <div className={`flex mb-8 relative border-b border-white/10 ${isDesktop ? "justify-center" : ""}`}>
          {["fields", "professors", "list"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 px-4 py-2 text-sm font-medium transition-all text-white tab-underline ${activeTab === tab ? "active" : ""} ${isDesktop ? "max-w-[200px]" : ""}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Fields */}
        {activeTab === "fields" && (
          isLoading ? <LoadingSpinner /> : (
            <div className={`grid gap-4 ${isDesktop ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-5xl mx-auto" : "grid-cols-2"}`}>
              {fields.length > 0 ? fields.map((field) => (
                <Link key={field.id} href={`/fields/${field.slug}`} className="block">
                  <div className="field-card">
                    <span className="text-xl font-medium">{field.name}</span>
                  </div>
                </Link>
              )) : (
                <p className="col-span-full text-center text-white/70 py-8">No fields found</p>
              )}
            </div>
          )
        )}

        {/* Professors */}
        {activeTab === "professors" && (
          isLoading ? <LoadingSpinner /> : (
            <div className={`space-y-4 ${isDesktop ? "max-w-4xl mx-auto" : ""}`}>
              {professors.length > 0 ? professors.map((professor) => (
                <Link key={professor.id} href={`/professor/${professor.id}`} className="block">
                  <div className="list-card flex items-center justify-between rounded-full">
                    <div>
                      <h3 className="font-bold text-lg card-title">{professor.name}</h3>
                      <p className="text-sm text-white/70 card-subtitle">{professor.department}</p>
                    </div>
                    <ChevronRight className="h-6 w-6 text-white/70 card-icon" />
                  </div>
                </Link>
              )) : (
                <p className="text-center text-white/70 py-8">No professors found</p>
              )}
            </div>
          )
        )}

        {/* Topics: recommended + normal */}
        {activeTab === "list" && (
          <div className={`space-y-4 ${isDesktop ? "max-w-4xl mx-auto" : ""}`}>
            {isLoading ? (
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
  );
}

function TopicCard({ topic, index, expandedTopic, toggleExpand }: { topic: Topic; index: number; expandedTopic: number | null; toggleExpand: (i: number) => void }) {
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
                <ChevronRight className="h-4 w-4 card-icon" />
              )}
            </button>
          </div>
          <p className="text-xs text-white/70 card-subtitle">{topic.field}</p>
          <p className="text-xs mt-1 text-white/70 card-subtitle">{topic.description}</p>

          {expandedTopic === index && topic.professor && (
            <div className="mt-4 space-y-2">
              <h4 className="text-sm font-medium card-title">Professor</h4>
              <div className="flex flex-col gap-1 text-sm">
                <p className="card-title">{topic.professor.name}</p>
                <p className="text-white/70 card-subtitle">{topic.professor.department}</p>
              </div>
            </div>
          )}

          {expandedTopic === index && topic.tags?.length > 0 && (
            <div className="mt-4">
              <div className="flex flex-wrap gap-2">
                {topic.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="text-xs px-3 py-1 rounded-full bg-white/10 card-subtitle">{tag}</span>
                ))}
              </div>
            </div>
          )}
        </div>

        {expandedTopic !== index && (
          <Link href={`/topic/${topic.id}`}>
            <ChevronRight className="h-5 w-5 text-white/70 card-icon" />
          </Link>
        )}
      </div>
    </div>
  );
}

function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center py-12">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-white border-t-transparent"></div>
    </div>
  );
}
