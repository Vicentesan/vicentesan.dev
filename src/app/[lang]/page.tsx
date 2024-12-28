import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex w-full flex-col gap-8 px-4 font-serif md:gap-16 md:px-0">
      <div className="flex flex-col gap-6 md:gap-10">
        <h1 className="w-fit text-3xl text-foreground md:text-4xl">
          Vicente Sanchez
        </h1>

        <div className="relative h-48 w-full sm:h-56 md:h-64">
          <Image
            src="/vicente-san.png"
            alt="Vicente Sanchez"
            fill
            className="rounded-md object-cover grayscale"
          />
        </div>

        <p className="text-base font-medium text-muted-foreground md:text-lg">
          Hello, <span className="text-foreground">I&apos;m Vicente</span>, a{' '}
          <span className="text-foreground">Full Stack Developer</span> based in
          Brazil.
        </p>

        <p className="text-base font-medium text-muted-foreground md:text-lg">
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

        <p className="text-base font-medium text-muted-foreground md:text-lg">
          Currently,{' '}
          <span className="text-foreground">
            I&apos;m freelancing as a developer
          </span>
          , building tailored applications for clients{' '}
          <span className="text-foreground">
            while contributing to open-source projects
          </span>{' '}
          and{' '}
          <span className="text-foreground">exploring personal endeavors</span>{' '}
          that reflect my values.
        </p>
      </div>

      <div className="flex flex-col gap-6 md:gap-10">
        <div className="flex flex-row items-center justify-center gap-2">
          <span className="text-base font-medium text-muted-foreground md:text-lg">
            Writing
          </span>
          <span className="h-px w-full bg-muted-foreground" />
        </div>

        <ul className="flex flex-col items-start justify-start gap-4 md:gap-6">
          <li className="flex w-full flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
            <div className="flex w-full flex-1 flex-row items-center gap-2 whitespace-normal sm:whitespace-nowrap">
              <span className="md:text-md font-sans text-sm text-foreground">
                Designing a Portfolio That Reflects My Principles
              </span>
            </div>

            <div className="flex w-full items-center gap-2">
              <span className="h-px w-full border-b border-dashed border-muted-foreground" />
              <span className="font-mono text-xs text-muted-foreground md:text-sm">
                03.21.2024
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
