import Link from 'next/link'

import { ThemeToggle } from './ui/theme-toogle'

export function Footer() {
  return (
    <footer className="flex flex-col gap-4 text-neutral-600 sm:flex-row sm:justify-between dark:text-neutral-400">
      <div className="flex flex-row items-center justify-center gap-2 sm:justify-start">
        <span className="text-center sm:text-left">
          Copyright {new Date().getFullYear()} · Made by Vicente
        </span>

        <span className="text-center sm:text-left">·</span>

        <ThemeToggle />
      </div>

      <div className="flex flex-row justify-center gap-2 sm:justify-end">
        <div>
          <Link
            href="mailto:hello@vicentesan.dev"
            target="_blank"
            className="text-sm text-neutral-900 underline underline-offset-4 sm:text-base dark:text-neutral-50"
          >
            Mail
          </Link>
        </div>
        <span className="text-sm text-neutral-600 sm:text-base dark:text-neutral-400">
          ::
        </span>
        <div>
          <Link
            href="https://github.com/vicentesan"
            target="_blank"
            className="text-sm text-neutral-900 underline underline-offset-4 sm:text-base dark:text-neutral-50"
          >
            Github
          </Link>
        </div>
        <span className="text-sm text-neutral-600 sm:text-base dark:text-neutral-400">
          ::
        </span>
        <div>
          <Link
            href="https://x.com/vicentesandev"
            target="_blank"
            className="text-sm text-neutral-900 underline underline-offset-4 sm:text-base dark:text-neutral-50"
          >
            Twitter
          </Link>
        </div>
        <span className="text-sm text-neutral-600 sm:text-base dark:text-neutral-400">
          ::
        </span>
        <div>
          <Link
            href="https://instagram.com/vicentesan.dev"
            target="_blank"
            className="text-sm text-neutral-900 underline underline-offset-4 sm:text-base dark:text-neutral-50"
          >
            Instagram
          </Link>
        </div>
      </div>
    </footer>
  )
}
