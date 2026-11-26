/// <reference types="@effect/ui/html/MarkdownContent" />
/// <reference types="vite/client" />
import type { Markdown } from '@effect/ui/html';
import { SITE_NAME } from '../site.ts';

export interface Post {
  readonly slug: string;
  readonly title: string;
  readonly label: string;
  readonly description: string;
  readonly date: string;
  readonly keywords: ReadonlyArray<string>;
  readonly category: string | undefined;
  readonly author: string;
  /** The compiled Markdown; decode it with `Markdown.decodeDocument`. */
  readonly document: Markdown.DocumentEncoded;
}

interface PostModule {
  readonly default: Markdown.DocumentEncoded;
  readonly frontmatter: Readonly<Record<string, string>> | undefined;
}

// Every `.md` file in `./blog` is a post, compiled at build time by the
// Markdown plugin in `vite.config.ts`. The file name is the slug.
const modules = import.meta.glob<PostModule>('./blog/*.md', { eager: true });

export const posts: ReadonlyArray<Post> = Object.entries(modules)
  .map(([path, module]): Post => {
    const slug = path.replace(/^.*\/|\.md$/g, '');
    const fields = module.frontmatter;

    if (!fields) throw new Error(`${path} has no frontmatter`);

    return {
      slug,
      title: fields.title,
      label: fields.label ?? fields.title,
      description: fields.description,
      date: fields.date,
      keywords: (fields.keywords ?? '')
        .split(',')
        .map((keyword) => keyword.trim())
        .filter((keyword) => keyword !== ''),
      category: fields.category,
      author: fields.author ?? SITE_NAME,
      document: module.default
    };
  })
  .sort((a, b) => b.date.localeCompare(a.date));

export const findPost = (slug: string): Post | undefined =>
  posts.find((post) => post.slug === slug);
