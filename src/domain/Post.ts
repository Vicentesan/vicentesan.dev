import { Schema } from 'effect';

/**
 * Frontmatter of a post in `src/content/blog`. The Markdown plugin checks
 * every file against it at build time, so a typo in a field name fails the
 * build. Values are flat `key: value` strings; `keywords` is comma-separated.
 */
export const PostFrontmatter = Schema.Struct({
  title: Schema.String,
  /** Short label for the home page list; falls back to `title`. */
  label: Schema.optionalKey(Schema.String),
  description: Schema.String,
  /** `YYYY-MM-DD`. */
  date: Schema.String,
  keywords: Schema.optionalKey(Schema.String),
  category: Schema.optionalKey(Schema.String),
  author: Schema.optionalKey(Schema.String)
});

export function formatPostDate(date: string): string {
  return new Date(`${date}T12:00:00Z`).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC'
  });
}
