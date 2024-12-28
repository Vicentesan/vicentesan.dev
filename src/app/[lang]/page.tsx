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
    </div>
  )
}
