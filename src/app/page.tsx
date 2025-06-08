'use client'

import tesseractLogo from '@/assets/tesseract-logo.png'
import vicenteSanchez from '@/assets/vicentesan.jpg'
import { GithubLogo } from '@/components/logos/github-logo'
import { XLogo } from '@/components/logos/x'
import { ProfileImage } from '@/components/profile-img'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import { differenceInYears } from 'date-fns'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Home() {
  const birthDate = new Date('2009-04-18')
  const today = new Date()
  const age = differenceInYears(today, birthDate)

  return (
    <main className="mx-auto flex h-screen w-full max-w-7xl flex-col items-center justify-center">
      <div className="flex w-fit flex-col items-start gap-4 font-instrument-serif">
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
            filter: 'blur(4px)',
            pointerEvents: 'none',
          }}
          className="flex items-center justify-center gap-6"
          animate={{
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            pointerEvents: 'auto',
          }}
          transition={{ duration: 0.5 }}
        >
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="https://github.com/vicentesan"
                target="_blank"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="GitHub"
              >
                <GithubLogo className="size-4 sm:size-6" />
              </Link>
            </TooltipTrigger>
            <TooltipContent className="font-sans">
              Check out my GitHub
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="https://x.com/vicentesandev"
                target="_blank"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Twitter"
              >
                <XLogo className="size-4 sm:size-6" />
              </Link>
            </TooltipTrigger>
            <TooltipContent className="font-sans">
              Follow me on X/Twitter
            </TooltipContent>
          </Tooltip>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: 10,
            filter: 'blur(4px)',
            pointerEvents: 'none',
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            pointerEvents: 'auto',
          }}
          transition={{ duration: 0.5, delay: 1 * 0.2 }}
          className={cn(
            'flex flex-row items-center justify-start gap-2 text-foreground text-xl sm:text-3xl md:text-7xl'
          )}
        >
          <span className="text-muted-foreground">Hey,</span>
          <span>I&apos;m</span>
          <Tooltip>
            <TooltipTrigger>
              <ProfileImage image={vicenteSanchez} alt="Vicente Sanchez" />
            </TooltipTrigger>

            <TooltipContent className="font-sans">
              My Dinda Nata, aka Godmother Natalia, and I in Bariloche,
              Argentina.
            </TooltipContent>
          </Tooltip>
          <span>Vicente</span>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: 10,
            filter: 'blur(4px)',
            pointerEvents: 'none',
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            pointerEvents: 'auto',
          }}
          transition={{ duration: 0.5, delay: 2 * 0.2 }}
          className={cn(
            'flex flex-row items-center justify-start gap-2 font-instrument-serif text-foreground text-xl sm:text-3xl md:text-7xl'
          )}
        >
          <span className="text-muted-foreground">a {age}y/o swe building</span>
          <Tooltip>
            <Link
              href="https://x.com/usetesseract"
              target="_blank"
              className="flex flex-row items-center justify-center"
            >
              <TooltipTrigger>
                <ProfileImage image={tesseractLogo} aria-hidden />
              </TooltipTrigger>

              <span>Tesseract</span>
            </Link>
            <TooltipContent className="font-sans">
              Tesseract is a opensource web2 and web3 baas.
            </TooltipContent>
          </Tooltip>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: 10,
            filter: 'blur(4px)',
            pointerEvents: 'none',
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            pointerEvents: 'auto',
          }}
          transition={{ duration: 0.5, delay: 3 * 0.2 }}
          className={cn(
            'flex flex-row items-center justify-start gap-2 font-instrument-serif text-foreground text-xl sm:text-3xl md:text-7xl'
          )}
        >
          <span className="text-muted-foreground">currently based in</span>
          <span>São Paulo, 🇧🇷 Brazil</span>
        </motion.div>
      </div>
    </main>
  )
}
