"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Search, ChevronRight, User } from "lucide-react";
import Link from "next/link";
import { getFieldsFromTags } from "../app/backend/actions/fields/get-fields";
import { getProfessors } from "../app/backend/actions/professors/get-professors";
import { getTopics } from "../app/backend/actions/topics/get-topics";
import { useMediaQuery } from "@/hooks/use-media-query";
import { createClient } from "@supabase/supabase-js";

// Types
type Field = { id: string; name: string; slug: string };
type Professor = { id: string; name: string; department: string };
type Topic = {
  id: string;
  title: string;
  field: string;
  description: string;
  professor: { name: string; department: string };
  tags: string[];
};

// Components
function LoadingSpinner() {
  return <div className="text-center py-8 text-white/70">Loading...</div>;
}

function TopicCard({
  topic,
  index,
  expandedTopic,
  toggleExpand,
}: {
  topic: Topic;
  index: number;
  expandedTopic: number | null;
  toggleExpand: (i: number) => void;
}) {
  return (
    <div className="list-card rounded-3xl p-4 border border-white/20">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium text-white text-lg">{topic.title}</h3>
          <p className="text-sm text-white/70">{topic.field}</p>
          <p className="text-xs text-white/50">{topic.professor.name} ({topic.professor.department})</p>
        </div>
        <button onClick={() => toggleExpand(index)} className="p-1 rounded-full hover:bg-white/10 transition-colors">
          <ChevronRight className={`h-4 w-4 transition-transform ${expandedTopic === index ? "rotate-90" : ""}`} />
        </button>
      </div>
      {expandedTopic === index && (
        <div className="mt-2 text-sm text-white/70">
          <p>{topic.description}</p>
          {topic.tags.length > 0 && (
            <div className="flex flex-wrap mt-1 gap-1">
              {topic.tags.map((tag) => (
                <span key={tag} className="bg-white/10 text-white/80 px-2 py-1 rounded text-xs">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function Home() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const [activeTab, setActiveTab] = useState("fields");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedTopic, setExpandedTopic] = useState<number | null>(null);
  const [fields, setFields] = useState<Field[]>([]);
  const [professors, setProfessors] = useState<Professor[]>([]);
  const [topics, setTopics] = useState<Topic[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasLoadedData, setHasLoadedData] = useState({
    fields: false,
    professors: false,
    topics: false,
  });

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const toggleExpand = (index: number) => {
    setExpandedTopic(expandedTopic === index ? null : index);
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    const params = new URLSearchParams(searchParams);
    params.set("tab", tab);
    router.push(`/?${params.toString()}`);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    const tabFromUrl = searchParams.get("tab");
    if (tabFromUrl && ["fields", "professors", "topics"].includes(tabFromUrl)) {
      setActiveTab(tabFromUrl);
    }
  }, [searchParams]);

  useEffect(() => {
    const fetchFields = async () => {
      if (hasLoadedData.fields) return;
      setIsLoading(true);
      try {
        const res = await getFieldsFromTags();
        if (res.success) {
          setFields(res.fields);
          setHasLoadedData((prev) => ({ ...prev, fields: true }));
        }
      } catch (error) {
        console.error("Error fetching fields:", error);
      } finally {
        setIsLoading(false);
      }
    };

    const fetchProfessors = async () => {
      if (hasLoadedData.professors) return;
      setIsLoading(true);
      try {
        const res = await getProfessors();
        if (res.success) {
          setProfessors(res.professors);
          setHasLoadedData((prev) => ({ ...prev, professors: true }));
        }
      } catch (error) {
        console.error("Error fetching professors:", error);
      } finally {
        setIsLoading(false);
      }
    };
    const fetchTopics = async () => {
      setIsLoading(true);
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();
        const studentIdStr = user?.id; // string | undefined

        // Convert string to number or undefined if invalid
        const studentId = studentIdStr ? Number(studentIdStr) : undefined;

        const res = await getTopics(searchQuery, studentId);
        if (res.success) {
          setTopics(res.topics);
          setHasLoadedData((prev) => ({ ...prev, topics: true }));
        }
      } catch (error) {
        console.error("Error fetching topics:", error);
      } finally {
        setIsLoading(false);
      }
    };


    if (activeTab === "fields") fetchFields();
    else if (activeTab === "professors") fetchProfessors();
    else if (activeTab === "topics") fetchTopics();
  }, [activeTab, searchQuery, hasLoadedData, supabase.auth]);

  const shouldShowLoading =
    isLoading || !hasLoadedData[activeTab as keyof typeof hasLoadedData];

  return (
    <main className="min-h-screen bg-[#110833] text-white">
      <div className="app-container p-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center border border-white/20 rounded-full px-3 py-1 gap-2 bg-white/5">
            <Search className="h-4 w-4 text-white/60" />
            <input
              type="search"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="bg-transparent outline-none text-sm text-white placeholder:text-white/50"
            />
          </div>
          <Link href="/student" className="p-2 rounded-full border border-white/30 hover:bg-white/10 transition-colors">
            <User className="h-5 w-5 text-white" />
          </Link>
        </div>

        {/* Tabs */}
        <div className={`flex border-b border-white/10 mb-4 ${isDesktop ? "justify-center" : ""}`}>
          {["fields", "professors", "topics"].map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`flex-1 px-4 py-2 text-sm font-medium transition-all tab-underline ${activeTab === tab ? "border-b-2 border-white" : ""
                } ${isDesktop ? "max-w-[200px]" : ""}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Fields */}
        {activeTab === "fields" &&
          (shouldShowLoading ? (
            <LoadingSpinner />
          ) : fields.length > 0 ? (
            <div className={`grid gap-4 ${isDesktop ? "grid-cols-3 max-w-5xl mx-auto" : "grid-cols-2"}`}>
              {fields.map((field) => (
                <Link key={field.id} href={`/fields/${field.slug}`} className="block">
                  <div className="p-4 border border-white/20 rounded-xl hover:bg-white/10 transition-colors">
                    <span className="text-lg font-medium">{field.name}</span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-center text-white/70 py-8">No fields found</p>
          ))}

        {/* Professors */}
        {activeTab === "professors" &&
          (shouldShowLoading ? (
            <LoadingSpinner />
          ) : professors.length > 0 ? (
            <div className={`space-y-4 ${isDesktop ? "max-w-4xl mx-auto" : ""}`}>
              {professors.map((professor) => (
                <Link key={professor.id} href={`/professor/${professor.id}`} className="block">
                  <div className="list-card flex items-center justify-between border border-white/20 rounded-full p-3">
                    <div>
                      <h3 className="font-bold text-lg">{professor.name}</h3>
                      <p className="text-sm text-white/70">{professor.department}</p>
                    </div>
                    <ChevronRight className="h-6 w-6 text-white/70" />
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-center text-white/70 py-8">No professors found</p>
          ))}

        {/* Topics */}
        {activeTab === "topics" && (
          <div className={`space-y-4 ${isDesktop ? "max-w-4xl mx-auto" : ""}`}>
            {shouldShowLoading ? (
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
