"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getFieldsFromTags } from "../backend/actions/fields/get-fields";
import { FieldsSkeleton } from "@/components/skeleton-loading";
import { Pagination } from "@/components/pagination";
import { useMediaQuery } from "@/hooks/use-media-query";

type Field = {
  id: string;
  name: string;
  slug: string;
};

export default function FieldsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const isTablet = useMediaQuery("(min-width: 769px) and (max-width: 1024px)");

  // Get URL parameters
  const mode = searchParams.get("mode") || "single";
  const currentPage = Number.parseInt(searchParams.get("page") || "1");

  // State
  const [fields, setFields] = useState<Field[]>([]);
  const [selectedFields, setSelectedFields] = useState<Set<string>>(new Set());
  const [isLoading, setIsLoading] = useState(true);
  const [showModeDialog, setShowModeDialog] = useState(false);
  const [pendingFieldSelection, setPendingFieldSelection] = useState<
    string | null
  >(null);
  const [pagination, setPagination] = useState({
    totalPages: 0,
    totalCount: 0,
    currentPage: 1,
  });

  // Items per page based on screen size
  const getItemsPerPage = useCallback(() => {
    if (isDesktop) return 12;
    if (isTablet) return 9;
    return 6;
  }, [isDesktop, isTablet]);

  // Fetch fields data
  useEffect(() => {
    async function fetchFields() {
      setIsLoading(true);
      const itemsPerPage = getItemsPerPage();

      try {
        console.log("Fetching fields...");
        const res = await getFieldsFromTags(currentPage, itemsPerPage);
        console.log("Fields response:", res);
        if (res.success) {
          setFields(res.fields);
          setPagination({
            totalPages: res.totalPages,
            totalCount: res.totalCount,
            currentPage: res.currentPage,
          });
        }
      } catch (error) {
        console.error("Error fetching fields:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchFields();
  }, [currentPage, getItemsPerPage]);

  // Handle field selection
  const handleFieldClick = (field: Field) => {
    console.log("Field clicked:", field);
    console.log("Current mode:", mode);

    if (mode === "multiple") {
      // In multiple mode, toggle selection
      const newSelected = new Set(selectedFields);
      if (newSelected.has(field.id)) {
        newSelected.delete(field.id);
      } else {
        newSelected.add(field.id);
      }
      setSelectedFields(newSelected);
      console.log("Updated selected fields:", newSelected);
    } else {
      // In single mode, show dialog to ask user preference
      console.log("Setting pending field selection:", field.id);
      setPendingFieldSelection(field.id);
      console.log("Setting showModeDialog to true");
      setShowModeDialog(true);
    }
  };

  // Handle mode selection from dialog
  const handleModeSelection = (selectedMode: "single" | "multiple") => {
    console.log("Mode selected:", selectedMode);
    setShowModeDialog(false);

    if (selectedMode === "single" && pendingFieldSelection) {
      // Navigate directly to list page with single filter
      const selectedField = fields.find((f) => f.id === pendingFieldSelection);
      if (selectedField) {
        console.log("Navigating to list with filter:", selectedField.name);
        router.push(`/list?filter=${encodeURIComponent(selectedField.name)}`);
      }
    } else if (selectedMode === "multiple") {
      // Switch to multiple mode and select the pending field
      const newSelected = new Set<string>();
      if (pendingFieldSelection) {
        newSelected.add(pendingFieldSelection);
      }
      setSelectedFields(newSelected);
      router.push("/fields?mode=multiple");
    }

    setPendingFieldSelection(null);
  };

  // Handle "Choose Fields" button
  const handleChooseFields = () => {
    console.log("Choose fields button clicked");
    router.push("/fields?mode=multiple");
  };

  // Handle continue with selected fields
  const handleContinue = () => {
    if (selectedFields.size === 0) return;

    const selectedFieldNames = Array.from(selectedFields)
      .map((id) => fields.find((f) => f.id === id)?.name)
      .filter(Boolean)
      .map((name) => `filter=${encodeURIComponent(name!)}`)
      .join("&");

    router.push(`/list?${selectedFieldNames}`);
  };

  // Handle select all
  const handleSelectAll = () => {
    const allFieldIds = new Set(fields.map((f) => f.id));
    setSelectedFields(allFieldIds);
  };

  // Handle clear all
  const handleClearAll = () => {
    setSelectedFields(new Set());
  };

  // Handle page change
  const handlePageChange = (page: number) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set("page", page.toString());
    router.push(`/fields?${newSearchParams.toString()}`);
  };

  // Debug: Log state changes
  useEffect(() => {
    console.log("showModeDialog changed:", showModeDialog);
  }, [showModeDialog]);

  useEffect(() => {
    console.log("pendingFieldSelection changed:", pendingFieldSelection);
  }, [pendingFieldSelection]);

  return (
    <main className="min-h-screen bg-[#110833] text-white">
      <div className="app-container">
        {/* Header */}
        <div className="header-simple">
          <h1 className="text-2xl font-bold mb-6">Choose Your Fields</h1>

          {mode === "single" && (
            <Button
              onClick={handleChooseFields}
              className="mb-6 bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 px-4"
              size="lg"
            >
              Choose Multiple Fields
            </Button>
          )}

          {mode === "multiple" && (
            <div className="flex flex-wrap gap-3 mb-6">
              <Button
                onClick={handleSelectAll}
                variant="outline"
                size="sm"
                className="border-white/30 text-white hover:bg-white/10"
              >
                Select All
              </Button>
              <Button
                onClick={handleClearAll}
                variant="outline"
                size="sm"
                className="border-white/30 text-white hover:bg-white/10"
              >
                Clear All
              </Button>
              {selectedFields.size > 0 && (
                <Button
                  onClick={handleContinue}
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium"
                  size="sm"
                >
                  Continue ({selectedFields.size} selected)
                </Button>
              )}
            </div>
          )}
        </div>

        {/* Debug info */}
        <div className="mb-4 p-2 bg-gray-800 rounded text-xs">
          <p>Mode: {mode}</p>
          <p>Show Dialog: {showModeDialog.toString()}</p>
          <p>Pending Selection: {pendingFieldSelection}</p>
          <p>Fields Count: {fields.length}</p>
        </div>

        {/* Fields Grid */}
        <div className="content-container">
          {isLoading ? (
            <FieldsSkeleton />
          ) : (
            <div className="fields-grid">
              {fields.length > 0 ? (
                fields.map((field) => (
                  <div
                    key={field.id}
                    onClick={() => handleFieldClick(field)}
                    className={`field-card cursor-pointer relative ${
                      selectedFields.has(field.id) ? "selected" : ""
                    }`}
                    style={{ border: "2px solid red" }} // Temporary debug styling
                  >
                    {mode === "multiple" && (
                      <div className="absolute top-3 left-3 z-10">
                        <div
                          className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                            selectedFields.has(field.id)
                              ? "bg-white border-white"
                              : "border-white/50 bg-transparent"
                          }`}
                        >
                          {selectedFields.has(field.id) && (
                            <Check className="w-3 h-3 text-black" />
                          )}
                        </div>
                      </div>
                    )}
                    <span className="text-lg font-medium relative z-0">
                      {field.name}
                    </span>
                  </div>
                ))
              ) : (
                <p className="text-center text-white/70 py-8 col-span-full">
                  No fields found
                </p>
              )}
            </div>
          )}
        </div>

        {/* Pagination */}
        {!isLoading && pagination.totalPages > 1 && (
          <Pagination
            currentPage={pagination.currentPage}
            totalPages={pagination.totalPages}
            onPageChange={handlePageChange}
            isLoading={isLoading}
          />
        )}

        {/* Simple Modal instead of Dialog for testing */}
        {showModeDialog && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-[#0f0f2e] border border-white/20 text-white max-w-md w-full mx-4 rounded-lg p-6">
              <h2 className="text-xl font-bold text-center mb-6">
                How do you want to select fields?
              </h2>
              <div className="flex flex-col gap-3">
                <Button
                  onClick={() => handleModeSelection("single")}
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-3"
                >
                  Single Field
                </Button>
                <Button
                  onClick={() => handleModeSelection("multiple")}
                  variant="outline"
                  className="w-full border-white/30 text-white hover:bg-white/10 py-3"
                >
                  Multiple Fields
                </Button>
                <Button
                  onClick={() => setShowModeDialog(false)}
                  variant="outline"
                  className="w-full border-white/30 text-white hover:bg-white/10 py-1 text-sm"
                >
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Original Dialog (commented out for testing) */}
        {/* 
        <Dialog open={showModeDialog} onOpenChange={setShowModeDialog}>
          <DialogContent className="bg-[#0f0f2e] border-white/20 text-white max-w-md">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold text-center">How do you want to select fields?</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col gap-3 mt-6">
              <Button
                onClick={() => handleModeSelection("single")}
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-3"
              >
                Single Field
              </Button>
              <Button
                onClick={() => handleModeSelection("multiple")}
                variant="outline"
                className="w-full border-white/30 text-white hover:bg-white/10 py-3"
              >
                Multiple Fields
              </Button>
            </div>
          </DialogContent>
        </Dialog>
        */}
      </div>
    </main>
  );
}
