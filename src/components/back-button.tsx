import type { LucideProps } from 'lucide-react';
import Link from 'next/link';

export function BackButton(props: LucideProps) {
  return (
    <div className="lg:-left-50 min-md:-left-15 absolute top-10 left-25 md:top-22 min-sm:left-0">
      <Link href="/" title="Go back" className="group flex items-center">
        <svg
          width="18px"
          height="18px"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          fill="none"
          color="currentColor"
          className="text-muted-foreground group-hover:text-foreground"
          {...props}
        >
          <path
            d="M10.25 4.75l-3.5 3.5 3.5 3.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M6.75 8.25h6a4 4 0 014 4v7"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
        <span className="font-sans text-muted-foreground text-xs tracking-tight group-hover:text-foreground">
          Back
        </span>
      </Link>
    </div>
  );
}
