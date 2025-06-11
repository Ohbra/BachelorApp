"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const PREDEFINED_TAGS = [
  "Data science",
  "HTML",
  "Frontend",
  "AI",
  "JavaScript",
  "CSS",
  "SEO",
  "UX / UI Design",
  "Marketing",
  "Controlling",
];

export default function CreateTopicPage({
  params,
}: {
  params: { id: string };
}) {
  const router = useRouter();
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [requirements, setRequirements] = useState<string[]>([
    "Short description of the needed requirement. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy eirmod tempor invidunt",
    "Short description of the needed requirement. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy eirmod tempor invidunt",
  ]);

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const addRequirement = () => {
    setRequirements([...requirements, ""]);
  };

  const updateRequirement = (index: number, value: string) => {
    const newRequirements = [...requirements];
    newRequirements[index] = value;
    setRequirements(newRequirements);
  };

  const handleBack = () => {
    router.push(`/professor/${params.id}`);
  };

  const handleSubmit = () => {
    // Handle form submission here
    console.log("Form submitted");
    router.push(`/professor/${params.id}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e6e6ff] to-[#d4d4ff] px-4 py-6">
      <div className="container mx-auto max-w-md md:max-w-2xl">
        {/* Header */}
        <div className="flex items-center mb-6">
          <button
            onClick={handleBack}
            className="mr-3 p-1 hover:bg-black/10 rounded"
          >
            <ChevronLeft className="h-5 w-5 text-black" />
          </button>
          <h1 className="text-lg md:text-xl font-semibold text-black">
            Create a new thesis proposal
          </h1>
        </div>

        <div className="space-y-6">
          {/* Basic Information */}
          <div>
            <h2 className="text-sm font-medium text-black mb-3">
              Basic information
            </h2>
            <div className="space-y-3">
              <Input
                placeholder="Enter the thesis title..."
                className="bg-white/80 border-black/20 rounded-full px-4 py-3 text-black placeholder:text-black/60 focus:border-black/40"
              />
              <Input
                placeholder="Faculty..."
                className="bg-white/80 border-black/20 rounded-full px-4 py-3 text-black placeholder:text-black/60 focus:border-black/40"
              />
              <Input
                placeholder="Study course..."
                className="bg-white/80 border-black/20 rounded-full px-4 py-3 text-black placeholder:text-black/60 focus:border-black/40"
              />
            </div>
          </div>

          {/* Short Description */}
          <div>
            <h2 className="text-sm font-medium text-black mb-3">
              Short description
            </h2>
            <Textarea
              placeholder="This is the topic description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonummy eirmod tempor invidunt ut labore et dolore magna aliquam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
              className="bg-white/80 border-black/20 rounded-2xl px-4 py-3 text-black placeholder:text-black/60 focus:border-black/40 min-h-[120px] md:min-h-[150px] resize-none"
            />
          </div>

          {/* Requirements */}
          <div>
            <h2 className="text-sm font-medium text-black mb-3">
              Requirements
            </h2>
            <div className="space-y-3">
              {requirements.map((requirement, index) => (
                <Textarea
                  key={index}
                  value={requirement}
                  onChange={(e) => updateRequirement(index, e.target.value)}
                  placeholder="Short description of the needed requirement..."
                  className="bg-white/80 border-black/20 rounded-2xl px-4 py-3 text-black placeholder:text-black/60 focus:border-black/40 min-h-[80px] resize-none"
                />
              ))}
              <button
                onClick={addRequirement}
                className="text-black/70 text-sm hover:text-black transition-colors"
              >
                Add another requirement...
              </button>
            </div>
          </div>

          {/* Choose Tags */}
          <div>
            <h2 className="text-sm font-medium text-black mb-3">Choose tags</h2>
            <div className="flex flex-wrap gap-2">
              {PREDEFINED_TAGS.map((tag) => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedTags.includes(tag)
                      ? "bg-black text-white"
                      : "bg-white/80 text-black border border-black/20 hover:bg-white"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex gap-3 pt-4">
            <Button
              onClick={handleSubmit}
              className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-3 rounded-full"
            >
              Submit proposal
            </Button>
            <Button
              onClick={handleBack}
              variant="outline"
              className="flex-1 border-black/20 text-black hover:bg-black/5 py-3 rounded-full"
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
