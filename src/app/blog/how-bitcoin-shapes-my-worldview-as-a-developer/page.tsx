import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How Bitcoin Shapes My Worldview as a Developer',
  description:
    'My perspective on how Bitcoin has influenced my approach to software development and my values as a developer.',
  authors: [
    {
      name: 'Vicente Sanchez',
      url: 'https://vicentesan.dev',
    },
  ],
  openGraph: {
    title: 'How Bitcoin Shapes My Worldview as a Developer',
    description:
      'My perspective on how Bitcoin has influenced my approach to software development and my values as a developer.',
    url: 'https://vicentesan.dev/blog/how-bitcoin-shapes-my-worldview-as-a-developer',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Bitcoin Shapes My Worldview as a Developer',
    description:
      'My perspective on how Bitcoin has influenced my approach to software development and my values as a developer.',
    creator: '@vicentesan.dev',
  },
  keywords: [
    'bitcoin',
    'software development',
    'decentralization',
    'open source',
    'privacy',
    'security',
    'financial sovereignty',
    'developer philosophy',
  ],
}

export default function Page() {
  return (
    <div className="-mb-24 flex w-full flex-col gap-16">
      <h1 className="text-4xl font-bold">
        How Bitcoin Shapes My Worldview as a Developer
      </h1>

      <div className="flex flex-col gap-4">
        <p className="text-muted-foreground text-lg">
          Like many, my first impression of Bitcoin was… skeptical. "Ponzi
          scheme" probably crossed my mind. But something kept me digging. I
          started <span className="text-foreground">researching</span>,
          <span className="text-foreground">questioning</span>, and eventually…
          I<span className="text-foreground">fell down the rabbit hole</span>.
          Now? Let's just say my{' '}
          <span className="text-foreground">fiat days are numbered</span>.
        </p>

        <p className="text-muted-foreground text-lg">
          Bitcoin isn't just an investment for me. It's a{' '}
          <span className="text-foreground">paradigm shift</span>. It embodies
          values I deeply believe in:{' '}
          <span className="text-foreground">decentralization</span>,
          <span className="text-foreground">censorship-resistance</span>, and,
          most importantly,{' '}
          <span className="text-foreground">financial sovereignty</span>. The
          idea that I can{' '}
          <span className="text-foreground">
            transact without needing permission
          </span>{' '}
          from a bank or government, that{' '}
          <span className="text-foreground">my money is truly mine</span> and
          can't be arbitrarily seized… that's{' '}
          <span className="text-foreground">POWERFUL</span>.
        </p>

        <div className="flex flex-col gap-4">
          <p className="text-muted-foreground text-lg">
            This philosophy{' '}
            <span className="text-foreground">profoundly impacts</span> my
            approach to software development. I now{' '}
            <span className="text-foreground">prioritize</span>:
          </p>

          <ul className="text-muted-foreground list-disc pl-4">
            <li>
              <span className="text-foreground font-bold">Security: </span>
              <span className="text-foreground">
                Building robust systems
              </span>{' '}
              that protect user data and funds.{' '}
            </li>
            <li>
              <span className="text-foreground font-bold">Privacy: </span>
              <span className="text-foreground">
                Minimizing data collection
              </span>{' '}
              and empowering users to control their information.{' '}
            </li>
            <li>
              <span className="text-foreground font-bold">Open-source: </span>
              <span className="text-foreground">
                Making code transparent
              </span>{' '}
              and auditable.
            </li>
          </ul>
        </div>

        <p className="text-muted-foreground text-lg">
          I haven't yet built anything directly Bitcoin-related (
          <span className="text-foreground">yet!</span>), but I'm
          <span className="text-foreground"> brewing some ideas</span>.{' '}
          <span className="text-foreground">Decentralized platforms</span>,{' '}
          <span className="text-foreground">privacy-focused tools</span>… the{' '}
          <span className="text-foreground">possibilities are endless</span>.
        </p>

        <p className="text-muted-foreground text-lg">
          I{' '}
          <span className="text-foreground">
            firmly believe Bitcoin is the future
          </span>
          . Those who dismiss it are missing out. Yes, it has challenges:{' '}
          <span className="text-foreground">scalability, fungibility</span>… but
          these are <span className="text-foreground">solvable problems</span>.{' '}
          <span className="text-foreground">Forks and layer-2 solutions</span>{' '}
          offer promising avenues for improvement.
        </p>

        <p className="text-muted-foreground text-lg">
          Ultimately, Bitcoin{' '}
          <span className="text-foreground">empowers individuals</span>, fosters{' '}
          <span className="text-foreground">decentralized systems</span>, and
          enables{' '}
          <span className="text-foreground">
            censorship-resistant platforms
          </span>
          . It's{' '}
          <span className="text-foreground">more than just a technology</span>;
          it's a{' '}
          <span className="text-foreground">
            catalyst for a more free and equitable world
          </span>
          .
        </p>

        <p className="text-muted-foreground text-lg">
          My advice to other developers interested in exploring Bitcoin?{' '}
          <span className="text-foreground">Not your keys, not your coins</span>
          . <span className="text-foreground">Don't trust, verify</span>.{' '}
          <span className="text-foreground">Question everything</span>.{' '}
          <span className="text-foreground">Dive into the code</span>.{' '}
          <span className="text-foreground">Embrace the cypherpunk ethos</span>.
          The future is being built, and{' '}
          <span className="text-foreground">
            Bitcoin is a fundamental building block
          </span>
          .
        </p>
      </div>
    </div>
  )
}
