import Link from 'next/link'

export function Footer() {
  return (
    <footer className="flex flex-col gap-4 text-neutral-400 sm:flex-row sm:justify-between">
      <span className="text-center sm:text-left">
        Copyright {new Date().getFullYear()} · Made by Vicente
      </span>

      <div className="flex flex-row justify-center gap-2 sm:justify-end">
        <div>
          <Link
            href="mailto:hello@vicentesan.dev"
            target="_blank"
            className="text-sm text-neutral-50 underline underline-offset-4 sm:text-base"
          >
            Mail
          </Link>
        </div>
        <span className="text-sm sm:text-base">::</span>
        <div>
          <Link
            href="https://x.com/vicentesan"
            target="_blank"
            className="text-sm text-neutral-50 underline underline-offset-4 sm:text-base"
          >
            Twitter
          </Link>
        </div>
        <span className="text-sm sm:text-base">::</span>
        <div>
          <Link
            href="https://instagram.com/vicentesan.dev"
            target="_blank"
            className="text-sm text-neutral-50 underline underline-offset-4 sm:text-base"
          >
            Instagram
          </Link>
        </div>
      </div>
    </footer>
  )
}
