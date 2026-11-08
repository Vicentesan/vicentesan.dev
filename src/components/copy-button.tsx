'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Check, Copy } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface CopyButtonProps {
  value: string;
  className?: string;
}

export function CopyButton({ value, className }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // Clipboard access can be denied (insecure context, permissions); the
      // code is still selectable by hand, so there's nothing to recover.
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={copied ? 'Copied' : 'Copy code'}
      className={cn(
        'relative grid size-6 place-items-center rounded text-muted-foreground transition-colors',
        'hover:bg-neutral-200/60 hover:text-primary focus-visible:outline-none',
        'focus-visible:ring-1 focus-visible:ring-neutral-400',
        className
      )}
    >
      <AnimatePresence initial={false} mode="wait">
        <motion.span
          key={copied ? 'check' : 'copy'}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.12 }}
          className="absolute grid place-items-center"
        >
          {copied ? <Check className="size-3" /> : <Copy className="size-3" />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
