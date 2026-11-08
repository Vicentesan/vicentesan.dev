import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { SITE_URL } from '@/lib/site';

export const BLOG_DIR = path.join(process.cwd(), 'src/content/blog');

export { SITE_URL };

export interface PostFrontmatter {
  title: string;
  /** Short label for the home page list; falls back to `title`. */
  label?: string;
  description: string;
  date: string;
  keywords?: string[];
  category?: string;
  author?: string;
}

export interface Post extends PostFrontmatter {
  slug: string;
}

function readFrontmatter(slug: string): PostFrontmatter {
  const raw = fs.readFileSync(path.join(BLOG_DIR, `${slug}.mdx`), 'utf8');
  const { data } = matter(raw);

  return data as PostFrontmatter;
}

export function getPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''));
}

export function getPost(slug: string): Post | null {
  if (!getPostSlugs().includes(slug)) return null;

  return { slug, ...readFrontmatter(slug) };
}

export function getAllPosts(): Post[] {
  return getPostSlugs()
    .map((slug) => ({ slug, ...readFrontmatter(slug) }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function formatPostDate(date: string): string {
  return new Date(`${date}T12:00:00Z`).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC'
  });
}
