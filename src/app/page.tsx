'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import { cn } from '@/lib/utils'
import { crafts } from '@/utils/crafts'
import { formatItemDate } from '@/utils/format-item-date'
import { posts } from '@/utils/posts'

export default function Home() {
  const [hoveredPost, setHoveredPost] = useState<string | null>(null)

  return (
    <div className="flex w-full flex-col gap-8 px-4 font-serif transition-all duration-300 md:gap-16 md:px-0">
      <div
        className={cn(
          'flex flex-col gap-6 transition-all duration-500 md:gap-10',
          hoveredPost ? 'opacity-70 blur-[1px]' : '',
        )}
      >
        <h1 className="text-foreground w-fit text-3xl md:text-4xl">
          Vicente Sanchez
        </h1>

        <div className="relative h-48 w-full sm:h-56 md:h-64">
          <Image
            src="/vicente-san-grayscale.png"
            alt="Vicente Sanchez"
            fill
            className="rounded-md object-cover"
          />
        </div>

        <p className="text-muted-foreground text-base font-medium md:text-lg">
          Hello, I&apos;m Vicente, a{' '}
          <span className="text-foreground">Full Stack Developer</span> based in
          Brazil.
        </p>

        <p className="text-muted-foreground text-base font-medium md:text-lg">
          I&apos;m passionate about{' '}
          <span className="text-foreground">minimalism</span>,{' '}
          <span className="text-foreground">dark mode</span>,{' '}
          <span className="text-foreground">open-source</span>, and Bitcoin,
          combining these interests to create streamlined and impactful digital
          experiences. Since starting my journey during the pandemic, I&apos;ve
          been dedicated to crafting innovative and efficient solutions that
          align with my love for technology and open collaboration.
        </p>

        <p className="text-muted-foreground text-base font-medium md:text-lg">
          Currently, I&apos;m building{' '}
          <Link
            href="https://github.com/usetesseractdotco"
            className="text-foreground underline-offset-4 hover:underline"
          >
            Tesseract
          </Link>
          , an <span className="text-foreground">open-source platform</span>{' '}
          designed to integrate{' '}
          <span className="text-foreground">
            web2 and blockchain with seamless efficiency
          </span>
          , providing a robust backend-as-a-service. i&apos;ve shifted my focus
          to this project, channeling my passion for transparency and innovation
          into a tool that simplifies the complex.
        </p>
      </div>

      <div className="flex flex-col gap-6 md:gap-10">
        <div className="flex flex-row items-center justify-center gap-2">
          <span className="text-muted-foreground text-base font-medium md:text-lg">
            Craft
          </span>
          <span className="bg-muted-foreground h-px w-full" />
        </div>

        <ul className="flex flex-col items-start justify-start gap-4 md:gap-6">
          {crafts.map((craft) => (
            <li
              key={craft.href}
              className={cn(
                'relative z-10 flex w-full flex-col items-start justify-between gap-2 rounded-md transition-all duration-300 ease-out will-change-transform sm:flex-row sm:items-center',
                hoveredPost === craft.href
                  ? 'bg-accent/40 ring-accent/50 -translate-y-[3px] scale-[1.03] opacity-100 shadow-md ring-1'
                  : hoveredPost
                    ? 'opacity-70 blur-[1px]'
                    : 'opacity-100',
                'hover:bg-accent/10 -m-2 p-2',
              )}
              onMouseEnter={() => setHoveredPost(craft.href)}
              onMouseLeave={() => setHoveredPost(null)}
            >
              <Link
                href={craft.href}
                className="flex w-full flex-col gap-3 sm:flex-row sm:items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-2">
                  <span className="text-foreground font-sans text-sm font-medium md:text-base">
                    {craft.name}
                  </span>

                  <span className="text-muted-foreground font-mono text-xs md:text-sm">
                    {craft.description}
                  </span>
                </div>

                <div className="border-muted-foreground my-2 w-full border-t border-dashed sm:my-0 sm:w-auto sm:flex-1" />

                <div className="flex items-center">
                  <span className="text-muted-foreground font-mono text-xs md:text-sm">
                    {craft.date}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-6 md:gap-10">
        <div className="flex flex-row items-center justify-center gap-2">
          <span className="text-muted-foreground text-base font-medium md:text-lg">
            Writing
          </span>
          <span className="bg-muted-foreground h-px w-full" />
        </div>

        <ul className="flex flex-col items-start justify-start gap-4 md:gap-6">
          {posts.slice(0, 5).map((post) => (
            <li
              key={post.slug}
              className={cn(
                'relative z-10 flex w-full flex-col items-start justify-between gap-2 rounded-md transition-all duration-300 ease-out will-change-transform sm:flex-row sm:items-center',
                hoveredPost === post.slug
                  ? 'bg-accent/40 ring-accent/50 -translate-y-[3px] scale-[1.03] opacity-100 shadow-md ring-1'
                  : hoveredPost
                    ? 'opacity-70 blur-[1px]'
                    : 'opacity-100',
                'hover:bg-accent/10 -m-2 p-2',
              )}
              onMouseEnter={() => setHoveredPost(post.slug)}
              onMouseLeave={() => setHoveredPost(null)}
              style={{
                transform: hoveredPost === post.slug ? 'translateZ(0)' : '',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                boxShadow:
                  hoveredPost === post.slug
                    ? '0 0 15px rgba(var(--accent), 0.15)'
                    : 'none',
              }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="flex w-full flex-col gap-2 sm:flex-row"
              >
                <div className="flex flex-1 flex-row items-center gap-2 whitespace-normal">
                  <span className="text-foreground font-sans text-sm md:text-base">
                    {post.title}
                  </span>
                </div>

                <div className="mt-1 flex items-center gap-2 sm:mt-0">
                  <span className="border-muted-foreground hidden h-px w-16 border-b border-dashed sm:block sm:w-full" />

                  <span className="text-muted-foreground font-mono text-xs md:text-sm">
                    {formatItemDate({
                      date: post.date,
                    })}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
