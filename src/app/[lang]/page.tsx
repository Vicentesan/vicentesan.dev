import { NavigationIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="mt-60 flex h-fit w-fit flex-col items-start gap-2">
      <div>
        <h1 className="text-5xl">
          Hey there 👋, <br /> I'm Vicente Sanchez
        </h1>

        <p>And I'm here to help you build your next solution</p>
      </div>

      <Button variant="outline" className="flex w-full items-center gap-2">
        <NavigationIcon className="size-4" />
        Start your experience
      </Button>
    </div>
  )
}
