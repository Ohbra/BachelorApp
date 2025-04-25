import { prismaTest, cleanupTestResources } from './utils/test-db'
import { describe, beforeAll, afterAll, it, expect } from 'vitest'
import '../tests/utils/test-env' 

describe('Database CRUD Operations', () => {
  // Test data
  const testFaculty = {
    faculty_name: 'Test Faculty'
  }
  
  const testCourse = {
    course_name: 'Test Course',
    faculty_name: 'Test Faculty'
  }
  
  let testUserId: number
  
  // clean up before and after tests
  beforeAll(async () => {
    // test faculty first (required for foreign key constraints)
    await prismaTest.faculty.upsert({
      where: { faculty_name: testFaculty.faculty_name },
      update: {},
      create: testFaculty
    })
    
    // test course
    await prismaTest.course_of_study.upsert({
      where: { course_name: testCourse.course_name },
      update: {},
      create: testCourse
    })
  })
  
  afterAll(async () => {
    if (testUserId) {
      await prismaTest.student.deleteMany({
        where: { student_id: testUserId }
      })
      
      await prismaTest.user_parent.deleteMany({
        where: { user_id: testUserId }
      })
    }
    
    await prismaTest.course_of_study.deleteMany({
      where: { course_name: testCourse.course_name }
    })
    
    await prismaTest.faculty.deleteMany({
      where: { faculty_name: testFaculty.faculty_name }
    })
    
    await cleanupTestResources()
  })
  
  it('should create a user successfully', async () => {
    const user = await prismaTest.user_parent.create({
      data: {
        name: 'Test',
        surname: 'User',
        role: 'student',
        uni_email: 'test.user@tha.de',
        password_hash: 'hashed_password',
        faculty_name: testFaculty.faculty_name,
        timespent: BigInt(0),
        reg_date: new Date()
      }
    })
    
    testUserId = user.user_id
    
    expect(user).toBeDefined()
    expect(user.name).toBe('Test')
    expect(user.uni_email).toBe('test.user@tha.de')
  })
  
  it('should create a student profile successfully', async () => {
    // create a student profile for the test user
    const student = await prismaTest.student.create({
      data: {
        student_id: testUserId,
        course_of_study: testCourse.course_name
      }
    })
    
    expect(student).toBeDefined()
    expect(student.student_id).toBe(testUserId)
    expect(student.course_of_study).toBe(testCourse.course_name)
  })
  
  it('should read user data successfully', async () => {
    // read the test user
    const user = await prismaTest.user_parent.findUnique({
      where: { user_id: testUserId }
    })
    
    expect(user).toBeDefined()
    expect(user?.name).toBe('Test')
    expect(user?.uni_email).toBe('test.user@tha.de')
  })
  
  it('should update user data successfully', async () => {
    // update the test user
    const updatedUser = await prismaTest.user_parent.update({
      where: { user_id: testUserId },
      data: { name: 'Updated Name' }
    })
    
    expect(updatedUser).toBeDefined()
    expect(updatedUser.name).toBe('Updated Name')
  })
  
  it('should read student with relations successfully', async () => {
    // read the student with related user and course
    const student = await prismaTest.student.findUnique({
      where: { student_id: testUserId },
      include: {
        user_parent: true,
        course_of_study_student_course_of_studyTocourse_of_study: true
      }
    })
    
    expect(student).toBeDefined()
    expect(student?.user_parent.name).toBe('Updated Name')
    expect(student?.course_of_study_student_course_of_studyTocourse_of_study.course_name).toBe(testCourse.course_name)
  })
})