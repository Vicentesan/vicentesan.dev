import { createId } from '@paralleldrive/cuid2'
import { pgTable, text, timestamp } from 'drizzle-orm/pg-core'

import { clients } from './clients'

export const authLinks = pgTable('auth_links', {
  id: text('id')
    .$defaultFn(() => createId())
    .primaryKey(),
  code: text('code').notNull().unique(),

  clientId: text('client_id')
    .references(() => clients.id, {
      onDelete: 'cascade',
    })
    .notNull(),

  createdAt: timestamp('createdAt').defaultNow(),
})
