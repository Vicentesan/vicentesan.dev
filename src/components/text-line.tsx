'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface TextLineProps {
  children: ReactNode
  className?: string
  idx: number
}

export function TextLine({ children, className = '', idx }: TextLineProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ duration: 0.5, delay: idx * 0.2 }}
      className={cn(
        'flex flex-row items-center justify-start gap-2 font-instrument-serif text-7xl text-foreground',
        className
      )}
    >
      {children}
    </motion.div>
  )
}
