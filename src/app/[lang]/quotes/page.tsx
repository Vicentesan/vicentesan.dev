'use client'

import { motion } from 'framer-motion'
import { Loader2 } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

import { QuoteModal } from '@/components/quote-modal'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { ViewQuoteStatusModal } from '@/components/view-quote-status-modal'
import { useLanguage } from '@/context/language'
import { trpc } from '@/lib/trpc'

export default function AllQuotesPage() {
  const router = useRouter()
  const { language } = useLanguage()
  const searchParams = useSearchParams()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const [showQuoteModal, setShowQuoteModal] = useState(false)

  const quoteId = searchParams.get('quoteId')

  const [email, setEmail] = useState('')

  const { data: quotesData, isLoading: isLoadingQuotes } =
    trpc.getQuotes.useQuery(
      { email },
      {
        enabled: !!email,
      },
    )

  useEffect(() => {
    if (quoteId) {
      setIsModalOpen(true)
    }
  }, [quoteId])

  const handleOpenModal = (id: string) => {
    const url = new URL(window.location.href)
    url.searchParams.set('quoteId', id)
    router.replace(url.toString())
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  if (isLoadingQuotes) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex min-h-[80vh] items-center justify-center"
      >
        <div className="space-y-4 text-center">
          <Loader2 className="mx-auto size-8 animate-spin text-muted-foreground" />
          <h2 className="text-2xl font-semibold">Loading your quotes...</h2>
          <p className="text-muted-foreground">Please wait a moment</p>
        </div>
      </motion.div>
    )
  }

  if (quotesData && !('quotes' in quotesData)) {
    return (
      <>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex min-h-[80vh] items-center justify-center p-4"
        >
          <Card className="w-full max-w-lg">
            <CardHeader className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <CardTitle className="text-2xl">No Quotes Found</CardTitle>
                <CardDescription className="mt-2 text-base">
                  You haven't created any quotes yet.
                </CardDescription>
              </motion.div>
            </CardHeader>
            <CardContent className="flex justify-center">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col gap-4"
              >
                <Button
                  onClick={() => setShowQuoteModal(true)}
                  className="w-full"
                >
                  Create Your First Quote
                </Button>

                <div className="flex items-center gap-2">
                  <Input
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Button>Find my quotes</Button>
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        <QuoteModal
          isOpen={showQuoteModal}
          setIsOpen={() => setShowQuoteModal(false)}
        />
      </>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto min-h-screen px-4 py-8"
    >
      <div className="mx-auto max-w-4xl space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-2"
        >
          <h1 className="text-3xl font-bold">Your Quotes</h1>
          <p className="text-muted-foreground">
            View and manage all your quotes in one place
          </p>
        </motion.div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {quotesData?.quotes.map((quote, index) => (
            <motion.div
              key={quote.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <AccordionItem
                value={quote.id}
                className="rounded-lg border bg-background px-6"
              >
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex flex-col items-start gap-1">
                    <div className="flex items-center gap-4">
                      <span className="font-semibold">{quote.projectName}</span>
                      <div
                        className={`rounded-full px-2 py-1 text-xs ${
                          quote.status === 'pending'
                            ? 'bg-yellow-100 text-yellow-800'
                            : quote.status === 'accepted'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {quote.status}
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      Created on{' '}
                      {new Date(quote.createdAt).toLocaleDateString(language, {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-2 pt-4">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <h3 className="font-medium">Project Details</h3>
                      <div className="space-y-1 text-sm">
                        <p>
                          <span className="text-muted-foreground">Type:</span>{' '}
                          <span className="capitalize">{quote.type}</span>
                        </p>
                        {quote.currentWebsite && (
                          <p>
                            <span className="text-muted-foreground">
                              Website:
                            </span>{' '}
                            {quote.currentWebsite}
                          </p>
                        )}
                        <p>
                          <span className="text-muted-foreground">Budget:</span>{' '}
                          {quote.budget === '1k'
                            ? 'R$ 1.000 - R$ 2.000'
                            : quote.budget === '2k'
                              ? 'R$ 2.001 - R$ 3.000'
                              : quote.budget === '3k'
                                ? 'R$ 3.001 - R$ 5.000'
                                : quote.budget === '5k'
                                  ? 'R$ 5.001 - R$ 7.000'
                                  : 'Custom'}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-medium">Timeline</h3>
                      <div className="space-y-1 text-sm">
                        <p>
                          <span className="text-muted-foreground">
                            Delivery Time:
                          </span>{' '}
                          {quote.deliveryTime === 'short'
                            ? '2-3 weeks'
                            : quote.deliveryTime === 'normal'
                              ? '2-3 months'
                              : quote.deliveryTime === 'medium'
                                ? '4-5 months'
                                : quote.deliveryTime === 'flexible'
                                  ? 'Flexible'
                                  : 'Urgent'}
                        </p>
                      </div>
                    </div>
                  </div>

                  {quote.additionalInfo && (
                    <div className="mt-4 space-y-2">
                      <h3 className="font-medium">Additional Information</h3>
                      <p className="whitespace-pre-wrap text-sm">
                        {quote.additionalInfo}
                      </p>
                    </div>
                  )}

                  <div className="mt-4 flex justify-end">
                    <Button
                      variant="outline"
                      onClick={() => handleOpenModal(quote.id)}
                    >
                      View Details
                    </Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>

      <ViewQuoteStatusModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        quoteId={quoteId || ''}
      />
    </motion.div>
  )
}
