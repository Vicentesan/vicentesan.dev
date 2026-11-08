import { createHighlighter, type Highlighter } from 'shiki';
import { CopyButton } from '@/components/copy-button';
import { cn } from '@/lib/utils';

const THEME = 'github-light';

/**
 * Languages are bundled explicitly rather than loaded on demand, so adding a
 * new one to a post means adding it here too. Keeping the list short keeps the
 * build fast, since every grammar is parsed at startup.
 */
const LANGS = [
  'bash',
  'css',
  'diff',
  'go',
  'json',
  'jsx',
  'md',
  'mdx',
  'prisma',
  'python',
  'rust',
  'sh',
  'sql',
  'ts',
  'tsx',
  'yaml'
] as const;

export type CodeLang = (typeof LANGS)[number];

/** Shown in the header when a block has no filename of its own. */
const LANG_LABELS: Partial<Record<CodeLang, string>> = {
  bash: 'shell',
  sh: 'shell',
  ts: 'typescript',
  tsx: 'tsx',
  jsx: 'jsx',
  md: 'markdown'
};

/**
 * Highlighting happens at build time, so the WASM-backed highlighter is created
 * once and reused across every block in every post instead of per render.
 */
let highlighterPromise: Promise<Highlighter> | undefined;

function getHighlighter(): Promise<Highlighter> {
  highlighterPromise ??= createHighlighter({ themes: [THEME], langs: [...LANGS] });

  return highlighterPromise;
}

function isSupported(lang: string): lang is CodeLang {
  return (LANGS as readonly string[]).includes(lang);
}

interface CodeBlockProps {
  children: string;
  /** Unsupported or missing languages render as plain text rather than failing the build. */
  lang?: string;
  /** Shown in the header, for pointing at the file a snippet belongs to. */
  title?: string;
  className?: string;
}

export async function CodeBlock({ children, lang, title, className }: CodeBlockProps) {
  const code = children.replace(/\n$/, '');
  const resolved = lang && isSupported(lang) ? lang : 'text';
  const highlighter = await getHighlighter();

  const html = highlighter.codeToHtml(code, {
    lang: resolved,
    theme: THEME,
    // The wrapper below owns the frame, so Shiki's own padding and background
    // would double up on it.
    structure: 'inline'
  });

  const label = title ?? (resolved === 'text' ? undefined : (LANG_LABELS[resolved] ?? resolved));

  return (
    <figure
      className={cn(
        'group relative flex w-full min-w-0 flex-col overflow-hidden rounded-lg border border-neutral-200/80',
        'bg-neutral-50/60 shadow-[0_1px_2px_rgba(0,0,0,0.04)]',
        className
      )}
    >
      <figcaption className="flex items-center justify-between gap-3 border-neutral-200/80 border-b bg-white/60 py-1.5 pr-1.5 pl-3">
        <span className="truncate font-mono text-[10px] text-muted-foreground normal-case tracking-wide">
          {label}
        </span>
        <CopyButton value={code} />
      </figcaption>

      <pre className="code-block-scroll overflow-x-auto px-3 py-3 text-[12px] normal-case leading-[1.7]">
        <code
          className="font-mono"
          // Shiki escapes the code it highlights, and the surrounding markup is
          // ours, so there is no untrusted input in this string.
          // biome-ignore lint/security/noDangerouslySetInnerHtml: highlighted output from Shiki
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </pre>
    </figure>
  );
}
