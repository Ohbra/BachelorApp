"use client";

import type React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { updateProfessorProfile } from "@/app/backend/actions/professors/update-profile";
import type { ProfessorDetails } from "@/app/backend/actions/professors/get-professor-detail";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

interface EditProfileDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  details: ProfessorDetails;
}

export function EditProfileDialog({
  open,
  onOpenChange,
  details,
}: EditProfileDialogProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [title, setTitle] = useState(
    details.profile === "Not specified" ? "" : details.profile || ""
  );
  const [researchPriorities, setResearchPriorities] = useState(
    details.researchPriorities === "Not specified"
      ? ""
      : details.researchPriorities || ""
  );
  const [subjectArea, setSubjectArea] = useState(
    details.subjectArea === "Not specified" ? "" : details.subjectArea || ""
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      const result = await updateProfessorProfile(details.id, {
        title: title || undefined,
        researchPriorities: researchPriorities || undefined,
        subjectArea: subjectArea || undefined,
      });

      if (result.success) {
        toast({
          title: "Profile updated",
          description: "Your profile has been updated successfully",
        });
        onOpenChange(false);
        router.refresh();
      } else {
        toast({
          title: "Error",
          description: result.message || "Failed to update profile",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#0f0f2e] text-white border-white/20 max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">Edit Profile</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="py-4">
          <div className="space-y-6">
            <div className="bg-[#1a1a3a] p-4 rounded-lg">
              <h4 className="text-sm font-medium text-white/90 mb-2">
                Basic Information
              </h4>
              <div className="text-sm text-white/70 space-y-1">
                <p>
                  <strong>Name:</strong> {details.name}
                </p>
                <p>
                  <strong>Department:</strong> {details.department}
                </p>
              </div>
              <p className="text-xs text-white/50 mt-2">
                Contact your system administrator to update basic information
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="title">Title/Position</Label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="bg-transparent border-white/30 text-white"
                  placeholder="e.g. Professor, Dr., PhD, Associate Professor"
                />
                <p className="text-xs text-white/70 mt-1">
                  Your academic title or position
                </p>
              </div>

              <div>
                <Label htmlFor="researchPriorities">Research Priorities</Label>
                <Textarea
                  id="researchPriorities"
                  value={researchPriorities}
                  onChange={(e) => setResearchPriorities(e.target.value)}
                  className="bg-transparent border-white/30 text-white min-h-[120px]"
                  placeholder="Describe your current research priorities and interests..."
                />
                <p className="text-xs text-white/70 mt-1">
                  This will help students understand your research focus
                </p>
              </div>

              <div>
                <Label htmlFor="subjectArea">Subject Area</Label>
                <Textarea
                  id="subjectArea"
                  value={subjectArea}
                  onChange={(e) => setSubjectArea(e.target.value)}
                  className="bg-transparent border-white/30 text-white min-h-[120px]"
                  placeholder="Describe your subject area and expertise..."
                />
                <p className="text-xs text-white/70 mt-1">
                  Your main areas of expertise and specialization
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-6">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="border-white/30 text-white hover:bg-white/10"
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 text-black"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Saving...
                </>
              ) : (
                "Save Changes"
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
