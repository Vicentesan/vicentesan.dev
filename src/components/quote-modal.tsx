'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import confetti from 'canvas-confetti'
import { CheckCircle2, Loader2 } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { trpc } from '@/lib/trpc'

import { StepCounter } from './steps-counter'

const firstStepFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z
    .string()
    .regex(
      /^\([0-9]{2}\) [0-9]{5}-[0-9]{4}$/,
      'Invalid phone format. Use (XX) XXXXX-XXXX',
    ),
  email: z.string().email('Invalid email address'),
  company: z.string().optional(),
  projectName: z.string().min(2, 'Project name must be at least 2 characters'),
})

const secondStepFormSchema = z.object({
  projectDetails: z
    .string()
    .min(10, 'Please provide more details about your project'),
  type: z.enum(['api', 'web', 'mobile', 'desktop', 'unfinished', 'other']),
  budget: z.enum(['1k', '2k', '3k', '5k', 'custom']),
  deliveryTime: z.enum(['short', 'normal', 'medium', 'flexible', 'urgent']),
})

const formSchema = z.object({
  ...firstStepFormSchema.shape,
  ...secondStepFormSchema.shape,
})

interface QuoteModalProps {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

export function QuoteModal({ isOpen, setIsOpen }: QuoteModalProps) {
  const [step, setStep] = useState<0 | 1 | 'done'>(0)
  const [isStepValid, setIsStepValid] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
  })

  const {
    watch,
    formState: { touchedFields, errors },
  } = form

  const formValues = watch()

  const validateCurrentStep = useCallback(() => {
    if (step === 0) {
      const { name, email, phone, projectName } = formValues
      const result = firstStepFormSchema.safeParse({
        name,
        email,
        phone,
        projectName,
        company: formValues.company || undefined,
      })
      setIsStepValid(result.success)
      return result.success
    }

    if (step === 1) {
      const { projectDetails, type, budget, deliveryTime } = formValues
      const result = secondStepFormSchema.safeParse({
        projectDetails,
        type,
        budget,
        deliveryTime,
      })
      setIsStepValid(result.success)
      return result.success
    }

    return false
  }, [formValues, step])

  useEffect(() => {
    validateCurrentStep()
  }, [validateCurrentStep, formValues])

  const {
    mutateAsync: createAsyncQuote,
    isPending,
    data,
  } = trpc.createQuote.useMutation()

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (step === 1) {
      try {
        await createAsyncQuote({
          ...values,
          details: values.projectDetails,
        })
        setStep('done')
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        })
      } catch (error) {
        console.error('Error submitting quote:', error)
      }
    }
  }

  const shouldShowError = useCallback(
    (fieldName: string) => {
      return (
        touchedFields[fieldName as keyof typeof touchedFields] &&
        errors[fieldName as keyof typeof errors]
      )
    },
    [touchedFields, errors],
  )

  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/\D/g, '')

    if (numbers.length <= 2) return numbers
    if (numbers.length <= 7)
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Request a Quote</DialogTitle>

          <StepCounter currentStep={step} />
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-4">
              {step === 0 && (
                <>
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
                        </FormControl>
                        {shouldShowError('name') && <FormMessage />}
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="your@email.com"
                            type="email"
                            {...field}
                          />
                        </FormControl>
                        {shouldShowError('email') && <FormMessage />}
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="(11) 99999-9999"
                            type="tel"
                            {...field}
                            onChange={(e) => {
                              const formatted = formatPhoneNumber(
                                e.target.value,
                              )
                              if (formatted.length <= 15) {
                                field.onChange(formatted)
                              }
                            }}
                          />
                        </FormControl>
                        {shouldShowError('phone') && <FormMessage />}
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="projectName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your project name" {...field} />
                        </FormControl>
                        {shouldShowError('projectName') && <FormMessage />}
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="Your company" {...field} />
                        </FormControl>
                        {shouldShowError('company') && <FormMessage />}
                      </FormItem>
                    )}
                  />
                </>
              )}

              {step === 1 && (
                <>
                  <FormField
                    control={form.control}
                    name="projectDetails"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project Details</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us more about your project..."
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        {shouldShowError('projectDetails') && <FormMessage />}
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="type"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project Type</FormLabel>
                        <FormControl>
                          <Select
                            onValueChange={field.onChange}
                            value={field.value}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select a project type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectItem value="api">API</SelectItem>
                                <SelectItem value="web">Web</SelectItem>
                                <SelectItem value="mobile">Mobile</SelectItem>
                                <SelectItem value="desktop">Desktop</SelectItem>
                                <SelectItem value="unfinished">
                                  Unfinished
                                </SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        {shouldShowError('type') && <FormMessage />}
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="budget"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Budget Range</FormLabel>
                        <FormControl>
                          <Select
                            onValueChange={field.onChange}
                            value={field.value}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select a budget range" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectItem value="1k">
                                  R$ 1.000 - R$ 2.000
                                </SelectItem>
                                <SelectItem value="2k">
                                  R$ 2.001 - R$ 3.000
                                </SelectItem>
                                <SelectItem value="3k">
                                  R$ 3.001 - R$ 5.000
                                </SelectItem>
                                <SelectItem value="5k">
                                  R$ 5.001 - R$ 7.000
                                </SelectItem>
                                <SelectItem value="custom">Custom</SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        {shouldShowError('budget') && <FormMessage />}
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="deliveryTime"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Expected Delivery Time</FormLabel>
                        <FormControl>
                          <Select
                            onValueChange={field.onChange}
                            value={field.value}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select a Delivery Time" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectItem value="short">
                                  2-3 weeks (short)
                                </SelectItem>
                                <SelectItem value="normal">
                                  2-3 months (normal)
                                </SelectItem>
                                <SelectItem value="medium">
                                  4-5 months (medium)
                                </SelectItem>
                                <SelectItem value="flexible">
                                  Flexible
                                </SelectItem>
                                <SelectItem value="urgent">Urgent</SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        {shouldShowError('deliveryTime') && <FormMessage />}
                      </FormItem>
                    )}
                  />
                </>
              )}

              {step === 'done' && (
                <div className="flex flex-col items-center justify-center gap-4 py-6">
                  <div>
                    <CheckCircle2 className="h-16 w-16 text-green-500" />
                  </div>
                  <h2 className="text-center text-2xl font-bold">
                    Quote Submitted
                  </h2>
                  <p className="text-center text-muted-foreground">
                    We'll get back to you shortly with a detailed quote.
                  </p>
                  <p>Your quote ID is: {data?.quoteId}</p>
                </div>
              )}
            </div>

            {step !== 'done' && (
              <div className="flex justify-between gap-2">
                {step > 0 && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      setStep(0)
                    }}
                  >
                    Previous
                  </Button>
                )}

                {step < 1 ? (
                  <Button
                    type="button"
                    className="w-full"
                    onClick={() => {
                      if (isStepValid) {
                        setStep(1)
                      }
                    }}
                    disabled={!isStepValid}
                  >
                    Next
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={!isStepValid || isPending}
                  >
                    {isPending && <Loader2 className="size-4 animate-spin" />}
                    Submit
                  </Button>
                )}
              </div>
            )}
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
