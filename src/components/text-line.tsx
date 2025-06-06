import type { ReactNode } from 'react'

interface TextLineProps {
  children: ReactNode
  className?: string
}

export function TextLine({ children, className = '' }: TextLineProps) {
  return (
    <div
      className={`flex flex-row items-center justify-start gap-2 font-instrument-serif text-7xl text-foreground ${className}`}
    >
      {children}
    </div>
  )
}
