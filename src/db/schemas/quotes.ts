import { createId } from '@paralleldrive/cuid2'
import { relations } from 'drizzle-orm'
import {
  index,
  integer,
  pgEnum,
  pgTable,
  text,
  timestamp,
  varchar,
} from 'drizzle-orm/pg-core'

import { clients } from './clients'

export const quoteStatusEnum = pgEnum('quote_status', [
  'pending',
  'accepted',
  'rejected',
])

export const quoteTypeEnum = pgEnum('quote_type', [
  'api',
  'web',
  'mobile',
  'desktop',
  'unfinished',
  'other',
])

export const quoteBudgetEnum = pgEnum('quote_budget', [
  '1k',
  '2k',
  '3k',
  '5k',
  'custom',
])

export const quoteDeliveryTimeEnum = pgEnum('quote_delivery_time', [
  'short',
  'normal',
  'medium',
  'flexible',
  'urgent',
])

export const quotes = pgTable(
  'quotes',
  {
    id: text('id')
      .$defaultFn(() => createId())
      .primaryKey(),
    clientId: text('client_id').references(() => clients.id, {
      onDelete: 'set null',
    }),

    projectName: varchar('project_name', { length: 255 }).notNull(),
    currentWebsite: varchar('current_website', { length: 255 }),
    type: quoteTypeEnum('type').notNull(),
    budget: quoteBudgetEnum('budget').notNull(),
    customBudget: integer('custom_budget'),
    additionalInfo: text('additional_info'),
    deliveryTime: quoteDeliveryTimeEnum('delivery_time').notNull(),

    details: varchar('details', { length: 255 }),

    status: quoteStatusEnum('status').notNull().default('pending'),
    createdAt: timestamp('created_at', { withTimezone: true })
      .notNull()
      .defaultNow(),
    updatedAt: timestamp('updated_at', { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (table) => ({
    clientIdIdx: index('quotes_client_id_idx').on(table.clientId),
    statusIdx: index('quotes_status_idx').on(table.status),
    createdAtIdx: index('quotes_created_at_idx').on(table.createdAt),
  }),
)

export const quotesRelations = relations(quotes, ({ one }) => ({
  client: one(clients, {
    fields: [quotes.clientId],
    references: [clients.id],
  }),
}))
