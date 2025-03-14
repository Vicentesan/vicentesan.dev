import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How I Got Started in Development',
  description:
    'My journey into software development, starting with Discord bots during the COVID-19 lockdown at age 10.',
  authors: [
    {
      name: 'Vicente Sanchez',
      url: 'https://vicentesan.dev',
    },
  ],
  openGraph: {
    title: 'How I Got Started in Development',
    description:
      'My journey into software development, starting with Discord bots during the COVID-19 lockdown at age 10.',
    url: 'https://vicentesan.dev/blog/how-i-got-started-in-development',
    type: 'article',
    images: [
      {
        url: '/favicon-96x96.png',
        width: 96,
        height: 96,
        alt: 'Vicente Sanchez',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How I Got Started in Development',
    description:
      'My journey into software development, starting with Discord bots during the COVID-19 lockdown at age 10.',
    creator: '@vicentesan.dev',
    images: [
      {
        url: '/favicon-96x96.png',
        alt: 'Vicente Sanchez',
      },
    ],
  },
  keywords: [
    'software development',
    'discord bots',
    'coding journey',
    'beginner programming',
    'FiveM',
    'COVID-19 lockdown',
    'developer story',
    'learning to code',
  ],
}

export default function Page() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-4 sm:gap-8 sm:px-6 md:gap-16 md:px-8">
      <h1 className="mt-6 text-2xl font-bold sm:mt-8 sm:text-3xl md:mt-10 md:text-4xl">
        How I Got Started in Development
      </h1>

      <div className="flex flex-col gap-3 md:gap-4">
        <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
          March 2020. Brazil. Covid hits. I'm ten like most kids, i didn't grasp
          the gravity. School, friends, games – that was my world. When the
          government announced a{' '}
          <span className="text-foreground">seven-day lockdown</span>, it felt
          like a <span className="text-foreground">BONUS vacation</span>. No
          school? No homework?{' '}
          <span className="text-foreground">More Fortnite?</span> SIGN. ME. UP.
        </p>

        <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
          That "vacation" stretched from days to weeks to…{' '}
          <span className="text-foreground">forever</span>. Suddenly, being
          stuck inside wasn't so fun. BUT, a surprising thing happened:{' '}
          <span className="text-foreground">
            I discovered online connection
          </span>
          . My friends and I went{' '}
          <span className="text-foreground">HARD on the multiplayer games</span>
          . Fortnite, FiveM, Roblox, Minecraft – if it was trending, we were
          playing it.{' '}
          <span className="text-foreground">
            Virtual hangouts became the new normal
          </span>
          .
        </p>

        <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
          Then, FiveM sparked my curiosity. Every server had similar Discord
          bots for whitelisting and permissions.{' '}
          <span className="text-foreground">"How do they MAKE these?"</span> I
          wondered. A lightbulb moment:{' '}
          <span className="text-foreground">I could build my OWN</span>.{' '}
          <span className="text-foreground">Zero coding experience</span>, but
          the idea was irresistible. I dove headfirst into tutorials, focusing
          on Discord bot creation. And that's where{' '}
          <span className="text-foreground">it all began</span>.
        </p>

        <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
          My first bot? A basic whitelist tool. Clunky, buggy, limited… but{' '}
          <span className="text-foreground">MINE</span>. Seeing it work, even in
          its rough state, was an{' '}
          <span className="text-foreground">incredible rush</span>. That spark{' '}
          <span className="text-foreground">ignited a full-blown dev fire</span>
          . I started <span className="text-foreground">learning more</span>,{' '}
          <span className="text-foreground">building more</span>, and{' '}
          <span className="text-foreground">diving deeper</span>.
        </p>

        <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
          A few weeks later, a FiveM server I frequented{' '}
          <span className="text-foreground">needed a dev</span>. Without
          hesitation, I messaged the admin:{' '}
          <span className="text-foreground">
            "hey, i have a whitelist bot, and i can do anything you want!"
          </span>{' '}
          (okay, maybe i exaggerated a bit). To my surprise,{' '}
          <span className="text-foreground">they "hired" me!</span>
        </p>

        <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
          No pay, but{' '}
          <span className="text-foreground">admin powers and tasks</span>{' '}
          awaited. My first{' '}
          <span className="text-foreground">"real" project</span>: a Discord
          ticket bot. Sound easy… until I started. Luckily, I found a YouTuber
          named Ferinha (or something like that) whose{' '}
          <span className="text-foreground">tutorials saved me</span>. After
          much trial and error, I built a{' '}
          <span className="text-foreground">
            working ticket bot with chat transcription
          </span>{' '}
          – something{' '}
          <span className="text-foreground">
            only paid bots had at the time
          </span>
          .
        </p>

        <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
          It wasn't easy, but finishing that bot was{' '}
          <span className="text-foreground">exhilarating</span>. It was my{' '}
          <span className="text-foreground">first major dev challenge</span>.
          What started with a simple whitelist bot{' '}
          <span className="text-foreground">
            transformed into something complex
          </span>
          , and that was just the beginning. Little did I know, this was{' '}
          <span className="text-foreground">
            the first step on the path to fullstack
          </span>
          …
        </p>

        <p className="text-muted-foreground pb-6 text-sm sm:pb-8 sm:text-base md:pb-12 md:text-lg">
          And that was just the{' '}
          <span className="text-foreground">
            beginning of my development journey
          </span>
          . That ticket bot, built with{' '}
          <span className="text-foreground">
            borrowed knowledge and sheer determination
          </span>
          , proved that even a bored 10-year-old could{' '}
          <span className="text-foreground">create something meaningful</span>.
          Lockdown may have been tough, but it{' '}
          <span className="text-foreground">unlocked a passion</span> that
          continues to{' '}
          <span className="text-foreground">shape my life today</span>
        </p>
      </div>
    </div>
  )
}
