import { v4 as uuidv4 } from "../backend/node_modules/uuid"

// This file contains mock data that can be used for testing
// when you don't want to create actual database records

export const mockFaculty = {
  faculty_name: "Mock Faculty",
  faculty_id: `MOCK-${uuidv4().substring(0, 8)}`,
}

export const mockUser = {
  id: uuidv4(),
  // Add other required user fields here
}

export const mockUserParent = {
  name: "Mock User",
  surname: "Mock Surname",
  role: "student",
  gender: "M",
  timespent: BigInt(0),
  reg_date: new Date(),
  user_id: uuidv4(),
  faculty_id: mockFaculty.faculty_id,
}

// Add more mock data as needed for other models
export const mockCourse = {
  course_name: "Mock Course",
  faculty_name: mockFaculty.faculty_name,
  course_id: `MOCK-${uuidv4().substring(0, 8)}`,
}