import { cn } from '@/lib/utils'

export function StepCounter({ currentStep }: { currentStep: 0 | 1 | 'done' }) {
  return (
    <div className="flex items-center justify-center gap-2">
      <div
        className={cn('h-4 w-full rounded-md bg-primary', {
          'bg-green-400/80': currentStep === 'done',
          'bg-primary/60': currentStep === 0,
          'bg-primary/100': currentStep === 1,
        })}
      />
      <div
        className={cn('h-4 w-full rounded-md', {
          'bg-green-400/80': currentStep === 'done',
          'bg-primary/60': currentStep === 1,
          'bg-secondary': currentStep === 0,
        })}
      />
    </div>
  )
}
