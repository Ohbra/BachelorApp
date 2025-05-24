"use client";

import { Search, Filter, User } from "lucide-react";
import Link from "next/link";

interface SearchBarProps {
  onSearch?: (query: string) => void;
  placeholder?: string;
  showFilter?: boolean;
  onFilter?: () => void;
  showUserIcon?: boolean;
}

export function SearchBar({
  onSearch = () => {},
  placeholder = "Search",
  showFilter = false,
  onFilter = () => {},
  showUserIcon = true,
}: SearchBarProps) {
  return (
    <div className="flex items-center gap-3 w-full mb-4">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/50" />
        <input
          type="search"
          placeholder={placeholder}
          className="w-full bg-transparent border border-white/30 rounded-full text-white py-2 pl-10 pr-4 placeholder:text-white/50"
          onChange={(e) => onSearch(e.target.value)}
        />
        {showFilter && (
          <button
            onClick={onFilter}
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
          >
            <Filter className="h-4 w-4 text-white/50" />
          </button>
        )}
      </div>

      {showUserIcon && (
        <Link
          href="/student"
          className="p-2 rounded-full border border-white/30 hover:bg-white/10 transition-colors"
        >
          <User className="h-4 w-4 text-white" />
        </Link>
      )}
    </div>
  );
}
