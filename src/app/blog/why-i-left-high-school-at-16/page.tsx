import type { Metadata } from 'next';
import { BackButton } from '@/components/back-button';
import { ClientScrollHandler } from './client-scroll-handler';
import { SectionHeader } from './interactive-headers';

export const metadata = {
  title: 'Why I Left High School at 16: Choosing My Own Path',
  description:
    'How battling dysthymia and depression led me to leave traditional education for a self-taught journey in tech',
  openGraph: {
    title: 'Why I Left High School at 16: Choosing My Own Path',
    description:
      'How battling dysthymia and depression led me to leave traditional education for a self-taught journey in tech',
    images: [
      {
        url: 'https://vicentesan.dev/opengraph-image.png',
        width: 400,
        height: 400,
        alt: 'Vicente Sanchez'
      }
    ],
    locale: 'en_US',
    type: 'article',
    publishedTime: '2025-09-14T12:00:00Z',
    authors: ['Vicente Sanchez']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why I Left High School at 16: Choosing My Own Path',
    description:
      'How battling dysthymia and depression led me to leave traditional education for a self-taught journey in tech',
    images: ['https://vicentesan.dev/opengraph-image.png'],
    creator: '@vicentesandev'
  },
  keywords: [
    'high school dropout',
    'mental health',
    'dysthymia',
    'depression',
    'self-education',
    'coding',
    'software engineering',
    'alternative education',
    'tech career',
    'personal growth'
  ],
  authors: [{ name: 'Vicente Sanchez' }],
  category: 'Personal Development',
  alternates: {
    canonical: 'https://vicentesan.dev/blog/why-i-left-high-school-at-16'
  }
} satisfies Metadata;

export default function WhyILeftHighSchoolAt16Page() {
  return (
    <main className="relative mx-auto flex w-fit max-w-xl flex-col items-start justify-center gap-8 py-20 max-sm:px-10">
      <ClientScrollHandler />
      <BackButton />

      <div className="flex flex-col gap-2">
        <h1 className="text-2xl text-foreground">
          Why I Left High School at 16: Choosing My Own Path
        </h1>
        <p className="font-sans text-muted-foreground text-xs">September 14th, 2025</p>
      </div>

      <article className="flex flex-col gap-8 text-neutral-800 tracking-tight dark:text-neutral-300">
        <div id="introduction" className="flex flex-col gap-8 font-sans">
          <p>
            At 16, i quit high school. Yeah, you heard that right. I'm a high school dropout. and
            no, I'm not some rebellious kid who couldn't handle the work
          </p>

          <p>
            The problem wasn't the classes or the homework. It was waking up every morning feeling
            like I was walking into a prison. It was sitting through lectures wondering why I was
            spending hours learning things I'd never use while my mental health deteriorated and my
            real passions were relegated to "after school" status
          </p>

          <p>
            For years, I've battled dysthymia and depression. The school system, with its rigid
            structure and one-size-fits-all approach, became an active contributor to my declining
            mental state. Meanwhile, I was teaching myself to code at night, building projects that
            actually excited me, and learning at a pace that traditional education couldn't match
          </p>

          <p>
            This isn't a manifesto against education. It's about recognizing that the traditional
            path isn't for everyone. Sometimes the bravest thing you can do is walk away from what's
            breaking you and build something better
          </p>
        </div>

        <div id="the-reality-of-traditional-education" className="flex flex-col gap-8 font-sans">
          <SectionHeader id="the-reality-of-traditional-education">
            The Reality of Traditional Education
          </SectionHeader>

          <p>
            When we talk about education, we often picture classrooms, textbooks, and diplomas.
            We're told this is the only legitimate path to success. But what happens when that
            environment becomes toxic to your wellbeing?
          </p>

          <p>
            For me, each day at school became an exercise in survival rather than learning. The
            fluorescent lights, the social pressure, the rigid schedules. All of it exacerbated my
            dysthymia until even getting out of bed became a monumental task
          </p>

          <p>
            Meanwhile, at night, hunched over my computer, I was alive. Coding wasn't just an
            escape. It was where I actually learned. Where I thrived. Where I built things that
            mattered
          </p>

          <p>
            The system isn't designed for divergent minds. It's built for conformity, for students
            who can sit still, memorize facts, and regurgitate them on command. If that's not how
            your brain works, you're left with two options: break yourself trying to fit in, or find
            another way
          </p>

          <p>i chose another way</p>
        </div>

        <div id="the-skills-that-actually-matter" className="flex flex-col gap-8 font-sans">
          <SectionHeader id="the-skills-that-actually-matter">
            The Skills That Actually Matter
          </SectionHeader>

          <p>
            What's ironic about leaving school is discovering how many "essential" things weren't
            essential at all.
          </p>

          <p>
            No employer has ever asked me to solve a quadratic equation. No one cares if I can
            recite historical dates. What they care about is:
          </p>

          <ul className="list-disc pl-4">
            <li>Can i solve real problems?</li>
            <li>Can i learn new skills quickly?</li>
            <li>Can i work with others effectively?</li>
            <li>Can i adapt to changing requirements?</li>
          </ul>

          <p>
            These are precisely the skills i developed after leaving the classroom. They came from
            late nights debugging code, from collaborating with developers across time zones, from
            building projects and watching them fail, then building them again
          </p>
        </div>

        <div id="the-mental-health-imperative" className="flex flex-col gap-8 font-sans">
          <SectionHeader id="the-mental-health-imperative">
            The Mental Health Imperative
          </SectionHeader>

          <p>
            There's a dangerous myth that pushing through hardship always makes you stronger.
            Sometimes it does. But sometimes it just breaks you
          </p>

          <p>
            My dysthymia wasn't something I could just power through. It wasn't a phase or an
            attitude problem. It was a medical condition that the school environment was making
            worse
          </p>

          <p>
            Leaving wasn't weakness. It was self-preservation. It was recognizing that no academic
            achievement is worth sacrificing your mental health
          </p>
        </div>

        <div id="building-while-breaking" className="flex flex-col gap-8 font-sans">
          <SectionHeader id="building-while-breaking">Building While Breaking</SectionHeader>

          <p>
            What most people don't realize is that I was already coding professionally while sitting
            through high school classes. I'd become a software engineer creating solutions that
            helped real people, all while being told I needed to focus on schoolwork to "prepare for
            the real world"
          </p>

          <p>
            The irony wasn't lost on me. Spending mornings in a classroom learning theoretical
            concepts, then rushing home to apply actual skills in paid work. My real education was
            happening after the school bell rang.
          </p>

          <p>
            This double life became increasingly absurd. Teachers would lecture me about my future
            prospects while I was already building that future after hours. The very system claiming
            to prepare me for success was actually standing in the way of it.
          </p>

          <p>
            Leaving wasn't about abandoning education. It was about fully committing to the
            education that was actually working for me
          </p>

          <p>
            The path hasn't been straight or easy. There have been doubts, setbacks, and plenty of
            people telling me I made a mistake. but there's been something else too: growth,
            purpose, and the freedom to learn without arbitrary constraints
          </p>
        </div>

        <div id="to-those-who-helped-me-survive" className="flex flex-col gap-8 font-sans">
          <SectionHeader id="to-those-who-helped-me-survive">
            To Those Who Helped Me Survive (Literally)
          </SectionHeader>

          <p>
            i wouldn't be here without Sky, the two Leonardos, Luna, and my family who saw me, when
            I was at my lowest. They didn't push me to conform or "just try harder." They supported
            my decision to find a different path.
          </p>

          <p>
            They understood what so many don't: that sometimes the bravest choice isn't staying the
            course. It's having the courage to chart a new one
          </p>

          <p>
            Traditional education isn't for everyone. Sometimes the most growth happens on the roads
            less traveled. And sometimes, what looks like dropping out is actually dropping in. To a
            life of purpose, authentic learning, and true mental health
          </p>
        </div>
      </article>
    </main>
  );
}
