'use client'

import { getCookie } from 'cookies-next'
import { Loader2, TriangleAlertIcon } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { useLanguage } from '@/context/language'
import { trpc } from '@/lib/trpc'

import { AuthModal } from './auth-modal'
import { Input } from './ui/input'

interface ViewQuoteStatusModalProps {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

export function ViewQuoteStatusModal({
  isOpen,
  setIsOpen,
}: ViewQuoteStatusModalProps) {
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [quoteDetails, setQuoteDetails] = useState<{
    id: string
    createdAt: string
    projectName: string
    currentWebsite: string | null
    type: string
    budget: string
    customBudget: number | null
    additionalInfo: string | null
    deliveryTime: string
    status: string
  } | null>(null)

  const {
    data: session,
    isFetched,
    refetch,
  } = trpc.getSession.useQuery(
    { token: getCookie('auth_token') as string },
    {
      retry: false,
    },
  )

  const [quoteId, setQuoteId] = useState('')
  const [quoteCode, setQuoteCode] = useState('')

  const params = useSearchParams()

  useEffect(() => {
    const quoteId = params.get('quoteId')
    if (quoteId) {
      setQuoteId(quoteId)
    }

    const openModal = params.get('openModal')
    if (openModal) {
      setIsOpen(true)
    }
  }, [params, isOpen, setIsOpen])

  useEffect(() => {
    if (isFetched && !session?.user) {
      setShowAuthModal(true)
    }
  }, [isFetched, session])

  const { mutate: markQuoteAsUrgent, isPending: isMarkingQuoteAsUrgent } =
    trpc.markQuoteAsUrgent.useMutation()

  function markAsUrgent() {
    markQuoteAsUrgent({ id: quoteId ?? '' }, { onSuccess: () => refetch() })
  }

  const { dictionary, language } = useLanguage()

  const router = useRouter()

  const { data, isFetched: isQuoteFetched } = trpc.getQuoteById.useQuery({
    clientId: session?.user?.id ?? '',
    id: quoteCode ?? quoteId,
  })

  useEffect(() => {
    if (isQuoteFetched && data && 'quote' in data) {
      setQuoteDetails(data.quote)
    }
  }, [isQuoteFetched, data])

  useEffect(() => {
    if (isOpen === false) {
      router.push(`/${language}?quoteId=${quoteCode}`)
    }
  }, [setIsOpen, isOpen, router, language, quoteCode])

  if ((!session?.user || !session.user.id) && (quoteId || quoteCode)) {
    return (
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
      />
    )
  }

  if (!quoteId || !quoteCode) {
    return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Enter quote ID</DialogTitle>
          </DialogHeader>

          <Input
            placeholder="Quote ID"
            value={quoteCode}
            onChange={(e) => setQuoteCode(e.target.value)}
          />

          <Button
            onClick={() => router.push(`/${language}?quoteId=${quoteCode}`)}
          >
            Submit
          </Button>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>{dictionary.view_quote_status}</DialogTitle>
        </DialogHeader>

        {quoteDetails ? (
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div className="rounded-lg bg-muted/50 p-4">
                  <h3 className="mb-2 text-lg font-medium">Project Name</h3>
                  <p className="text-muted-foreground">
                    {quoteDetails.projectName}
                  </p>
                </div>

                {quoteDetails.currentWebsite && (
                  <div className="rounded-lg bg-muted/50 p-4">
                    <h3 className="mb-2 text-lg font-medium">
                      Current Website
                    </h3>
                    <p className="text-muted-foreground">
                      {quoteDetails.currentWebsite}
                    </p>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg bg-muted/50 p-4">
                    <h3 className="mb-2 text-lg font-medium">Project Type</h3>
                    <p className="capitalize text-muted-foreground">
                      {quoteDetails.type}
                    </p>
                  </div>

                  <div className="rounded-lg bg-muted/50 p-4">
                    <h3 className="mb-2 text-lg font-medium">Budget Range</h3>
                    <p className="capitalize text-muted-foreground">
                      {quoteDetails.budget}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg bg-muted/50 p-4">
                    <h3 className="mb-2 text-lg font-medium">Delivery Time</h3>
                    <p className="capitalize text-muted-foreground">
                      {quoteDetails.deliveryTime}
                    </p>
                  </div>

                  <div className="rounded-lg bg-muted/50 p-4">
                    <h3 className="mb-2 text-lg font-medium">Status</h3>
                    <div className="flex items-center gap-2">
                      <div
                        className={`h-3 w-3 rounded-full ${
                          quoteDetails.status === 'pending'
                            ? 'bg-yellow-500'
                            : quoteDetails.status === 'accepted'
                              ? 'bg-green-500'
                              : quoteDetails.status === 'rejected'
                                ? 'bg-red-500'
                                : 'bg-blue-500'
                        }`}
                      />
                      <p className="capitalize text-muted-foreground">
                        {quoteDetails.status}
                      </p>
                    </div>
                  </div>
                </div>

                {quoteDetails.additionalInfo && (
                  <div className="rounded-lg bg-muted/50 p-4">
                    <h3 className="mb-2 text-lg font-medium">
                      Additional Info
                    </h3>
                    <p className="whitespace-pre-wrap text-muted-foreground">
                      {quoteDetails.additionalInfo}
                    </p>
                  </div>
                )}

                {quoteDetails.deliveryTime !== 'urgent' && (
                  <Button
                    onClick={markAsUrgent}
                    className="w-full"
                    variant="destructive"
                    disabled={isMarkingQuoteAsUrgent}
                  >
                    {isMarkingQuoteAsUrgent ? (
                      <>
                        <Loader2 className="size-4 animate-spin" />
                        Mark as urgent
                      </>
                    ) : (
                      <>
                        <TriangleAlertIcon className="size-4" />
                        Mark as urgent
                      </>
                    )}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4 text-center">
            <Loader2 className="mx-auto size-8 animate-spin text-muted-foreground" />
            <p className="text-muted-foreground">Loading Quotes</p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
