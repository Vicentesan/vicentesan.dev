import Link from 'next/link'

export default function Page() {
  return (
    <div className="-mb-24 flex w-full flex-col gap-16">
      <h1 className="text-4xl font-bold">
        Why i chose Open Source for my career{' '}
      </h1>

      <div className="flex flex-col gap-4">
        <p className="text-muted-foreground text-lg">
          my journey into the world of software started, like many, with using
          software. <span className="text-foreground">bitcoin</span>, obviously.
          then there was <span className="text-foreground">AnyType</span>,{' '}
          <span className="text-foreground">NosTR</span>, various development
          libraries and frameworks… and then came{' '}
          <Link href="https://plotiwst.app" target="_blank">
            <span className="text-foreground">plotiwst.app</span>
          </Link>
          . plot twist: that was my{' '}
          <span className="text-foreground">
            first open source contribution
          </span>
          . and that <span className="text-foreground">changed everything</span>
          .
        </p>

        <p className="text-muted-foreground text-lg">
          open source isn't just about free software; it's about a{' '}
          <span className="text-foreground">philosophy</span>. it's about{' '}
          <span className="text-foreground">collaboration</span>,{' '}
          <span className="text-foreground">transparency</span>,{' '}
          <span className="text-foreground">community</span>,{' '}
          <span className="text-foreground">freedom</span>, and
          <span className="text-foreground"> innovation</span>. it's the same
          ethos that draws me to bitcoin, the belief that{' '}
          <span className="text-foreground">shared effort</span> and{' '}
          <span className="text-foreground">open access</span> can create
          something truly powerful.
        </p>

        <div className="flex flex-col gap-4">
          <p className="text-muted-foreground text-lg">
            the benefits of contributing to open source are immense. for me,
            it's about:
          </p>

          <ul className="text-muted-foreground list-disc pl-4 text-lg">
            <li>
              <span className="text-foreground font-bold">
                skill development:{' '}
              </span>
              <span className="text-foreground">
                learning from experienced developers
              </span>{' '}
              and tackling real-world problems.
            </li>
            <li>
              <span className="text-foreground font-bold">networking: </span>
              <span className="text-foreground">
                connecting with like-minded individuals
              </span>{' '}
              from around the globe.
            </li>
            <li>
              <span className="text-foreground font-bold">
                building a portfolio:{' '}
              </span>
              <span className="text-foreground">showcasing my abilities</span>{' '}
              to potential employers (or future collaborators).{' '}
            </li>
            <li>
              <span className="text-foreground font-bold">giving back: </span>
              <span className="text-foreground">
                contributing to projects
              </span>{' '}
              that i use and believe in.
            </li>
            <li>
              <span className="text-foreground font-bold">getting known: </span>
              <span className="text-foreground">
                building a reputation
              </span>{' '}
              within the community.
            </li>
          </ul>
        </div>

        <p className="text-muted-foreground text-lg">
          it's not always easy. coordinating with other developers, navigating
          different coding styles and codebases… it can be{' '}
          <span className="text-foreground">challenging</span>. but the
          <span className="text-foreground"> rewards far outweigh</span> the
          difficulties.
        </p>

        <p className="text-muted-foreground text-lg">
          i'm drawn to open source projects across the spectrum:{' '}
          <span className="text-foreground">frameworks</span>,{' '}
          <span className="text-foreground">developer tools</span>,{' '}
          <span className="text-foreground">applications</span>, even{' '}
          <span className="text-foreground">protocols</span>. anything that{' '}
          <span className="text-foreground">empowers developers</span> and{' '}
          <span className="text-foreground">promotes innovation</span> is fair
          game.
        </p>

        <p className="text-muted-foreground text-lg">
          i know it's early (i'm only{' '}
          <span className="text-foreground">15</span>), but one thing i'm{' '}
          <span className="text-foreground">sure about</span> is that i{' '}
          <span className="text-foreground">simply love open source</span>. i
          can't imagine building software any other way. and i{' '}
          <span className="text-foreground">know it can be a career</span>.
        </p>

        <p className="text-muted-foreground text-lg">
          i believe the{' '}
          <span className="text-foreground">future belongs to open source</span>
          . in a world increasingly concerned with{' '}
          <span className="text-foreground">security and transparency</span>,
          closed-source solutions will become{' '}
          <span className="text-foreground">relics of the past</span>. fear of
          the unknown will drive adoption of
          <span className="text-foreground"> open, auditable code</span>.
        </p>

        <p className="text-muted-foreground text-lg">
          my advice to aspiring open source developers?{' '}
          <span className="text-foreground">
            find something you're passionate about
          </span>
          . then,{' '}
          <span className="text-foreground">
            find a project that aligns with that passion
          </span>
          . if it doesn't exist,{' '}
          <span className="text-foreground">
            create it – and build it openly
          </span>
          . you'll be surprised{' '}
          <span className="text-foreground">
            how many people are willing to help
          </span>
          .
        </p>
      </div>
    </div>
  )
}
