"use client";

import { useMediaQuery } from "@/hooks/use-media-query";

export function FieldsSkeleton() {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const isTablet = useMediaQuery("(min-width: 769px) and (max-width: 1024px)");
  const isMobile = useMediaQuery("(max-width: 768px)");

  // Determine number of skeletons based on screen size
  const skeletonCount = isDesktop ? 12 : isTablet ? 9 : 6;

  return (
    <div
      className={`${
        isMobile ? "grid grid-cols-2 gap-4 justify-center px-9" : "fields-grid"
      }`}
    >
      {Array.from({ length: skeletonCount }).map((_, i) => (
        <div
          key={i}
          className={`skeleton ${
            isMobile
              ? "w-[174px] h-[174px] rounded-[15px] mx-auto"
              : "field-card"
          }`}
          style={{ opacity: 0.5 }}
        ></div>
      ))}
    </div>
  );
}

export function ProfessorsSkeleton() {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const skeletonCount = isDesktop ? 10 : 6;

  return (
    <div className="professors-list">
      {Array.from({ length: skeletonCount }).map((_, i) => (
        <div
          key={i}
          className="skeleton professor-card"
          style={{ opacity: 0.5 }}
        ></div>
      ))}
    </div>
  );
}

export function TopicsSkeleton() {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const skeletonCount = isDesktop ? 8 : 5;

  return (
    <div className="topics-list">
      {Array.from({ length: skeletonCount }).map((_, i) => (
        <div
          key={i}
          className="skeleton list-card"
          style={{ opacity: 0.5 }}
        ></div>
      ))}
    </div>
  );
}
