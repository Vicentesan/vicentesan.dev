import { drizzle } from 'drizzle-orm/node-postgres'

import { env } from '@/env.mjs'

import * as schema from './schemas'

export const db = drizzle(env.DATABASE_URL, { schema })
