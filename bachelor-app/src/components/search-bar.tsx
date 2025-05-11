"use client";

import { Search } from "lucide-react";

interface SearchBarProps {
  onSearch?: (query: string) => void;
  placeholder?: string;
}

export function SearchBar({
  onSearch = () => {},
  placeholder = "Search",
}: SearchBarProps) {
  return (
    <div className="relative w-full mb-4">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/50" />
      <input
        type="search"
        placeholder={placeholder}
        className="w-full bg-transparent border border-white/30 rounded-full text-white py-2 pl-10 pr-4 placeholder:text-white/50"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}
