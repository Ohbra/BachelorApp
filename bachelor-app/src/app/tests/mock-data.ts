import { v4 as uuidv4 } from 'uuid';

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


// supervisor based on Prisma schema
export type MockSupervisor = {
  supervisor_id: string;
  way_of_working: string | null;
  profile_tha: string | null;
  title: string | null;
  research_priorities: string | null;
  subject_area: string | null;
  user_parent?: {
    name: string;
    surname: string;
    faculty?: {
      faculty_name: string;
    } | null;
  } | null;
}

// Create supervisor mock
export function createMockSupervisor(overrides: Partial<MockSupervisor> = {}): MockSupervisor {
  return {
    supervisor_id: '1',
    way_of_working: null,
    profile_tha: null,
    title: null,
    research_priorities: null,
    subject_area: null,
    ...overrides
  }
}

// Create multiple supervisors
export function createMockSupervisors(count: number, overridesFn?: (index: number) => Partial<MockSupervisor>): MockSupervisor[] {
  return Array.from({ length: count }, (_, i) => 
    createMockSupervisor(overridesFn ? overridesFn(i) : {})
  )
}