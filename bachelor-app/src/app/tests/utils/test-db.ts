import { PrismaClient } from '../../backend/generated/prisma'
import './test-env' 
// Create a singleton instance of PrismaClient for tests
export const prismaTest = new PrismaClient()

export async function checkDatabaseConnection() {
  try {
    await prismaTest.$queryRaw`SELECT 1`
    return { connected: true, error: null }
  } catch (error) {
    return { 
      connected: false, 
      error: error instanceof Error ? error.message : String(error) 
    }
  }
}

// Reset function if you want to reset specific tables between tests
export async function resetTestData() {
  // Optional: Reset specific test data if needed
  // Example: await prismaTest.specific_table.deleteMany({ where: { is_test: true } })
}

// Clean up after tests
export async function cleanupTestResources() {
  await prismaTest.$disconnect()
}



