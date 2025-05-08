"use client";

import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { HoverButton } from "@/components/hover-button";

export default function CreateThesisProposal() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <div className="max-w-md mx-auto rounded-lg overflow-hidden shadow-lg bg-[#e6e6ff] text-black">
      <div className="p-4">
        <div className="flex items-center mb-6">
          <Link href="/">
            <div className="btn-hover p-1 rounded-full">
              <ChevronLeft className="h-5 w-5 mr-2" />
            </div>
          </Link>
          <h2 className="text-lg font-semibold">
            Create a new thesis proposal
          </h2>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium mb-2">Basic Information</h3>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Enter the thesis title"
                className="w-full p-2 border border-gray-300 rounded-md hover:border-[#FFE15D] transition-all duration-300"
              />
              <select className="w-full p-2 border border-gray-300 rounded-md hover:border-[#FFE15D] transition-all duration-300">
                <option value="">Faculty</option>
                <option value="computer-science">Computer Science</option>
                <option value="business">Business</option>
                <option value="design">Design</option>
              </select>
              <select className="w-full p-2 border border-gray-300 rounded-md hover:border-[#FFE15D] transition-all duration-300">
                <option value="">Study course</option>
                <option value="bachelor">Bachelor</option>
                <option value="master">Master</option>
              </select>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-2">Short Description</h3>
            <textarea
              className="w-full h-32 p-2 border border-gray-300 rounded-md hover:border-[#FFE15D] transition-all duration-300"
              placeholder="This is the topic description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
            ></textarea>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-2">Requirements</h3>
            <textarea
              className="w-full h-24 p-2 border border-gray-300 rounded-md hover:border-[#FFE15D] transition-all duration-300"
              placeholder="Short description of the needed requirement. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut."
            ></textarea>
            <button className="text-sm text-blue-600 mt-2 hover:text-[#806b00] transition-all duration-300">
              + Add another requirement
            </button>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-2">Choose tags</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Data science",
                "HTML",
                "Frontend",
                "Java Script",
                "CSS",
                "AI",
                "UX / UI Design",
                "Marketing",
                "Consulting",
              ].map((tag) => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`text-xs px-3 py-1.5 rounded-full transition-all duration-300 ${
                    selectedTags.includes(tag)
                      ? "bg-gradient-to-r from-[#FFE15D] to-[#806b00] text-black"
                      : "hover-card bg-[#d8d8ff] text-black"
                  }`}
                >
                  <span
                    className={selectedTags.includes(tag) ? "" : "card-content"}
                  >
                    {tag}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex space-x-3 pt-4">
            <HoverButton className="flex-1 bg-transparent border border-gray-300 rounded-md py-2 px-4">
              Submit proposal
            </HoverButton>
            <Link href="/" className="flex-1">
              <button className="w-full py-2 px-4 border border-gray-300 rounded-md text-black bg-transparent hover:bg-gray-100 transition-all duration-300">
                Cancel
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
