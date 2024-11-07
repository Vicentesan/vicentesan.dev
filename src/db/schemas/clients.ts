import { createId } from '@paralleldrive/cuid2'
import { relations } from 'drizzle-orm'
import { pgTable, text } from 'drizzle-orm/pg-core'

import { quotes } from './quotes'

export const clients = pgTable('clients', {
  id: text('id')
    .$defaultFn(() => createId())
    .primaryKey(),

  name: text('name').notNull(),
  email: text('email').notNull(),
  phone: text('phone').notNull(),
})

export const clientsRelations = relations(clients, ({ many }) => ({
  quotes: many(quotes),
}))
