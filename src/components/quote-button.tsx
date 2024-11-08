'use client'

/** import {  motion , useAnimation, Variants } from 'framer-motion' */
import { CircleDollarSignIcon } from 'lucide-react'

import { useLanguage } from '@/context/language'

import { Button } from './ui/button'

// const dollarMainVariants: Variants = {
//   normal: {
//     opacity: 1,
//     pathLength: 1,
//     transition: {
//       duration: 0.4,
//       opacity: { duration: 0.1 },
//     },
//   },
//   animate: {
//     opacity: [0, 1],
//     pathLength: [0, 1],
//     transition: {
//       duration: 0.6,
//       opacity: { duration: 0.1 },
//     },
//   },
// }

// const dollarSecondaryVariants: Variants = {
//   normal: {
//     opacity: 1,
//     pathLength: 1,
//     pathOffset: 0,
//     transition: {
//       delay: 0.3,
//       duration: 0.3,
//       opacity: { duration: 0.1, delay: 0.3 },
//     },
//   },
//   animate: {
//     opacity: [0, 1],
//     pathLength: [0, 1],
//     pathOffset: [1, 0],
//     transition: {
//       delay: 0.5,
//       duration: 0.4,
//       opacity: { duration: 0.1, delay: 0.5 },
//     },
//   },
// }

interface QuoteButtonProps {
  setIsQuoteModalOpen: (isOpen: boolean) => void
  setIsViewQuoteStatusModalOpen: (isOpen: boolean) => void
}

export function QuoteButton({
  setIsQuoteModalOpen,
  setIsViewQuoteStatusModalOpen,
}: QuoteButtonProps) {
  // const controls = useAnimation()

  const { dictionary } = useLanguage()

  return (
    <div className="flex w-[238px] flex-col items-center justify-center gap-2 xs:w-[498px]">
      <Button className="w-full" onClick={() => setIsQuoteModalOpen(true)}>
        <div
          className="group flex items-center justify-center gap-2 transition-colors duration-200"
          // onMouseEnter={() => {
          //   controls.start('animate')
          // }}
          // onMouseLeave={() => {
          //   controls.start('normal')
          // }}
        >
          {dictionary.ask_for_a_quote}

          {/* <svg
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
        </svg> */}

          <CircleDollarSignIcon className="size-4" />
        </div>
      </Button>

      <button
        onClick={() => setIsViewQuoteStatusModalOpen(true)}
        className="relative inline-block w-fit text-muted-foreground after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-400 after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100"
      >
        <span className="text-center">{dictionary.view_quote_status}</span>
      </button>
    </div>
  )
}
