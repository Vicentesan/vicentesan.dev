import type { ReactNode } from 'react';

export function CodeBlock({ children }: { children: ReactNode }) {
  return (
    <pre className="h-[350px] w-full overflow-scroll break-words rounded-xl border bg-accent p-4">
      {children}
    </pre>
  );
}
