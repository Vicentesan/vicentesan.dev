'use client';

interface SectionHeaderProps {
  id: string;
  children: React.ReactNode;
}

export function SectionHeader({ id, children }: SectionHeaderProps) {
  return (
    <button
      type="button"
      onClick={() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', `#${id}`);
      }}
      className="cursor-pointer text-left font-medium text-3xl text-foreground transition-colors hover:text-primary"
    >
      {children}
    </button>
  );
}
