// tests/utils/test-db.ts
import { PrismaClient } from '../../backend/generated/prisma'
import './test-env' 
// Create a singleton instance of PrismaClient for tests
const prismaTest = new PrismaClient()

// Reset function if you want to reset specific tables between tests
async function resetTestData() {
  // Optional: Reset specific test data if needed
  // Example: await prismaTest.specific_table.deleteMany({ where: { is_test: true } })
}

// Clean up after tests
async function teardownTestDb() {
  await prismaTest.$disconnect()
}

export { prismaTest, resetTestData, teardownTestDb }