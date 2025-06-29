'use client'

import brazilFlag from '@/assets/brazil.png'
import tesseractLogo from '@/assets/tesseract-logo.png'
import vicenteSanchez from '@/assets/vicentesan.jpg'
import { InfoWrapper } from '@/components/info-wrapper'
import { GithubLogo } from '@/components/logos/github-logo'
import { XLogo } from '@/components/logos/x'
import { ProfileImage } from '@/components/profile-img'
import { cn } from '@/lib/utils'
import { differenceInYears } from 'date-fns'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useMediaQuery } from 'usehooks-ts'

export default function Home() {
  const birthDate = new Date('2009-04-18')
  const today = new Date()
  const age = differenceInYears(today, birthDate)
  const isMobile = useMediaQuery('(max-width: 767px)')

  return (
    <main className="mx-auto mt-20 flex h-screen w-full max-w-7xl flex-col items-center justify-start md:mt-0 md:justify-center">
      <div className="flex w-fit flex-col items-start gap-2 font-instrument-serif lg:gap-4">
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
          <InfoWrapper
            link="https://github.com/vicentesan"
            content="Check out my GitHub"
          >
            <GithubLogo className="size-4 sm:size-6" />
          </InfoWrapper>

          <InfoWrapper
            link="https://x.com/vicentesandev"
            content="Follow me on X/Twitter"
          >
            <XLogo className="size-4 sm:size-6" />
          </InfoWrapper>
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
            'flex flex-row items-center justify-start gap-0.5 text-foreground text-xl sm:text-3xl md:gap-2 lg:text-7xl'
          )}
        >
          <span className="text-muted-foreground">Hey,</span>
          <span>I&apos;m</span>
          <InfoWrapper content="My Dinda Nata, aka Godmother Natalia, and I in Bariloche, Argentina.">
            <ProfileImage image={vicenteSanchez} alt="Vicente Sanchez" />
          </InfoWrapper>
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
            'flex flex-row items-center justify-start gap-0.5 font-instrument-serif text-foreground text-xl sm:text-3xl md:gap-2 lg:text-7xl'
          )}
        >
          <span className="text-muted-foreground">a {age}y/o swe building</span>
          <InfoWrapper
            content="Tesseract is a opensource web2 and web3 baas."
            link="https://x.com/usetesseract"
          >
            <ProfileImage image={tesseractLogo} aria-hidden />
          </InfoWrapper>
          <span>Tesseract</span>
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
            'flex flex-row items-center justify-start gap-2 font-instrument-serif text-foreground text-xl sm:text-3xl lg:text-7xl'
          )}
        >
          <span className="text-muted-foreground">currently based in</span>
          <span>São Paulo, </span>
          <Image
            src={brazilFlag}
            alt="Brazil"
            className="pointer-events-none size-8 select-none sm:size-12 lg:size-24"
          />
          <span>Brazil</span>
        </motion.div>
      </div>
    </main>
  )
}
