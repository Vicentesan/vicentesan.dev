'use client'

import { Share2 } from 'lucide-react'
import Image from 'next/image'
import { toast } from 'sonner'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from './ui/breadcrumb'
import { Button } from './ui/button'

export function BlogHeader({
  title,
  date,
  slug,
}: {
  title: string
  date: string
  slug: string
}) {
  const displayTitle = title.replace(/&apos;/g, "'")

  return (
    <div className="flex flex-col gap-1 md:gap-2">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>/</BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>/</BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage>{displayTitle}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-col gap-3 md:gap-4">
        <h1 className="mt-6 text-2xl font-bold sm:mt-8 sm:text-3xl md:mt-10 md:text-4xl">
          {displayTitle}
        </h1>

        <div className="flex max-w-[596px] flex-row justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/vicente-san-grayscale.png"
              alt="Vicente Sanchez"
              width={400}
              height={400}
              priority
              className="ring-muted hover:ring-primary size-10 rounded-full object-cover ring-2 transition-all duration-300 hover:scale-105"
            />
            <div className="flex flex-col">
              <p className="text-sm font-medium sm:text-base">
                Vicente Sanchez
              </p>
              <p className="text-muted-foreground text-xs sm:text-sm">{date}</p>
            </div>
          </div>

          <div>
            <Button
              className="bg-emerald-500/20 text-emerald-500 ring-[1.5px] ring-emerald-500/40 hover:bg-emerald-500/30"
              onClick={() => {
                navigator.clipboard.writeText(
                  `${window.location.origin}/blog/${slug}`,
                )

                toast.success('Link copied to clipboard')
              }}
            >
              <Share2 className="size-4" />
              Share
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
