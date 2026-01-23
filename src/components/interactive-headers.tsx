'use client';

import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export function SectionHeader({ id, children, className }: SectionHeaderProps) {
  return (
    <button
      type="button"
      onClick={() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', `#${id}`);
      }}
      className={cn('cursor-pointer text-left text-[13px] text-foreground uppercase', className)}
    >
      {children}
    </button>
  );
}
