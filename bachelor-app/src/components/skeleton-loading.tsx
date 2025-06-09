"use client";

import { useMediaQuery } from "@/hooks/use-media-query";

export function FieldsSkeleton() {
  return (
    <div className="fields-grid-skeleton">
      {Array.from({ length: 12 }).map((_, i) => (
        <div key={i} className="skeleton field-card-skeleton"></div>
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
