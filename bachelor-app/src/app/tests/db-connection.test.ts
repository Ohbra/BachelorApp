import { describe, afterAll, it, expect } from 'vitest'
import { checkDatabaseConnection, cleanupTestResources } from './utils/test-db'
import '../tests/utils/test-env'

describe('Database Connection', () => {
  afterAll(async () => {
    await cleanupTestResources()
  })

  it('should connect to the database successfully', async () => {
    const result = await checkDatabaseConnection()
    expect(result.connected).toBe(true)
    expect(result.error).toBeNull()
  })
})