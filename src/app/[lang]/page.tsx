'use client'

import { useState } from 'react'

import { Hero } from '@/components/hero'
import { QuoteButton } from '@/components/quote-button'
import { Stats } from '@/components/stats'

export default function Home() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)

  return (
    <>
      <div className="min-h-screen text-zinc-100 selection:bg-purple-500/20 selection:text-purple-200">
        <div className="container mx-auto px-4 py-32">
          <div className="mx-auto max-w-5xl space-y-24">
            <Hero />

            <Stats />
          </div>
        </div>
      </div>

      <QuoteButton setIsQuoteModalOpen={setIsQuoteModalOpen} />
    </>
  )
}
