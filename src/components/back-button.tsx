import { Undo2 } from 'lucide-react';
import Link from 'next/link';

import { cn } from '@/lib/utils';

export function BackButton() {
  return (
    <div
      className={cn(
        'static top-0 w-fit [@media(min-width:1145px)]:fixed [@media(min-width:1416px)]:translate-x-[-360px]',
        '[@media(min-width:1145px)]:translate-y-24 [@media(min-width:1145px)_and_(max-width:1415px)]:translate-x-[-240px]',
        'select-none'
      )}
    >
      <Link
        href="/"
        title="Go back"
        className="group flex items-center justify-center gap-2 text-muted-foreground hover:text-foreground"
      >
        <Undo2 className="size-4" />
        <span className="text-[13px] uppercase leading-none">Back</span>
      </Link>
    </div>
  );
}
