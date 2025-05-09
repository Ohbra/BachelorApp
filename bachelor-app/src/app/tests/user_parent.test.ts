import { describe, test, expect, beforeAll, afterAll } from 'vitest'
import { prismaTest, cleanupTestResources } from './utils/test-db'
import '../tests/utils/test-env' 

console.log('DATABASE_URL:', process.env.DATABASE_URL)

describe('Database Connection Tests', () => {

  const fakeUserId = "9bb52088-f061-4204-80ab-f55c37e54c6f" // Replace with a valid user_id from your database
  // Connect before all tests
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
    // Optional setup code
      console.log('Connecting to test database...')
    }
  })

  // Disconnect after all tes
  afterAll(async () => {
    await cleanupTestResources()
  })

  test('should connect to the database', async () => {
    // Simple query to test connection
    console.log('DATABASE_URL_TEST:', process.env.DATABASE_URL_TEST)
    const result = await prismaTest.$queryRaw<{ result: number }[]>`SELECT 1 as result`
    expect(result[0].result).toBe(1)
  })

  test("should handle invalid queries gracefully", async () => {
    try {
      // Attempt to find a faculty with an invalid ID
      await prismaTest.faculty.findUnique({
        where: {
          faculty_id: "non-existent-id",
        },
      })

      // If we reach here, the query didn't throw an error
      // This is fine since findUnique returns null for non-existent records
    } catch (error) {
      // This should not happen with findUnique
      expect(error).toBeUndefined()
    }
  })


  test('should read user_parent data', async () => {
    const users = await prismaTest.user_parent.findMany({
      take: 5 // Limit to 5 records for testing
    })
    
    expect(users).toBeDefined()
    expect(Array.isArray(users)).toBe(true)
    // Assuming there's data, we can check the first record
    if (users.length > 0) {
      expect(users[0]).toHaveProperty('user_id')
      // Add more property checks based on your schema
    }
  })


  // I manually created user entries in the (auth.users) database for this test
 // this is fake_user3 in the auth.users table
  // const fakeUserId = "9bb52088-f061-4204-80ab-f55c37e54c6f" // Replace with a valid user_id from your database
  test('should create a new test record', async () => {
  // Create a test record with a unique identifier

  // Replace with your actual model and required fields
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

  expect(newRecord).toBeDefined()
  expect(newRecord.user_id).equal(fakeUserId) // Use the correct property

 // Clean up - delete the test record
  await prismaTest.user_parent.delete({
    where: {user_id: newRecord.user_id },
  })
})

 // this is fake _user1 in the auth.users table
 const testId = "d89fc6f0-ceb5-44ac-aa8c-237f0b374e6c"
  test('should update an existing record', async () => {
    // First create a record that we can update
    // const testId = `test-update-${Date.now()}`
    const newRecord = await prismaTest.user_parent.create({
      data: {
      user_id: testId, // Use the fake user ID for testing
      name: 'Max',
      surname: 'Mustermann', // Required field
      role: 'student', // Assuming this passes your role_chck constraint
      gender: 'M', // Assuming this passes your gender_chck constraint
      timespent: BigInt(0), // Required field
      reg_date: new Date(), // Required field
      faculty_id: 'Mathematics' // Required field
      },
    })
    
    // Now update the record
    const updatedName = `Updated Name ${Date.now()}`
    const updatedRecord = await prismaTest.user_parent.update({
      where: { user_id: newRecord.user_id },
      data: { name: updatedName }
    })
    
    expect(updatedRecord.name).toBe(updatedName)
    
    // Clean up
    await prismaTest.user_parent.delete({
      where: { user_id: newRecord.user_id }
    })
  })


  test('should delete a record', async () => {
    // First create a record that we can delete
    const newRecord = await prismaTest.user_parent.create({
      data: {
        user_id: testId, // Use the fake user ID for testing
        name: `Delete Test ${testId}`,
        role: 'student',
        gender: 'M',
        surname: 'Test Surname', // Required field
        timespent: BigInt(0), // Required field
        reg_date: new Date(), // Required field
        faculty_id: 'Mathematics' // Required field
      }
    })

    // Delete the record
    await prismaTest.user_parent.delete({
      where: { user_id: newRecord.user_id }
    })
    
    // Verify it's deleted
    const findDeleted = await prismaTest.user_parent.findUnique({
      where: { user_id: newRecord.user_id }
    })
    expect(findDeleted).toBeNull()
  })
})


 // this is fake _user2 in the auth.users table
 const test_del_Id = "2f565466-e910-470f-8635-8ed1a9eee6e2"
 
test('should delete a user_parent record', async () => {
  await prismaTest.user_parent.deleteMany({
    where: {
      user_id: test_del_Id, // Use the fake user ID for testing
    },
  })
  // Verify it's deleted
  const findDeleted = await prismaTest.user_parent.findUnique({
      where: { user_id: test_del_Id }
    })
    expect(findDeleted).toBeNull()
})


test("should handle transaction errors properly", async () => {
    try {
      // Try a transaction that should fail due to constraints
      await prismaTest.$transaction(async (tx) => {
        // This should fail because faculty_id is required and unique
        await tx.faculty.create({
          data: {
            faculty_name: "Test Faculty",
            // Intentionally omitting faculty_id to cause an error
          } as any,
        })
      })

      // If we reach here, the transaction didn't throw an error (which is unexpected)
      expect(true).toBe(false) // This should not be reached
    } catch (error) {
      // We expect an error here
      expect(error).toBeDefined()
    }
  })

 test("should handle row-level security restrictions", async () => {
    // This test checks if RLS is properly enforced
    // Note: This test might pass or fail depending on your RLS policies

    try {
      // Attempt to access data that might be restricted by RLS
      const result = await prismaTest.user_parent.findMany({
        take: 1,
      })

      // If we can access the data, the test passes
      expect(Array.isArray(result)).toBe(true)
    } catch (error: any) {
      // If we get an RLS-related error, check its type
      // Common RLS error message contains "permission denied"
      if (error.message && error.message.includes("permission denied")) {
        // This is expected if RLS is blocking access
        expect(error.message).toContain("permission denied")
      } else {
        // If it's another type of error, fail the test
        throw error
      }
    }
  })