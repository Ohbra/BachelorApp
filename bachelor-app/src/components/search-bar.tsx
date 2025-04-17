"use client";

import { Filter, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  showFilter?: boolean;
  onSearch?: (query: string) => void;
  onFilter?: () => void;
  placeholder?: string;
}

export function SearchBar({
  showFilter = false,
  onSearch = () => {},
  onFilter = () => {},
  placeholder = "Search",
}: SearchBarProps) {
  return (
    <div className="flex w-full items-center gap-2">
      <div className="relative flex-1">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder={placeholder}
          className="pl-8"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
      {showFilter && (
        <Button variant="outline" size="icon" onClick={onFilter}>
          <Filter className="h-4 w-4" />
          <span className="sr-only">Filter</span>
        </Button>
      )}
    </div>
  );
}
