'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useLanguage } from '@/context/language'

const formSchema = z.object({
  quoteId: z.string().min(1, 'Quote ID is required'),
})

interface ViewQuoteStatusModalProps {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

export function ViewQuoteStatusModal({
  isOpen,
  setIsOpen,
}: ViewQuoteStatusModalProps) {
  const [isPending, setIsPending] = useState(false)
  const [showForm, setShowForm] = useState(true)
  const [quoteData, setQuoteData] = useState<{
    id: string
    name: string
    email: string
    company?: string
    projectDetails: string
    budget: string
    deliveryTime: string
    status: 'pending' | 'approved' | 'rejected'
    createdAt: string
  } | null>(null)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      quoteId: '',
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setIsPending(true)
      // Here you would fetch the quote data from your API
      // For now, simulating with mock data
      const mockData = {
        id: values.quoteId,
        name: 'John Doe',
        email: 'john@example.com',
        company: 'Example Corp',
        projectDetails: 'Website development project',
        budget: '5k',
        deliveryTime: 'normal',
        status: 'pending' as const,
        createdAt: new Date().toISOString(),
      }

      setQuoteData(mockData)
      setShowForm(false)
    } catch (error) {
      console.error('Error fetching quote:', error)
    } finally {
      setIsPending(false)
    }
  }

  const { dictionary } = useLanguage()

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent
        className={showForm ? 'sm:max-w-[425px]' : 'sm:max-w-[600px]'}
      >
        <DialogHeader>
          <DialogTitle>{dictionary.view_quote_status}</DialogTitle>
        </DialogHeader>

        {showForm ? (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="quoteId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Quote ID</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your quote ID" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full" disabled={isPending}>
                {isPending ? 'Loading...' : 'Check Status'}
              </Button>
            </form>
          </Form>
        ) : (
          quoteData && (
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div className="rounded-lg bg-muted/50 p-4">
                    <h3 className="mb-2 text-lg font-medium">Status</h3>
                    <div className="flex items-center gap-2">
                      <div
                        className={`h-3 w-3 rounded-full ${
                          quoteData.status === 'pending'
                            ? 'bg-yellow-500'
                            : quoteData.status === 'approved'
                              ? 'bg-green-500'
                              : 'bg-red-500'
                        }`}
                      />
                      <p className="capitalize text-muted-foreground">
                        {quoteData.status}
                      </p>
                    </div>
                  </div>

                  <div className="rounded-lg bg-muted/50 p-4">
                    <h3 className="mb-2 text-lg font-medium">
                      Project Details
                    </h3>
                    <p className="text-muted-foreground">
                      {quoteData.projectDetails}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-lg bg-muted/50 p-4">
                      <h3 className="mb-2 text-lg font-medium">Budget</h3>
                      <p className="capitalize text-muted-foreground">
                        {quoteData.budget}
                      </p>
                    </div>

                    <div className="rounded-lg bg-muted/50 p-4">
                      <h3 className="mb-2 text-lg font-medium">
                        Delivery Time
                      </h3>
                      <p className="capitalize text-muted-foreground">
                        {quoteData.deliveryTime}
                      </p>
                    </div>
                  </div>

                  <div className="rounded-lg bg-muted/50 p-4">
                    <h3 className="mb-2 text-lg font-medium">Contact Info</h3>
                    <div className="space-y-2">
                      <p className="text-muted-foreground">{quoteData.name}</p>
                      <p className="text-muted-foreground">{quoteData.email}</p>
                      {quoteData.company && (
                        <p className="text-muted-foreground">
                          {quoteData.company}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        )}
      </DialogContent>
    </Dialog>
  )
}
