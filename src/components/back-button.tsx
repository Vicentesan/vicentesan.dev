import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export function BackButton() {
  return (
    <div className="lg:-left-50 min-md:-left-15 absolute top-10 left-10 md:top-22 min-sm:left-0">
      <Link
        href="/"
        title="Go back"
        className="group flex items-center text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-4" />
        <span className="text-[13px] uppercase">Back</span>
      </Link>
    </div>
  );
}
