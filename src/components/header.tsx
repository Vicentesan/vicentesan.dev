import Link from 'next/link'

export function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex flex-row items-center justify-center gap-4">
        <Link href="/" className="text-2xl">
          Vicente Sanchez
        </Link>

        <span className="bg-muted-foreground size-1 rounded-full" />

        <div className="flex items-center gap-2 text-2xl">
          <Link href="/">Home</Link>

          <span className="bg-border h-6 w-px" />

          <Link href="/about">About</Link>

          <span className="bg-border h-6 w-px" />

          <Link href="/projects">Projects</Link>
        </div>
      </div>

      <div>theme toggle</div>
    </header>
  )
}
