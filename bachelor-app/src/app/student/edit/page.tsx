"use client";

import { useState } from "react";
import { ChevronLeft } from 'lucide-react';
import Link from "next/link";
import { updateStudentProfileExtended } from "../../backend/actions/student/update-student-profile";

export default function EditStudentProfile() {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([
    "Data science",
    "AI",
    "Frontend",
  ]);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    birthdate: "",
    gender: "",
    faculty_id: "",
    course_id: "",
    about_me: ""
  });

  // UI state
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const toggleInterest = (interest: string) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter((i) => i !== interest));
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");
    setIsError(false);

    try {
      // Create FormData object
      const formDataObj = new FormData();
      formDataObj.append('name', formData.name);
      formDataObj.append('surname', formData.surname);
      formDataObj.append('birthdate', formData.birthdate);
      formDataObj.append('gender', formData.gender);
      formDataObj.append('faculty_id', formData.faculty_id);
      formDataObj.append('course_id', formData.course_id);
      formDataObj.append('interests', JSON.stringify(selectedInterests));

      // Call the server action
      const result = await updateStudentProfileExtended(formDataObj);

      if (result.success) {
        setMessage(result.message);
        setIsError(false);
      } else {
        setMessage(result.message);
        setIsError(true);
      }
    } catch (error) {
      setMessage("An unexpected error occurred");
      setIsError(true);
      console.error("Error updating profile:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto rounded-lg overflow-hidden shadow-lg bg-[#0B0021] text-white">
      <div className="p-4">
        <div className="flex items-center mb-6">
          <Link href="/student">
            <button className="btn-hover p-1 rounded-full">
              <ChevronLeft className="h-5 w-5 mr-2" />
            </button>
          </Link>
          <h2 className="text-lg font-semibold">Edit profile</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <h3 className="text-sm font-medium mb-3">Personal Information</h3>
            <div className="space-y-3">
              <div className="relative">
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="First name"
                  required
                  className="w-full bg-transparent border border-white/30 rounded-md text-white p-2 placeholder:text-white/50"
                />
              </div>
              <div className="relative">
                <input
                  name="surname"
                  value={formData.surname}
                  onChange={handleInputChange}
                  placeholder="Last name"
                  required
                  className="w-full bg-transparent border border-white/30 rounded-md text-white p-2 placeholder:text-white/50"
                />
              </div>
              <div className="relative">
                <input
                  name="birthdate"
                  type="date"
                  value={formData.birthdate}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border border-white/30 rounded-md text-white p-2 placeholder:text-white/50"
                />
              </div>
              <div className="relative">
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border border-white/30 rounded-md text-white p-2"
                >
                  <option value="" className="bg-[#0B0021]">Select gender</option>
                  <option value="M" className="bg-[#0B0021]">Male</option>
                  <option value="F" className="bg-[#0B0021]">Female</option>
                  <option value="O" className="bg-[#0B0021]">Other</option>
                </select>
              </div>
              <div className="relative">
                <input
                  name="faculty_id"
                  value={formData.faculty_id}
                  onChange={handleInputChange}
                  placeholder="Faculty ID"
                  className="w-full bg-transparent border border-white/30 rounded-md text-white p-2 placeholder:text-white/50"
                />
              </div>
              <div className="relative">
                <input
                  name="course_id"
                  value={formData.course_id}
                  onChange={handleInputChange}
                  placeholder="Course ID"
                  className="w-full bg-transparent border border-white/30 rounded-md text-white p-2 placeholder:text-white/50"
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-3">Profile picture</h3>
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-[#e0e0ff] rounded-full"></div>
              <button 
                type="button"
                className="btn-hover py-1 px-4 rounded-full text-xs"
              >
                Upload new picture
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-3">About me</h3>
            <textarea
              name="about_me"
              value={formData.about_me}
              onChange={handleInputChange}
              className="w-full h-24 bg-transparent border border-white/30 rounded-md p-2 text-white text-sm"
              placeholder="Describe yourself, your interests, and how you prefer to work with professors."
            ></textarea>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-3">Choose interests</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Data science",
                "Frontend",
                "Marketing",
                "AI",
                "UX/UI Design",
                "Backend",
                "Mobile",
                "Blockchain",
              ].map((interest) => (
                <button
                  key={interest}
                  type="button"
                  onClick={() => toggleInterest(interest)}
                  className={`text-xs px-3 py-1.5 rounded-full transition-all duration-300 ${
                    selectedInterests.includes(interest)
                      ? "bg-gradient-to-r from-[#FFE15D] to-[#806b00] text-black"
                      : "hover-card bg-[#1a1a3a] text-white"
                  }`}
                >
                  {interest}
                </button>
              ))}
            </div>
          </div>

          {/* Message display */}
          {message && (
            <div className={`p-3 rounded-md text-sm ${
              isError 
                ? 'bg-red-500/20 text-red-200 border border-red-500/30' 
                : 'bg-green-500/20 text-green-200 border border-green-500/30'
            }`}>
              {message}
            </div>
          )}

          <div className="flex space-x-3">
            <button 
              type="submit"
              disabled={isLoading}
              className="btn-hover py-2 px-4 rounded-md flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Saving...' : 'Save changes'}
            </button>
            <Link href="/student" className="flex-1">
              <button 
                type="button"
                className="w-full py-2 px-4 border border-white/30 rounded-md text-white bg-transparent btn-hover"
              >
                Cancel
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}