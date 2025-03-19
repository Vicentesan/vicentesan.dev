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
    <div className="mx-auto flex w-full max-w-2xl flex-col gap-6 px-4 sm:gap-8 sm:px-6 md:gap-16 md:px-8">
      <BlogHeader
        title="Designing a Portfolio That Reflects My Principles"
        date="March 19, 2025"
        slug="designing-a-portfolio-that-reflects-my-principles"
      />

      <div className="flex flex-col gap-3 text-justify md:gap-4">
        <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
          As a developer passionate about open source software, my career, and
          Bitcoin, I knew that my portfolio had to be more than just a showcase
          of my work. It needed to embody the principles that guide me in my
          professional and personal life. Inspired by the minimalist and fluid
          design of Zeno Rocha's portfolio, which you can check out at{' '}
          <Link
            href="https://zenorocha.com"
            target="_blank"
            className="text-foreground underline underline-offset-4"
          >
            zenorocha.com
          </Link>{' '}
          , I set out to create a portfolio that would resonate with other
          developers while reflecting my core values.
        </p>

        <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
          This portfolio is a reflection of my small career path, my even
          smaller journey in the world of open source software development, and
          my fascination with Bitcoin. I've poured my heart and soul into
          crafting a portfolio that not only showcases my work but also stays
          true to the principles I <span className="text-foreground">HODL</span>
          .
        </p>

        <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
          The first principle I wanted to highlight was{' '}
          <span className="text-foreground">minimalism</span>. My portfolio, as
          you can see, features a clean, uncluttered layout with ample white
          space and a dark background to minimize distractions. This design
          choice not only makes the content more readable but also aligns with
          my belief in simplicity. To cater to my principles, I've implemented{' '}
          <span className="text-foreground">
            dark mode as the default option
          </span>
          , ensuring that my portfolio remains easy on the eyes in any
          condition.
        </p>

        <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
          Another core principle for me is{' '}
          <span className="text-foreground"> fluidity</span>. I wanted my
          portfolio to feel dynamic and interactive, much like the ever-evolving
          world of open source software. To achieve this, I incorporated
          motion.dev to add smooth animations and transitions between sections,
          enhancing the user experience and reflecting the fluid nature of my
          work.
        </p>

        <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
          Finally, as an advocate for{' '}
          <span className="text-foreground">open source principles</span>, I
          made sure that my portfolio itself is open source. This not only
          aligns with my values but also allows me to give back to the open
          source community that has given me so much.
        </p>

        <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
          Throughout this portfolio, I showcase my work in open source software
          development, highlighting projects that have made a real impact on the
          community. I also include a detailed account of my career journey,
          from my early days as a developer to my current role, emphasizing the
          skills and experiences that have shaped me into the professional I am
          today. And of course, I couldn't leave out my passion for{' '}
          <span className="text-foreground">Bitcoin</span>, featuring an
          exclusive article of how this revolutionary technology is not only my
          principles but changing the world.
        </p>

        <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
          I want to give a special shoutout to{' '}
          <Link
            href="https://x.com/rychillie"
            target="_blank"
            className="text-foreground underline underline-offset-4"
          >
            @rychillie
          </Link>{' '}
          for his invaluable help with the UI design of my portfolio. His
          expertise and guidance were crucial in bringing my vision to life.
        </p>

        <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
          By designing a portfolio that reflects my principles of minimalism,
          fluidity, security, and open source, I hope to not only showcase my
          work to fellow developers but also inspire them to embrace these
          values in their own projects. Just as Zeno Rocha's portfolio has
          inspired me, I aspire for mine to be a beacon of what's possible when
          we stay true to our beliefs and create with purpose.
        </p>
      </div>
    </div>
  )
}
