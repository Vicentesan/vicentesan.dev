import Link from 'next/link'

export function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex flex-row items-center justify-center gap-4">
        <Link href="/" className="text-2xl">
          Vicente Sanchez
        </Link>

        <span className="size-1 rounded-full bg-muted-foreground" />

        <div className="flex items-center gap-2 text-2xl">
          <Link href="/">Home</Link>

          <span className="h-6 w-px bg-border" />

          <Link href="/about">About</Link>

          <span className="h-6 w-px bg-border" />

          <Link href="/projects">Projects</Link>
        </div>
      </div>

      <div>theme toggle</div>
    </header>
  )
}
