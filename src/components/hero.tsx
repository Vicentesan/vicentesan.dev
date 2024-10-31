'use client'

import { ArrowUpRight, Mail } from 'lucide-react'
import Link from 'next/link'

import { Icons } from './icons'
import { Button } from './ui/button'

export function Hero() {
  const items = [
    {
      icon: Icons.Github,
      label: 'Github',
      href: 'https://github.com/Vicentesan',
    },
    {
      icon: Icons.Twitter,
      label: 'Twitter',
      href: 'https://twitter.com/vicentesan.dev',
    },
    {
      icon: Icons.Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/vicentesan/',
    },
    { icon: Mail, label: 'Email', href: 'mailto:hello@vicentesan.dev' },
  ]

  return (
    <div className="grid grid-cols-1 gap-20 lg:grid-cols-[1fr,400px]">
      <div className="space-y-12">
        <div className="space-y-6">
          <div className="inline-flex items-center space-x-2 rounded-full border border-gray-200 bg-gray-100/50 px-3 py-1 dark:border-zinc-800 dark:bg-zinc-900/50">
            <div className="h-2 w-2 animate-pulse rounded-full bg-blue-600 dark:bg-teal-400" />
            <span className="text-sm text-gray-500 dark:text-zinc-400">
              {/* {dictionary.available_for_work} */} Available for work
            </span>
          </div>
          <div className="space-y-4">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-zinc-100 md:text-6xl">
              Vicente Sanchez
            </h1>
            <p className="text-2xl text-gray-500 dark:text-zinc-400">
              {/* {dictionary.full_stack_freelance_developer} */} Full stack
              freelance developer
            </p>
          </div>
          <p className="text-lg leading-relaxed text-gray-500 dark:text-zinc-400">
            {/* {dictionary.i_am} */} I am here to{' '}
            <span className="font-bold text-gray-800 dark:text-zinc-200">
              {/* {dictionary.build_your_next_digital_solution} */} build your
              next digital solution
            </span>
            , {/* {dictionary.crafting} */} crafting{' '}
            <span className="font-bold text-gray-800 dark:text-zinc-200">
              {/* {dictionary.exceptional} */} exceptional
            </span>{' '}
            and{' '}
            <span className="font-bold text-gray-800 dark:text-zinc-200">
              {/* {dictionary.accessible} */} accessible
            </span>{' '}
            web experiences with a focus on{' '}
            <span className="font-bold text-gray-800 dark:text-zinc-200">
              {/* {dictionary.clean_design_patterns} */} clean design patterns
            </span>{' '}
            and{' '}
            <span className="font-bold text-gray-800 dark:text-zinc-200">
              {/* {dictionary.thoughtful_interactions} */} thoughtful
              interactions
            </span>
            .
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          {items.map(({ icon: Icon, label, href }) => (
            <Button
              key={label}
              asChild
              variant="outline"
              className="group text-zinc-800 dark:text-zinc-400"
            >
              <Link
                href={label !== 'Email' ? href : 'mailto:hello@vicentesan.dev'}
              >
                <Icon className="h-5 w-5" />
                <span>{label}</span>
                <ArrowUpRight className="h-4 w-4 -translate-y-1 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100" />
              </Link>
            </Button>
          ))}
        </div>
      </div>

      <div className="group relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-blue-500/20 to-indigo-500/20 blur-3xl transition-all duration-500 group-hover:rotate-12 group-hover:scale-105 dark:from-teal-500/20 dark:to-purple-500/20" />
        <div className="aspect-square overflow-hidden rounded-lg border border-gray-200 bg-gray-100 transition-all duration-500 group-hover:translate-x-2 group-hover:translate-y-1 group-hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
          <img
            src="/vicente-san.jpg"
            alt="Vicente Sanchez"
            className="h-full w-full object-cover object-center grayscale transition-all duration-300 hover:grayscale-0 group-hover:scale-105"
          />
        </div>
      </div>
    </div>
  )
}
