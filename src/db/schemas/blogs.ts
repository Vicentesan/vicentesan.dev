import { createId } from '@paralleldrive/cuid2'
import { pgTable, text } from 'drizzle-orm/pg-core'

export const blogs = pgTable('blogs', {
  id: text('id')
    .$defaultFn(() => createId())
    .primaryKey(),

  title: text('title').notNull(),
  slug: text('slug').notNull(),
  mdxFileName: text('mdx_file_name').notNull(),
})
