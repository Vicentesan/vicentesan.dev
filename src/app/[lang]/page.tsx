'use client'

import { useState } from 'react'

import { Hero } from '@/components/hero'
import { QuoteModal } from '@/components/quote-modal'
import { Stats } from '@/components/stats'
import { ViewQuoteStatusModal } from '@/components/view-quote-status-modal'

export default function Home() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)
  const [isViewQuoteStatusModalOpen, setIsViewQuoteStatusModalOpen] =
    useState(false)

  return (
    <>
      <div className="min-h-screen text-zinc-100 selection:bg-purple-500/20 selection:text-purple-200">
        <div className="container mx-auto px-4 py-32">
          <div className="mx-auto max-w-5xl space-y-24">
            <Hero
              setIsQuoteModalOpen={setIsQuoteModalOpen}
              setIsViewQuoteStatusModalOpen={setIsViewQuoteStatusModalOpen}
            />

            <Stats />
          </div>
        </div>
      </div>

      <QuoteModal isOpen={isQuoteModalOpen} setIsOpen={setIsQuoteModalOpen} />
      <ViewQuoteStatusModal
        isOpen={isViewQuoteStatusModalOpen}
        setIsOpen={setIsViewQuoteStatusModalOpen}
      />
    </>
  )
}
