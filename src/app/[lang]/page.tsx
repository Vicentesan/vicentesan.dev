import React from 'react'

import { Hero } from '@/components/hero'
import { Stats } from '@/components/stats'

export default function Home() {
  return (
    <div className="min-h-screen text-zinc-100 selection:bg-teal-500/20 selection:text-teal-200">
      <div className="container mx-auto px-4 py-32">
        <div className="mx-auto max-w-5xl space-y-24">
          <Hero />
          <Stats />
        </div>
      </div>
    </div>
  )
}
