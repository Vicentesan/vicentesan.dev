import type { MDXComponents } from 'mdx/types';
import { AnimatedLink } from '@/components/animated-link';
import { CodeBlock } from '@/components/code-block';
import { SectionHeader } from '@/components/interactive-headers';

/**
 * MDX compiles ```ts fences to `<pre><code className="language-ts">` and drops
 * everything after the language word, so fence metadata (`title="..."`) never
 * reaches a component. To label a block, write the filename into the language
 * itself — ```ts:src/lib/sum.ts — which does survive as `language-ts:src...`.
 */
function parseFence(child: React.ReactNode): { code: string; lang?: string; title?: string } {
  if (!child || typeof child !== 'object' || !('props' in child)) return { code: '' };

  const props = child.props as { className?: string; children?: string };
  const [lang, title] = (props.className?.match(/language-([\w-]+(?::\S+)?)/)?.[1] ?? '').split(
    ':'
  );

  return { code: String(props.children ?? ''), lang: lang || undefined, title };
}

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
        <AnimatedLink
          href={url}
          variant="primary"
          target={external ? '_blank' : undefined}
          // Prose links name APIs and proper nouns, so they opt out of the
          // global lowercase. Links elsewhere (the home list) stay lowercased.
          className="normal-case"
        >
          {children}
        </AnimatedLink>
      );
    },
    strong: ({ children }) => <strong className="font-normal text-primary">{children}</strong>,
    pre: ({ children }) => {
      const { code, lang, title } = parseFence(children);

      return (
        <CodeBlock lang={lang} title={title}>
          {code}
        </CodeBlock>
      );
    },
    // Fenced blocks are unwrapped by `pre` above, so this only ever sees
    // inline `code` spans.
    code: ({ children }) => (
      <code className="rounded bg-neutral-100/70 px-[0.3em] py-[0.1em] font-mono text-[0.9em] text-primary normal-case">
        {children}
      </code>
    ),
    ...components
  };
}
