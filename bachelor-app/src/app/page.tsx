"use client";

import { useEffect, useState } from "react";
import { Search, ChevronRight } from "lucide-react";
import Link from "next/link";
import { getFieldsFromTags } from "../app/backend/actions/fields/get-fields";
import { getProfessors } from "../app/backend/actions/professors/get-professors";
import { getTopics } from "../app/backend/actions/topics/get-topics";

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

  const toggleExpand = (index: number) => {
    setExpandedTopic(expandedTopic === index ? null : index);
  };

  useEffect(() => {
    async function fetchFields() {
      const res = await getFieldsFromTags();
      if (res.success) setFields(res.fields);
    }

    async function fetchProfessors() {
      const res = await getProfessors();
      if (res.success) setProfessors(res.professors);
    }

    async function fetchTopics() {
      const res = await getTopics(searchQuery);
      if (res.success) setTopics(res.topics);
    }

    if (activeTab === "fields") fetchFields();
    else if (activeTab === "professors") fetchProfessors();
    else if (activeTab === "list") fetchTopics();
  }, [activeTab, searchQuery]);

  return (
    <main className="max-w-md mx-auto bg-[#0B0021] min-h-screen text-white">
      <div className="p-6">
        {/* Search bar */}
        <div className="relative w-full mb-6">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/70" />
          <input
            type="search"
            placeholder="Search"
            className="w-full bg-transparent border border-white/30 rounded-full text-white py-3 pl-12 pr-4 placeholder:text-white/70"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Tabs navigation */}
        <div className="flex mb-6 relative border-b border-white/10">
          {["fields", "professors", "list"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 px-4 py-2 text-sm font-medium transition-all text-white tab-underline ${
                activeTab === tab ? "active" : ""
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === "fields" && (
          <div className="grid grid-cols-2 gap-4">
            {fields.map((field) => (
              <Link key={field.id} href={`/fields/${field.slug}`} className="block">
                <div className="field-card">
                  <span className="text-xl font-medium">{field.name}</span>
                </div>
              </Link>
            ))}
          </div>
        )}

        {activeTab === "professors" && (
          <div className="space-y-4">
            {professors.map((professor) => (
              <Link
                key={professor.id}
                href={`/professor/${professor.id}`}
                className="block"
              >
                <div className="list-card flex items-center justify-between rounded-full">
                  <div>
                    <h3 className="font-bold text-lg card-title">
                      {professor.name}
                    </h3>
                    <p className="text-sm text-white/70 card-subtitle">
                      {professor.department}
                    </p>
                  </div>
                  <ChevronRight className="h-6 w-6 text-white/70 card-icon" />
                </div>
              </Link>
            ))}
          </div>
        )}

        {activeTab === "list" && (
          <div className="space-y-4">
            {topics.map((topic, index) => (
              <div key={topic.id} className="list-card rounded-3xl">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium card-title">{topic.title}</h3>
                      <button
                        onClick={() => toggleExpand(index)}
                        className="p-1 rounded-full"
                      >
                        {expandedTopic === index ? (
                          <ChevronRight className="h-4 w-4 card-icon rotate-90" />
                        ) : (
                          <ChevronRight className="h-4 w-4 card-icon" />
                        )}
                      </button>
                    </div>
                    <p className="text-xs text-white/70 card-subtitle">
                      {topic.field}
                    </p>
                    <p className="text-xs mt-1 text-white/70 card-subtitle">
                      {topic.description}
                    </p>

                    {expandedTopic === index && topic.professor && (
                      <div className="mt-4 space-y-2">
                        <h4 className="text-sm font-medium card-title">Professor</h4>
                        <div className="flex flex-col gap-1 text-sm">
                          <p className="card-title">{topic.professor.name}</p>
                          <p className="text-white/70 card-subtitle">
                            {topic.professor.department}
                          </p>
                        </div>
                      </div>
                    )}

                    {expandedTopic === index && topic.tags?.length > 0 && (
                      <div className="mt-4">
                        <div className="flex flex-wrap gap-2">
                          {topic.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="text-xs px-3 py-1 rounded-full bg-white/10 card-subtitle"
                            >
                              {tag}
                            </span>
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
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
