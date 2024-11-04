'use client'

import { motion, useAnimation, Variants } from 'framer-motion'
import Link from 'next/link'

import { useLanguage } from '@/context/language'

import { Button } from './ui/button'

const dollarMainVariants: Variants = {
  normal: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 0.4,
      opacity: { duration: 0.1 },
    },
  },
  animate: {
    opacity: [0, 1],
    pathLength: [0, 1],
    transition: {
      duration: 0.6,
      opacity: { duration: 0.1 },
    },
  },
}

const dollarSecondaryVariants: Variants = {
  normal: {
    opacity: 1,
    pathLength: 1,
    pathOffset: 0,
    transition: {
      delay: 0.3,
      duration: 0.3,
      opacity: { duration: 0.1, delay: 0.3 },
    },
  },
  animate: {
    opacity: [0, 1],
    pathLength: [0, 1],
    pathOffset: [1, 0],
    transition: {
      delay: 0.5,
      duration: 0.4,
      opacity: { duration: 0.1, delay: 0.5 },
    },
  },
}

const textVariants: Variants = {
  hidden: {
    opacity: 0,
    width: 0,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
  visible: {
    opacity: 1,
    width: 'auto',
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
}

interface QuoteButtonProps {
  setIsQuoteModalOpen: (isOpen: boolean) => void
}

export function QuoteButton({ setIsQuoteModalOpen }: QuoteButtonProps) {
  const controls = useAnimation()
  const textControls = useAnimation()

  const { dictionary } = useLanguage()

  return (
    <div className="absolute bottom-4 right-4">
      <Button
        asChild
        className="animate-pulse rounded-full hover:animate-none"
        onClick={() => setIsQuoteModalOpen(true)}
      >
        <Link href="/quotes">
          <div
            className="group flex cursor-pointer select-none items-center justify-center rounded-md transition-colors duration-200"
            onMouseEnter={() => {
              controls.start('animate')
              textControls.start('visible')
            }}
            onMouseLeave={() => {
              controls.start('normal')
              textControls.start('hidden')
            }}
          >
            <motion.span
              initial="hidden"
              animate={textControls}
              variants={textVariants}
              className="overflow-hidden whitespace-nowrap group-hover:mr-2"
            >
              {dictionary.ask_for_a_quote}
            </motion.span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <motion.path
                d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"
                initial="normal"
                animate={controls}
                variants={dollarMainVariants}
              />
              <motion.path
                d="M12 18V6"
                initial="normal"
                animate={controls}
                variants={dollarSecondaryVariants}
              />
            </svg>
          </div>
        </Link>
      </Button>
    </div>
  )
}
