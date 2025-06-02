"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Search, ChevronRight, User } from "lucide-react";
import Link from "next/link";
import { getFieldsFromTags } from "../app/backend/actions/fields/get-fields";
import { getProfessors } from "../app/backend/actions/professors/get-professors";
import { getTopics } from "../app/backend/actions/topics/get-topics";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Pagination } from "@/components/pagination";
import {
  FieldsSkeleton,
  ProfessorsSkeleton,
  TopicsSkeleton,
} from "@/components/skeleton-loading";

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
  const router = useRouter();
  const searchParams = useSearchParams();
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(min-width: 769px) and (max-width: 1024px)");

  const tabsRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);

  // Get URL parameters
  const activeTab = searchParams.get("tab") || "fields";
  const currentPage = Number.parseInt(searchParams.get("page") || "1");
  const searchQuery = searchParams.get("search") || "";

  // State
  const [expandedTopic, setExpandedTopic] = useState<number | null>(null);
  const [fields, setFields] = useState<Field[]>([]);
  const [professors, setProfessors] = useState<Professor[]>([]);
  const [topics, setTopics] = useState<Topic[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pagination, setPagination] = useState({
    totalPages: 0,
    totalCount: 0,
    currentPage: 1,
  });

  // Items per page based on screen size
  const getItemsPerPage = useCallback(() => {
    if (isDesktop) {
      return activeTab === "fields" ? 12 : 15; // More items on desktop
    } else if (isTablet) {
      return activeTab === "fields" ? 9 : 10; // Medium number for tablets
    }
    return activeTab === "fields" ? 6 : 8; // Fewer items on mobile
  }, [isDesktop, isTablet, activeTab]);

  // Update tab indicator position
  const updateTabIndicator = useCallback(() => {
    if (!tabsRef.current || !indicatorRef.current) return;

    const tabs = ["fields", "professors", "list"];
    const activeIndex = tabs.indexOf(activeTab);
    const tabButtons = tabsRef.current.querySelectorAll(".tab-button");

    if (tabButtons[activeIndex]) {
      const activeButton = tabButtons[activeIndex] as HTMLElement;

      // Get the button's position relative to its parent
      const buttonRect = activeButton.getBoundingClientRect();
      const containerRect = tabsRef.current.getBoundingClientRect();

      // Calculate the relative position
      const relativeLeft = buttonRect.left - containerRect.left;
      const buttonWidth = buttonRect.width;
      const buttonCenter = relativeLeft + buttonWidth / 2;

      // Set indicator width based on screen size
      const indicatorWidth = isMobile ? 60 : 84;

      // Calculate the final position (center the indicator under the button)
      const indicatorLeft = buttonCenter - indicatorWidth / 2;

      // Apply the position
      indicatorRef.current.style.width = `${indicatorWidth}px`;
      indicatorRef.current.style.left = `${indicatorLeft}px`;
      indicatorRef.current.style.transform = "none"; // Reset transform to use left positioning
    }
  }, [activeTab, isMobile]);

  // Update indicator when tab changes or component mounts
  useEffect(() => {
    // Small delay to ensure DOM is ready and layout is complete
    const timer = setTimeout(() => {
      updateTabIndicator();
    }, 100);
    return () => clearTimeout(timer);
  }, [activeTab, updateTabIndicator]);

  // Update indicator on window resize with debounce
  useEffect(() => {
    let resizeTimer: NodeJS.Timeout;

    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        updateTabIndicator();
      }, 100);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
    };
  }, [updateTabIndicator]);

  // Update URL parameters
  const updateURL = useCallback(
    (params: { tab?: string; page?: number; search?: string }) => {
      const newSearchParams = new URLSearchParams(searchParams.toString());

      if (params.tab !== undefined) newSearchParams.set("tab", params.tab);
      if (params.page !== undefined)
        newSearchParams.set("page", params.page.toString());
      if (params.search !== undefined) {
        if (params.search) {
          newSearchParams.set("search", params.search);
        } else {
          newSearchParams.delete("search");
        }
      }

      router.push(`?${newSearchParams.toString()}`, { scroll: false });
    },
    [router, searchParams]
  );

  // Handle tab change
  const handleTabChange = (tab: string) => {
    updateURL({ tab, page: 1 }); // Reset to page 1 when changing tabs
  };

  // Handle search
  const handleSearch = (query: string) => {
    updateURL({ search: query, page: 1 }); // Reset to page 1 when searching
  };

  // Handle page change
  const handlePageChange = (page: number) => {
    updateURL({ page });
  };

  const toggleExpand = (index: number) => {
    setExpandedTopic(expandedTopic === index ? null : index);
  };

  // Fetch data based on active tab
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const itemsPerPage = getItemsPerPage();

      try {
        if (activeTab === "fields") {
          const res = await getFieldsFromTags(
            currentPage,
            itemsPerPage,
            searchQuery
          );
          if (res.success) {
            setFields(res.fields);
            setPagination({
              totalPages: res.totalPages,
              totalCount: res.totalCount,
              currentPage: res.currentPage,
            });
          }
        } else if (activeTab === "professors") {
          const res = await getProfessors(
            currentPage,
            itemsPerPage,
            searchQuery
          );
          if (res.success) {
            setProfessors(res.professors);
            setPagination({
              totalPages: res.totalPages,
              totalCount: res.totalCount,
              currentPage: res.currentPage,
            });
          }
        } else if (activeTab === "list") {
          // TODO: Get actual student ID from authentication/session
          const studentId = undefined; // Replace with actual student ID when available
          const res = await getTopics(
            searchQuery,
            currentPage,
            itemsPerPage,
            studentId
          );
          if (res.success) {
            setTopics(res.topics);
            setPagination({
              totalPages: res.totalPages,
              totalCount: res.totalCount,
              currentPage: res.currentPage,
            });
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [activeTab, currentPage, searchQuery, getItemsPerPage]);

  return (
    <main className="min-h-screen bg-[#110833] text-white">
      <div className="app-container">
        {/* Header with search and user icon */}
        <div className="header">
          <div className="search-container">
            <Search className="search-icon" />
            <input
              type="search"
              placeholder="Search"
              value={searchQuery}
              className="search-input"
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
          <Link href="/student" className="user-button">
            <User className="h-5 w-5" />
          </Link>
        </div>

        {/* Tabs navigation with animated indicator */}
        <div className="tabs-container">
          <div ref={tabsRef} className="tabs-nav">
            {["fields", "professors", "list"].map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`tab-button ${activeTab === tab ? "active" : ""}`}
              >
                {tab}
              </button>
            ))}
            <div ref={indicatorRef} className="tab-indicator" />
          </div>
        </div>

        {/* Content with loading states */}
        <div className="content-container">
          {/* Fields tab */}
          {activeTab === "fields" && (
            <>
              {isLoading ? (
                <FieldsSkeleton />
              ) : (
                <div className="fields-grid">
                  {fields.length > 0 ? (
                    fields.map((field) => (
                      <Link
                        key={field.id}
                        href={`/fields/${field.slug}`}
                        className="block"
                      >
                        <div className="field-card">
                          <span className="text-lg font-medium">
                            {field.name}
                          </span>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <p className="text-center text-white/70 py-8">
                      No fields found
                    </p>
                  )}
                </div>
              )}
            </>
          )}

          {/* Professors tab */}
          {activeTab === "professors" && (
            <>
              {isLoading ? (
                <ProfessorsSkeleton />
              ) : (
                <div className="professors-list">
                  {professors.length > 0 ? (
                    professors.map((professor) => (
                      <Link
                        key={professor.id}
                        href={`/professor/${professor.id}`}
                        className="block"
                      >
                        <div className="professor-card">
                          <div>
                            <h3 className="font-bold text-lg card-title">
                              {professor.name}
                            </h3>
                            <p className="text-sm card-subtitle">
                              {professor.department}
                            </p>
                          </div>
                          <ChevronRight className="h-6 w-6 card-icon" />
                        </div>
                      </Link>
                    ))
                  ) : (
                    <p className="text-center text-white/70 py-8">
                      No professors found
                    </p>
                  )}
                </div>
              )}
            </>
          )}

          {/* Topics tab */}
          {activeTab === "list" && (
            <>
              {isLoading ? (
                <TopicsSkeleton />
              ) : (
                <div className="topics-list">
                  {topics.length > 0 ? (
                    topics.map((topic, index) => (
                      <div key={topic.id} className="list-card">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <h3 className="font-medium card-title">
                                {topic.title}
                              </h3>
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
                            <p className="text-xs card-subtitle">
                              {topic.field}
                            </p>
                            <p className="text-xs mt-1 card-subtitle">
                              {topic.description}
                            </p>

                            {expandedTopic === index && topic.professor && (
                              <div className="mt-4 space-y-2">
                                <h4 className="text-sm font-medium card-title">
                                  Professor
                                </h4>
                                <div className="flex flex-col gap-1 text-sm">
                                  <p className="card-title">
                                    {topic.professor.name}
                                  </p>
                                  <p className="card-subtitle">
                                    {topic.professor.department}
                                  </p>
                                </div>
                              </div>
                            )}

                            {expandedTopic === index &&
                              topic.tags?.length > 0 && (
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
                              <ChevronRight className="h-5 w-5 card-icon" />
                            </Link>
                          )}
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-center text-white/70 py-8">
                      No topics found
                    </p>
                  )}
                </div>
              )}
            </>
          )}
        </div>

        {/* Pagination */}
        {!isLoading && pagination.totalPages > 1 && (
          <Pagination
            currentPage={pagination.currentPage}
            totalPages={pagination.totalPages}
            onPageChange={handlePageChange}
            isLoading={isLoading}
          />
        )}
      </div>
    </main>
  );
}
