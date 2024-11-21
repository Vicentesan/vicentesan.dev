'use client'

import { useSearchParams } from 'next/navigation'
import { useState } from 'react'

import { Hero } from '@/components/hero'
import { QuoteModal } from '@/components/quote-modal'
import { Stats } from '@/components/stats'
import { ViewQuoteStatusModal } from '@/components/view-quote-status-modal'

export default function Home() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)
  const [isViewQuoteStatusModalOpen, setIsViewQuoteStatusModalOpen] =
    useState(false)

  const searchParams = useSearchParams()
  const quoteId = searchParams.get('quoteId') ?? undefined
  return (
    <>
      <div className="min-h-[calc(100dvh-15rem)] text-zinc-100 selection:bg-purple-500/20 selection:text-purple-200">
        <div className="container mx-auto px-4 pt-32">
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
        quoteId={quoteId}
        onClose={() => setIsViewQuoteStatusModalOpen(false)}
      />
    </>
  )
}
