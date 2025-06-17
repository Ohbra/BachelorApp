import { prismaTest, cleanupTestResources } from './utils/test-db'
import { describe, beforeAll, afterAll, it, expect } from 'vitest'
import '../tests/utils/test-env' 
import { prisma } from '@/lib/prisma'

describe('Database CRUD Operations', () => {
  // Test data
  const testFaculty = {
    faculty_id: 'Test Faculty',
    faculty_name: 'Test Faculty'
  }
  
  const testCourse = {
    course_name: 'Test Course',
    faculty_id: 'Test Faculty',
    course_id: 'Test Course'
  }
  
//  let testUserId: number
  
// I manually created user entries in the (auth.users) database for this test
 // this is fake_user3 in the auth.users table
  const fakeUserId = "9bb52088-f061-4204-80ab-f55c37e54c6f" // Replace with a valid user_id from your database

  // confirms that user does not exist in the database before running the test
beforeAll(async () => {
  const findStudent = await prismaTest.student.findUnique({
    where: { student_id: fakeUserId }
  })  
  // Check if the user exists and delete if found
  const findUser = await prismaTest.user_parent.findUnique({
    where: { user_id: fakeUserId }
  })

  if (findStudent) {
    await prismaTest.student.delete({
      where: { student_id: fakeUserId }
    })
  } 

  if (findUser) {
    await prismaTest.user_parent.delete({
      where: { user_id: fakeUserId }
    })
  }

// test faculty first (required for foreign key constraints)
    await prismaTest.faculty.upsert({
      where: { faculty_name: testFaculty.faculty_name },
      update: {},
      create: testFaculty
    })
    
    // test course
    // you can use Mathamatics as a test faculty id
    await prismaTest.course_of_study.upsert({
      where: { course_name: testCourse.course_name },
      update: {},
      create: testCourse
    })

    const foundCourse = await prismaTest.course_of_study.findUnique({
      where: { course_id: 'Test Course' }
    })
    console.log('Found Course:', foundCourse)

})

  it('should create a new student record', async () => {
  // Create a test record with a unique identifier
  // create a user_parent record first
  const newRecord = await prismaTest.user_parent.create({
    data: {
      user_id: fakeUserId, // Use the fake user ID for testing
      name: 'test_name',
      surname: 'Test Surname', // Required field
      role: 'student', // Assuming this passes your role_chck constraint
      gender: 'F', // Assuming this passes your gender_chck constraint
      timespent: BigInt(0), // Required field
      reg_date: new Date(), // Required field
      faculty_id: 'Mathematics' // Required field
    },
  })

  const newStudent = await prismaTest.student.create({
    data: {
      student_id: fakeUserId, // Use the fake user ID for testing     
      course_id: testCourse.course_id // Assuming this passes your course_of_study constraint
    },    
})

  expect(newRecord).toBeDefined()
  expect(newRecord.user_id).equal(fakeUserId) // Use the correct property
  expect(newStudent).toBeDefined()

// Clean up - delete the test record
  await prismaTest.student.delete({
    where: {student_id: newStudent.student_id },
  })

 // Clean up - delete the test record
  await prismaTest.user_parent.delete({
    where: {user_id: newRecord.user_id },
  })
})

  afterAll(async () => {
    // commenting out because student id and user id are not globally declared
    //if (testUserId) {
      //await prismaTest.student.deleteMany({
        //where: { student_id:  }
      //})
      //
      //await prismaTest.user_parent.deleteMany({
        //where: { user_id: }
      //})
    //}
    
    await prismaTest.course_of_study.deleteMany({
      where: { course_name: testCourse.course_name }
    })
    
    await prismaTest.faculty.deleteMany({
      where: { faculty_name: testFaculty.faculty_name }
    })
    
    await cleanupTestResources()
  })

  // commenting out the test cases for now as they are the same as the ones in the user_parent.test.ts file
  
  //it('should create a user successfully', async () => {
    //const user = await prismaTest.user_parent.create({
      //data: {
      //name: 'Test',
      //surname: 'User',
      //role: 'student',
      //faculty_id: testFaculty.faculty_id, // Removed as it is not a valid property
      //timespent: BigInt(0),
      //reg_date: new Date()
      //}
    //})
    //
    //testUserId = Number(user.user_id)
    //
    //expect(user).toBeDefined()
    //expect(user.name).toBe('Test')
    //expect(user.uni_email).toBe('test.user@tha.de')
  //})
  //
  //it('should create a student profile successfully', async () => {
    //// create a student profile for the test user
    //const student = await prismaTest.student.create({
      //data: {
        //student_id: testUserId,
        //course_of_study: testCourse.course_name
      //}
    //})
    //
    //expect(student).toBeDefined()
    //expect(student.student_id).toBe(testUserId)
    //expect(student.course_of_study).toBe(testCourse.course_name)
  //})
  //
  //it('should read user data successfully', async () => {
    //// read the test user
    //const user = await prismaTest.user_parent.findUnique({
      //where: { user_id: testUserId }
    //})
    //
    //expect(user).toBeDefined()
    //expect(user?.name).toBe('Test')
    //expect(user?.uni_email).toBe('test.user@tha.de')
  //})
  //
  //it('should update user data successfully', async () => {
    //// update the test user
    //const updatedUser = await prismaTest.user_parent.update({
      //where: { user_id: testUserId },
      //data: { name: 'Updated Name' }
    //})
    //
    //expect(updatedUser).toBeDefined()
    //expect(updatedUser.name).toBe('Updated Name')
  //})
  //
  //it('should read student with relations successfully', async () => {
    //// read the student with related user and course
    //const student = await prismaTest.student.findUnique({
      //where: { student_id: testUserId },
      //include: {
        //user_parent: true,
        //course_of_study_student_course_of_studyTocourse_of_study: true
      //}
    //})
    //
    //expect(student).toBeDefined()
    //expect(student?.user_parent.name).toBe('Updated Name')
    //expect(student?.course_of_study_student_course_of_studyTocourse_of_study.course_name).toBe(testCourse.course_name)
  //})
})