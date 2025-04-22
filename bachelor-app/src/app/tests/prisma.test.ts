

//test('fetchRevenue returns revenue data', async () => {
  //const revenue = await fetchRevenue();
  //expect(revenue).toBeDefined();
  //expect(Array.isArray(revenue)).toBe(true);
//});
// tests/prisma.test.ts
import { describe, test, expect, beforeAll, afterAll } from 'vitest'
import { prismaTest, teardownTestDb } from './utils/test-db'

console.log('DATABASE_URL:', process.env.DATABASE_URL)

describe('Database Connection Tests', () => {
  // Connect before all tests
  beforeAll(async () => {
    // Optional setup code
    console.log('Connecting to test database...')
  })

  // Disconnect after all tes
  afterAll(async () => {
    await teardownTestDb()
  })


  test('should connect to the database', async () => {
    // Simple query to test connection
    console.log('DATABASE_URL_TEST:', process.env.DATABASE_URL_TEST)
    const result = await prismaTest.$queryRaw<{ result: number }[]>`SELECT 1 as result`
    expect(result[0].result).toBe(1)
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


  const testId = Math.floor(Math.random() * 1000000); // Generates a random number within a safe range

  test('should create a new test record', async () => {
  // Create a test record with a unique identifier
//  const testId = `test-${Date.now()}`

  // Replace with your actual model and required fields
  const newRecord = await prismaTest.user_parent.create({
    data: {
      name: `Test User ${testId}`,
      surname: 'Test Surname', // Required field
      uni_email: `test-${testId}@example.com`,
      role: 'student', // Assuming this passes your role_chck constraint
      gender: 'F', // Assuming this passes your gender_chck constraint
      password_hash: 'hashed_password', // Required field
      timespent: BigInt(0), // Required field
      reg_date: new Date(), // Required field
      faculty: {
        connect: { faculty_name: 'Mathematics' }, // Adjust based on your schema
      }, // Required field
    },
  })

  expect(newRecord).toBeDefined()
  expect(newRecord.uni_email).toContain(testId) // Use the correct property

  // Clean up - delete the test record
  await prismaTest.user_parent.delete({
    where: {user_id: newRecord.user_id },
  })
})

  test('should update an existing record', async () => {
    // First create a record that we can update
    // const testId = `test-update-${Date.now()}`
    const newRecord = await prismaTest.user_parent.create({
      data: {
      // Add required fields based on your schema
      name: `Update Test ${testId}`,
      surname: 'Test Surname', // Required field
      uni_email: `update-${testId}@example.com`,
      role: 'student',
      gender: 'M',
      password_hash: 'hashed_password', // Required field
      timespent: BigInt(0), // Required field
      reg_date: new Date(), // Required field
      faculty: {
        connect: { faculty_name: 'Mathematics' }, // Adjust based on your schema
      }, // Required field
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
    // const testId = `test-delete-${Date.now()}`
    const newRecord = await prismaTest.user_parent.create({
      data: {
        name: `Delete Test ${testId}`,
        uni_email: `delete-${testId}@example.com`,
        role: 'student',
        gender: 'M',
        surname: 'Test Surname', // Required field
        password_hash: 'hashed_password', // Required field
        timespent: BigInt(0), // Required field
        reg_date: new Date(), // Required field
        faculty: {
          connect: { faculty_name: 'Mathematics' }, // Adjust based on your schema
        }, // Required field
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