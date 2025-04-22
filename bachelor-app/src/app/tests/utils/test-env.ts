// tests/utils/test-env.ts
import dotenv from 'dotenv'
import path from 'path'

// Load environment variables from .env file
dotenv.config({ path: path.resolve(__dirname, '../../.env') })

// You can also set specific test database URL if needed
// process.env.DATABASE_URL = process.env.DATABASE_URL_TEST || process.env.DATABASE_URL