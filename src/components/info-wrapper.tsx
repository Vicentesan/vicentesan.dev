import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import Link from 'next/link'
import { useMediaQuery } from 'usehooks-ts'

export function InfoWrapper({
  children,
  content,
  link,
}: { children: React.ReactNode; content: string; link?: string }) {
  const isMobile = useMediaQuery('(max-width: 1023px)')

  if (isMobile) {
    return (
      <Popover>
        <PopoverTrigger asChild>
          {link ? (
            <Link href={link} target="_blank" rel="noopener noreferrer">
              {children}
            </Link>
          ) : (
            children
          )}
        </PopoverTrigger>
        <PopoverContent className="font-sans">{content}</PopoverContent>
      </Popover>
    )
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        {link ? (
          <Link href={link} target="_blank" rel="noopener noreferrer">
            {children}
          </Link>
        ) : (
          children
        )}
      </TooltipTrigger>
      <TooltipContent className="font-sans">{content}</TooltipContent>
    </Tooltip>
  )
}
