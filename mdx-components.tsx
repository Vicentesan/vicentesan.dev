import type { MDXComponents } from 'mdx/types';
import { AnimatedLink } from '@/components/animated-link';
import { SectionHeader } from '@/components/interactive-headers';

/**
 * Headings derive their anchor from the text, so `## The Mom Test` becomes
 * `#the-mom-test`. Append `{#custom-id}` to pin a specific anchor instead,
 * which keeps already-published links working when a heading is reworded.
 */
function parseHeading(children: React.ReactNode): { id: string; text: string } {
  const text = String(children);
  const explicit = text.match(/\s*\(#([a-z0-9-]+)\)\s*$/);

  if (explicit) return { id: explicit[1], text: text.slice(0, explicit.index).trimEnd() };

  const id = text
    .toLowerCase()
    .replace(/['‘’"“”]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

  return { id, text };
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: ({ children }) => {
      const { id, text } = parseHeading(children);

      return (
        <SectionHeader id={id} className="scroll-mt-20 pt-4">
          {text}
        </SectionHeader>
      );
    },
    ul: ({ children }) => <ul className="ml-4 flex list-disc flex-col gap-1">{children}</ul>,
    a: ({ href, children }) => {
      const url = String(href);
      const external = /^https?:\/\//.test(url);

      return (
        <AnimatedLink href={url} variant="primary" target={external ? '_blank' : undefined}>
          {children}
        </AnimatedLink>
      );
    },
    strong: ({ children }) => <strong className="font-normal text-primary">{children}</strong>,
    ...components
  };
}
