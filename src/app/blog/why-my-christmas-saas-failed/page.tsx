import { Metadata } from 'next'
import Link from 'next/link'

import { BlogHeader } from '@/components/blog-header'

export const metadata: Metadata = {
  title: 'Why My Christmas SaaS Failed',
  description:
    "Lessons learned from launching a seasonal SaaS product, the challenges I faced, and what I'll do differently next time.",
  authors: [
    {
      name: 'Vicente Sanchez',
      url: 'https://vicentesan.dev',
    },
  ],
  openGraph: {
    title: 'Why My Christmas SaaS Failed',
    description:
      "Lessons learned from launching a seasonal SaaS product, the challenges I faced, and what I'll do differently next time.",
    url: 'https://vicentesan.dev/blog/why-my-christmas-saas-failed',
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
    title: 'Why My Christmas SaaS Failed',
    description:
      "Lessons learned from launching a seasonal SaaS product, the challenges I faced, and what I'll do differently next time.",
    creator: '@vicentesan.dev',
    images: [
      {
        url: '/vicente-san-grayscale.png',
        alt: 'Vicente Sanchez',
      },
    ],
  },
  keywords: [
    'saas',
    'startup failure',
    'software development',
    'entrepreneurship',
    'technical challenges',
    'api integration',
    'planning',
    'lessons learned',
    'open source',
  ],
}

export default function Page() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-4 sm:gap-8 sm:px-6 md:gap-16 md:px-8">
      <BlogHeader
        title="Why My Christmas SaaS Failed"
        date="March 18, 2025"
        slug="why-my-christmas-saas-failed"
      />

      <div className="flex flex-col gap-3 text-justify md:gap-4">
        <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
          My Christmas SaaS started with a bold idea that I was passionate
          about. I designed it as a{' '}
          <span className="text-foreground">Secret Santa</span> tool, but my
          vision was for it to evolve into an app that would help people build
          strong friendships. When I launched it in December, I was filled with
          excitement, dreaming of all the meaningful connections my app would
          foster.
        </p>

        <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
          However, the reality was far different. The app struggled with
          handling the end-to-end development, which included front-end,
          back-end, devops, and metrics. As my initial foray into the world of
          SaaS, I had no benchmarks to guide my planning or execution. Balancing
          all these aspects{' '}
          <span className="text-foreground">
            consumed so much of my time and resources
          </span>
          , leaving me with little room to handle any unforeseen challenges that
          came my way.
        </p>

        <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
          The initial response to my app was promising, with{' '}
          <span className="text-foreground">around 500 unique visitors</span>{' '}
          and <span className="text-foreground">3K requests</span> in just 3-4
          days. It was clear that people were interested in what I had created.
          However, I soon encountered a critical API integration issue because I
          had used Orval, which doesn't handle errors in a type-safe way. This
          made error handling incredibly challenging for me. When I tried
          switching to manual fetches using KY, it didn't resolve the situation,
          and I kept facing unexpected errors. These integration challenges
          significantly impacted my launch, teaching me firsthand how crucial
          robust error handling is in API management.
        </p>

        <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
          This experience highlighted for me the necessity of meticulous
          planning. I realized that{' '}
          <span className="text-foreground">
            my enthusiasm alone couldn't ensure the success of my project
          </span>
          . Without a solid strategy, all my potential would be lost. My mistake
          revealed to me the break-even point between enthusiasm and execution,
          emphasizing the value of thorough preparation in my eyes.
        </p>

        <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
          The technical challenges I faced were substantial. I had
          underestimated the complexity of API integrations, error handling, and
          scalability. What seemed simple to me during development turned
          problematic once my app was in production. This taught me the critical
          need for thorough testing and robust contingency planning on my part.
          It also taught me to test in production before shipping, because
          everything was working on my machine.
        </p>

        <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
          Rather than viewing this as a failure, I choose to see it as a
          stepping stone in my journey. I plan to revisit my concept and
          relaunch it as a free, open-source tool. In the meantime, I'm inspired
          by what{' '}
          <Link
            href="https://abode.space"
            target="_blank"
            className="text-foreground underline underline-offset-4"
          >
            @getabode
          </Link>{' '}
          has achieved, as they've accomplished what I aspired to do. I want to
          give a big shoutout to{' '}
          <Link
            href="https://x.com/aliszu"
            target="_blank"
            className="text-foreground underline underline-offset-4"
          >
            @aliszu
          </Link>{' '}
          for their fantastic work. It's so encouraging for me to see similar
          ideas come to life.
        </p>

        <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
          Failure, I've learned, is an opportunity for me to{' '}
          <span className="text-foreground">learn and grow</span>. Through this
          process, I've gained insights that no theoretical book could ever
          teach me. Each project I work on builds the foundation for my next
          venture, and I'm excited to apply these lessons I've learned to my
          future endeavors. I'm determined to keep pushing forward and turn my
          next idea into a success.
        </p>
      </div>
    </div>
  )
}
