"use client";

import type React from "react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface NavigationTabsProps {
  defaultValue?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export function NavigationTabs({
  defaultValue = "fields",
  onChange = () => {},
  className,
}: NavigationTabsProps) {
  const [activeTab, setActiveTab] = useState(defaultValue);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    onChange(value);
  };

  return (
    <div className={cn("flex border-b border-white/20", className)}>
      {["fields", "professors", "list"].map((tab) => (
        <button
          key={tab}
          onClick={() => handleTabChange(tab)}
          className={cn(
            "px-4 py-2 text-sm font-medium transition-all border-b-2 text-white/70",
            activeTab === tab
              ? "border-white text-white"
              : "border-transparent hover:text-white"
          )}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </button>
      ))}
    </div>
  );
}

export function TabsContent({
  value,
  activeValue,
  children,
  className,
}: {
  value: string;
  activeValue: string;
  children: React.ReactNode;
  className?: string;
}) {
  if (value !== activeValue) return null;

  return <div className={cn("mt-4", className)}>{children}</div>;
}
