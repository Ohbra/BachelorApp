"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useMediaQuery } from "@/hooks/use-media-query";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  isLoading?: boolean;
  className?: string;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  isLoading = false,
}: PaginationProps) {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  if (totalPages <= 1) return null;

  const canGoPrevious = currentPage > 1;
  const canGoNext = currentPage < totalPages;

  // Desktop pagination with numbered pages
  if (isDesktop) {
    const getVisiblePages = () => {
      const pages = [];
      const maxVisiblePages = 5; // Show more pages on desktop

      if (totalPages <= maxVisiblePages) {
        // Show all pages if total is less than or equal to max
        for (let i = 1; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        // Show pages around current page
        let start = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
        const end = Math.min(totalPages, start + maxVisiblePages - 1);

        // Adjust start if we're near the end
        if (end - start < maxVisiblePages - 1) {
          start = Math.max(1, end - maxVisiblePages + 1);
        }

        for (let i = start; i <= end; i++) {
          pages.push(i);
        }
      }

      return pages;
    };

    const visiblePages = getVisiblePages();

    return (
      <div className="pagination">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={!canGoPrevious || isLoading}
          className="btn-hover p-2 rounded-full"
          aria-label="Previous page"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        {visiblePages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            disabled={isLoading}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
              page === currentPage
                ? "bg-white text-[#110833] font-bold"
                : "text-white hover:bg-white/10"
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={!canGoNext || isLoading}
          className="btn-hover p-2 rounded-full"
          aria-label="Next page"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    );
  }

  // Mobile pagination with Previous/Next only
  return (
    <div className="pagination">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={!canGoPrevious || isLoading}
        className="btn-hover px-3 py-1 rounded-full flex items-center"
        aria-label="Previous page"
      >
        <ChevronLeft className="h-4 w-4 mr-1" />
        <span className="text-sm">Prev</span>
      </button>

      <span className="text-sm text-white/70 mx-2">
        {currentPage} / {totalPages}
      </span>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={!canGoNext || isLoading}
        className="btn-hover px-3 py-1 rounded-full flex items-center"
        aria-label="Next page"
      >
        <span className="text-sm">Next</span>
        <ChevronRight className="h-4 w-4 ml-1" />
      </button>
    </div>
  );
}
