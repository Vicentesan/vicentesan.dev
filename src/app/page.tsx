'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import { posts } from '@/blog/posts'
import { cn } from '@/lib/utils'
import { formatItemDate } from '@/utils/format-item-date'

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
          Hello, <span className="text-foreground">I&apos;m Vicente</span>, a{' '}
          <span className="text-foreground">Full Stack Developer</span> based in
          Brazil.
        </p>

        <p className="text-muted-foreground text-base font-medium md:text-lg">
          I&apos;m{' '}
          <span className="text-foreground">passionate about minimalism</span>,{' '}
          <span className="text-foreground">dark mode</span>,{' '}
          <span className="text-foreground">open-source</span>, and{' '}
          <span className="text-foreground">Bitcoin</span>,{' '}
          <span className="text-foreground">
            combining these interests to create
          </span>{' '}
          streamlined and{' '}
          <span className="text-foreground">impactful digital experiences</span>
          . Since starting my journey during the pandemic, I&apos;ve been{' '}
          <span className="text-foreground">
            dedicated to crafting innovative and efficient solutions
          </span>{' '}
          that align{' '}
          <span className="text-foreground">
            with my love for technology and open collaboration
          </span>
          .
        </p>

        <p className="text-muted-foreground text-base font-medium md:text-lg">
          Currently,{' '}
          <span className="text-foreground">
            I&apos;m building{' '}
            <Link
              href="https://palmaresjs.com/"
              className="text-foreground underline-offset-4 hover:underline"
            >
              Palmares
            </Link>
          </span>
          , <span className="text-foreground">a TypeScript framework</span>{' '}
          designed{' '}
          <span className="text-foreground">to unify the JS ecosystem</span> and
          provide a{' '}
          <span className="text-foreground">
            100% type-safe backend solution
          </span>
          , <span className="text-foreground">aiming to surpass NestJS</span>.
          I&apos;ve transitioned from broad freelance work to focus solely on
          this project,{' '}
          <span className="text-foreground">
            which embodies my fundamental principles through its innovative
            approach
          </span>
          .
        </p>
      </div>

      <div className="flex flex-col gap-6 md:gap-10">
        <div className="flex flex-row items-center justify-center gap-2">
          <span className="text-muted-foreground text-base font-medium md:text-lg">
            Writing
          </span>
          <span className="bg-muted-foreground h-px w-full" />
        </div>

        <ul className="flex flex-col items-start justify-start gap-4 md:gap-6">
          {posts.map((post) => (
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
