"use client";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

export default function ProfessorEditProfile() {
  return (
    <div className="max-w-md mx-auto rounded-lg overflow-hidden shadow-lg bg-[#0f0f2e] text-white">
      <div className="p-4">
        <div className="flex items-center mb-6">
          <Link href="/professor">
            <ChevronLeft className="h-5 w-5 mr-2" />
          </Link>
          <h2 className="text-lg font-semibold">Edit professor profile</h2>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-medium mb-3">Personal Information</h3>
            <div className="space-y-3">
              <div className="relative">
                <Input
                  placeholder="Full name"
                  className="bg-transparent border-white/30 rounded-md text-white placeholder:text-white/50"
                />
              </div>
              <div className="relative">
                <Input
                  placeholder="Email address"
                  className="bg-transparent border-white/30 rounded-md text-white placeholder:text-white/50"
                />
              </div>
              <div className="relative">
                <Input
                  placeholder="Phone number"
                  className="bg-transparent border-white/30 rounded-md text-white placeholder:text-white/50"
                />
              </div>
              <div className="relative">
                <Input
                  placeholder="Faculty"
                  className="bg-transparent border-white/30 rounded-md text-white placeholder:text-white/50"
                />
              </div>
              <div className="relative">
                <Input
                  placeholder="Field of expertise"
                  className="bg-transparent border-white/30 rounded-md text-white placeholder:text-white/50"
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-3">Profile picture</h3>
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-[#e0e0ff] rounded-full"></div>
              <Button
                variant="outline"
                size="sm"
                className="text-xs rounded-full bg-transparent text-white border-white hover:bg-white/10"
              >
                Upload new picture
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-3">Work preferences</h3>
            <textarea
              className="w-full h-24 bg-transparent border border-white/30 rounded-md p-2 text-white text-sm"
              placeholder="Describe how you prefer to work with students, meeting preferences, etc."
            ></textarea>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-3">Education & Experience</h3>
            <div className="space-y-3">
              <div className="bg-[#1a1a3a] p-3 rounded-md">
                <h4 className="text-sm font-medium">Study course</h4>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <Input
                    placeholder="University name"
                    className="bg-transparent border-white/30 rounded-md text-white placeholder:text-white/50"
                  />
                  <Input
                    placeholder="Year of graduation"
                    className="bg-transparent border-white/30 rounded-md text-white placeholder:text-white/50"
                  />
                </div>
              </div>

              <div className="bg-[#1a1a3a] p-3 rounded-md">
                <h4 className="text-sm font-medium">Job experience</h4>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <Input
                    placeholder="Company name"
                    className="bg-transparent border-white/30 rounded-md text-white placeholder:text-white/50"
                  />
                  <Input
                    placeholder="Years (e.g. 2016-2020)"
                    className="bg-transparent border-white/30 rounded-md text-white placeholder:text-white/50"
                  />
                </div>
                <Input
                  placeholder="Job title"
                  className="bg-transparent border-white/30 rounded-md text-white placeholder:text-white/50 mt-2"
                />
              </div>

              <Button
                variant="outline"
                size="sm"
                className="text-xs w-full rounded-md bg-[#1a1a3a] text-white border-none hover:bg-[#2a2a4a]"
              >
                + Add more experience
              </Button>
            </div>
          </div>

          <Tabs defaultValue="current">
            <TabsList className="grid grid-cols-2 mb-4 bg-[#1a1a3a] border-none">
              <TabsTrigger
                value="current"
                className="text-xs data-[state=active]:bg-yellow-400 data-[state=active]:text-black"
              >
                Current topics
              </TabsTrigger>
              <TabsTrigger
                value="new"
                className="text-xs data-[state=active]:bg-yellow-400 data-[state=active]:text-black"
              >
                Add new topic
              </TabsTrigger>
            </TabsList>

            <TabsContent value="current" className="mt-0">
              <div className="space-y-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-[#1a1a3a] rounded-md p-3">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-medium">Title topic</h4>
                        <p className="text-white/70 text-xs">field</p>
                      </div>
                      <Button variant="ghost" size="sm" className="text-xs">
                        Edit
                      </Button>
                    </div>
                    <p className="text-xs mt-1 text-white/70">
                      This is a short description of the topic...
                    </p>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="new" className="mt-0">
              <div className="space-y-3">
                <div className="relative">
                  <Input
                    placeholder="Topic title"
                    className="bg-transparent border-white/30 rounded-md text-white placeholder:text-white/50"
                  />
                </div>
                <div className="relative">
                  <Input
                    placeholder="Field"
                    className="bg-transparent border-white/30 rounded-md text-white placeholder:text-white/50"
                  />
                </div>
                <textarea
                  className="w-full h-24 bg-transparent border border-white/30 rounded-md p-2 text-white text-sm"
                  placeholder="Topic description"
                ></textarea>

                <div>
                  <h4 className="text-sm font-medium mb-2">Requirements</h4>
                  <textarea
                    className="w-full h-24 bg-transparent border border-white/30 rounded-md p-2 text-white text-sm"
                    placeholder="List the requirements for this topic"
                  ></textarea>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-2">Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-[#1a1a3a] px-3 py-1.5 rounded-full">
                      Data science
                    </span>
                    <span className="text-xs bg-[#1a1a3a] px-3 py-1.5 rounded-full">
                      Frontend
                    </span>
                    <span className="text-xs bg-yellow-400 text-black px-3 py-1.5 rounded-full">
                      AI
                    </span>
                    <span className="text-xs bg-[#1a1a3a] px-3 py-1.5 rounded-full">
                      + Add tag
                    </span>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="flex space-x-3">
            <Button className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black">
              Save changes
            </Button>
            <Link href="/professor" className="flex-1">
              <Button
                variant="outline"
                className="w-full bg-transparent text-white border-white hover:bg-white/10"
              >
                Cancel
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
