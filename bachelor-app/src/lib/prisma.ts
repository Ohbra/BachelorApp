import { PrismaClient } from '@prisma/client'

// singleton instance of PrismaClient
export const prisma = new PrismaClient()

export { PrismaClient }
