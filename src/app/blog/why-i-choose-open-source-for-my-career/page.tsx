import { Metadata } from 'next'
import Link from 'next/link'

import { BlogHeader } from '@/components/blog-header'

export const metadata: Metadata = {
  title: 'Why I Chose Open Source for My Career',
  description:
    "My journey into open source development, the benefits I've found, and why I believe it's the future of software.",
  authors: [
    {
      name: 'Vicente Sanchez',
      url: 'https://vicentesan.dev',
    },
  ],
  openGraph: {
    title: 'Why I Chose Open Source for My Career',
    description:
      "My journey into open source development, the benefits I've found, and why I believe it's the future of software.",
    url: 'https://vicentesan.dev/blog/why-i-choose-open-source-for-my-career',
    type: 'article',
    images: [
      {
        url: '/vicente-san-grayscale.png',
        width: 400,
        height: 400,
        alt: 'Vicente Sanchez',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why I Chose Open Source for My Career',
    description:
      "My journey into open source development, the benefits I've found, and why I believe it's the future of software.",
    creator: '@vicentesan.dev',
    images: [
      {
        url: '/vicente-san-grayscale.png',
        alt: 'Vicente Sanchez',
      },
    ],
  },
  keywords: [
    'open source',
    'software development',
    'career',
    'collaboration',
    'transparency',
    'community',
    'bitcoin',
    'developer journey',
  ],
}

export default function Page() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-4 sm:gap-8 sm:px-6 md:gap-16 md:px-8">
      <BlogHeader
        title="Why I Chose Open Source for My Career"
        date="March 15, 2025"
        slug="why-i-choose-open-source-for-my-career"
      />

      <div className="flex flex-col gap-3 md:gap-4">
        <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
          My journey into the world of software started, like many, with using
          software. <span className="text-foreground">Bitcoin</span>, obviously.
          Then there was <span className="text-foreground">AnyType</span>,{' '}
          <span className="text-foreground">NosTR</span>, various development
          libraries and frameworks… and then came{' '}
          <Link
            href="https://plotwist.app"
            target="_blank"
            className="underline underline-offset-4"
          >
            <span className="text-foreground">plotwist.app</span>
          </Link>
          . That was my{' '}
          <span className="text-foreground">
            first open source contribution
          </span>
          . And that <span className="text-foreground">changed everything</span>
          .
        </p>

        <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
          Open source isn't just about free software; it's about a{' '}
          <span className="text-foreground">philosophy</span>. It's about{' '}
          <span className="text-foreground">collaboration</span>,{' '}
          <span className="text-foreground">transparency</span>,{' '}
          <span className="text-foreground">community</span>,{' '}
          <span className="text-foreground">freedom</span>, and
          <span className="text-foreground"> innovation</span>. It's the same
          ethos that draws me to Bitcoin, the belief that{' '}
          <span className="text-foreground">shared effort</span> and{' '}
          <span className="text-foreground">open access</span> can create
          something truly powerful.
        </p>

        <div className="flex flex-col gap-3 md:gap-4">
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
            The benefits of contributing to open source are immense. For me,
            it's about:
          </p>

          <ul className="text-muted-foreground list-disc pl-4 text-sm sm:text-base md:text-lg">
            <li>
              <span className="text-foreground font-bold">
                Skill development:{' '}
              </span>
              <span className="text-foreground">
                learning from experienced developers
              </span>{' '}
              and tackling real-world problems.
            </li>
            <li>
              <span className="text-foreground font-bold">Networking: </span>
              <span className="text-foreground">
                connecting with like-minded individuals
              </span>{' '}
              from around the globe.
            </li>
            <li>
              <span className="text-foreground font-bold">
                Building a portfolio:{' '}
              </span>
              <span className="text-foreground">showcasing my abilities</span>{' '}
              to potential employers (or future collaborators).{' '}
            </li>
            <li>
              <span className="text-foreground font-bold">Giving back: </span>
              <span className="text-foreground">
                contributing to projects
              </span>{' '}
              that I use and believe in.
            </li>
            <li>
              <span className="text-foreground font-bold">Getting known: </span>
              <span className="text-foreground">
                building a reputation
              </span>{' '}
              within the community.
            </li>
          </ul>
        </div>

        <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
          It's not always easy. Coordinating with other developers, navigating
          different coding styles and codebases… it can be{' '}
          <span className="text-foreground">challenging</span>. But the
          <span className="text-foreground"> rewards far outweigh</span> the
          difficulties.
        </p>

        <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
          I'm drawn to open source projects across the spectrum:{' '}
          <span className="text-foreground">frameworks</span>,{' '}
          <span className="text-foreground">developer tools</span>,{' '}
          <span className="text-foreground">applications</span>, even{' '}
          <span className="text-foreground">protocols</span>. Anything that{' '}
          <span className="text-foreground">empowers developers</span> and{' '}
          <span className="text-foreground">promotes innovation</span> is fair
          game.
        </p>

        <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
          I know it's early (I'm only{' '}
          <span className="text-foreground">15</span>), but one thing I'm{' '}
          <span className="text-foreground">sure about</span> is that I{' '}
          <span className="text-foreground">simply love open source</span>. I
          can't imagine building software any other way. And I{' '}
          <span className="text-foreground">know it can be a career</span>.
        </p>

        <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
          I believe the{' '}
          <span className="text-foreground">future belongs to open source</span>
          . In a world increasingly concerned with{' '}
          <span className="text-foreground">security and transparency</span>,
          closed-source solutions will become{' '}
          <span className="text-foreground">relics of the past</span>. Fear of
          the unknown will drive adoption of
          <span className="text-foreground"> open, auditable code</span>.
        </p>

        <p className="text-muted-foreground pb-6 text-sm sm:pb-8 sm:text-base md:pb-12 md:text-lg">
          My advice to aspiring open source developers?{' '}
          <span className="text-foreground">
            Find something you're passionate about
          </span>
          . Then,{' '}
          <span className="text-foreground">
            find a project that aligns with that passion
          </span>
          . If it doesn't exist,{' '}
          <span className="text-foreground">
            create it – and build it openly
          </span>
          . You'll be surprised{' '}
          <span className="text-foreground">
            how many people are willing to help
          </span>
          .
        </p>
      </div>
    </div>
  )
}
