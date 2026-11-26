import { Head } from '@effect/ui';
import { Html, HtmlHead, Markdown } from '@effect/ui/html';
import { Schema } from 'effect';
import { AnimatedLink } from '../../components/AnimatedLink.ts';
import { BackButton } from '../../components/BackButton.ts';
import { findPost, type Post } from '../../content/posts.ts';
import { formatPostDate } from '../../domain/Post.ts';
import { AppRoute } from '../../routes.ts';
import { SITE_URL } from '../../site.ts';
import { NotFoundPage } from '../NotFoundPage.ts';

const plainText = (content: ReadonlyArray<Markdown.Inline>): string =>
  content
    .map((inline) => {
      switch (inline._tag) {
        case 'Text':
        case 'InlineCode':
          return inline.value;
        case 'Emphasis':
        case 'Strong':
        case 'Strikethrough':
        case 'Link':
          return plainText(inline.content);
        default:
          return '';
      }
    })
    .join('');

/**
 * Headings derive their anchor from the text, so `## The Mom Test` becomes
 * `#the-mom-test`. Append `(#custom-id)` to pin a specific anchor instead,
 * which keeps already-published links working when a heading is reworded.
 */
const parseHeading = (raw: string): { readonly id: string; readonly text: string } => {
  const explicit = raw.match(/\s*\(#([a-z0-9-]+)\)\s*$/);

  if (explicit) return { id: explicit[1], text: raw.slice(0, explicit.index).trimEnd() };

  const id = raw
    .toLowerCase()
    .replace(/['‘’"“”]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

  return { id, text: raw };
};

const postHead = (post: Post) => {
  const url = `${SITE_URL}${AppRoute.print(AppRoute.BlogPost({ params: { slug: post.slug } }))}`;

  return [
    Head.title(post.title),
    HtmlHead.link({ rel: 'canonical', href: url }),
    HtmlHead.meta({ name: 'description', content: post.description }),
    HtmlHead.meta({ name: 'author', content: post.author }),
    post.keywords.length > 0 &&
      HtmlHead.meta({ name: 'keywords', content: post.keywords.join(', ') }),
    post.category !== undefined && HtmlHead.meta({ name: 'category', content: post.category }),
    HtmlHead.meta({ property: 'og:type', content: 'article' }),
    HtmlHead.meta({ property: 'og:url', content: url }),
    HtmlHead.meta({ property: 'og:title', content: post.title }),
    HtmlHead.meta({ property: 'og:description', content: post.description }),
    HtmlHead.meta({
      property: 'article:published_time',
      content: new Date(`${post.date}T12:00:00Z`).toISOString()
    }),
    HtmlHead.meta({ property: 'article:author', content: post.author }),
    HtmlHead.meta({ name: 'twitter:title', content: post.title }),
    HtmlHead.meta({ name: 'twitter:description', content: post.description })
  ].filter((entry) => entry !== false);
};

export const BlogPostPage = Html.component({
  name: 'BlogPostPage',
  props: Schema.Struct({ slug: Schema.String }),
  model: Schema.Null,
  message: Schema.Never
}).make({
  init: () => null,
  update: ($) => $.model,
  head: ({ props }) => {
    const post = findPost(props.slug);

    return post
      ? postHead(post)
      : [Head.title('Not found'), HtmlHead.meta({ name: 'robots', content: 'noindex' })];
  },
  view: (h) => {
    const post = findPost(h.props.slug);

    if (!post) return NotFoundPage(h);

    return h.main
      .class(
        'relative mx-auto flex w-fit max-w-lg flex-col items-start justify-center gap-8 py-20 text-[13px] text-neutral-500 max-sm:px-10'
      )
      .children(
        BackButton(h),
        h.div
          .class('flex flex-col gap-1')
          .children(
            h.h1.class('text-primary').children(post.title),
            h.p.class('text-muted-foreground text-xs').children(formatPostDate(post.date))
          ),
        h.article.class('flex flex-col gap-4').children(
          // `viewBlocks`, not `view`: the blocks are the article's own flex items.
          Markdown.viewBlocks(h, Markdown.decodeDocument(post.document), {
            views: {
              Heading: (h, heading, content) => {
                if (heading.level !== 2) return Markdown.defaultViews.Heading(h, heading, content);

                const { id, text } = parseHeading(plainText(heading.content));

                // A link to itself: a click puts the anchor in the URL, and
                // the Router scrolls to it there and on a direct visit.
                return h.h2
                  .id(id)
                  .class('scroll-mt-20 pt-4 text-[13px] text-foreground lowercase')
                  .children(h.a.attr('href', `#${id}`).children(text));
              },
              List: (h, list, items) =>
                list.isOrdered
                  ? h.ol.class('ml-4 flex list-decimal flex-col gap-1').children(items)
                  : h.ul.class('ml-4 flex list-disc flex-col gap-1').children(items),
              Link: (h, link, content) =>
                AnimatedLink(h, {
                  href: link.url,
                  variant: 'primary',
                  external: /^https?:\/\//.test(link.url)
                }).children(content),
              Strong: (h, _strong, content) =>
                h.strong.class('font-normal text-primary').children(content)
            }
          })
        )
      );
  }
});
