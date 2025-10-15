import { differenceInYears } from 'date-fns';

import { AnimatedLink } from '@/components/animated-link';

export default function Home() {
  const birthDate = new Date('2009-04-18');
  const today = new Date();
  const age = differenceInYears(today, birthDate);

  return (
    <main className="flex h-screen w-fit flex-col items-start justify-center gap-8 px-10 text-[13px] text-muted-foreground uppercase">
      <div className="flex flex-col gap-2">
        <h1 className="text-primary">Vicente Sanchez</h1>
        <p>São Paulo, Brazil</p>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-muted-foreground">
          {age}y/o high school dropout & foundation @{' '}
          <AnimatedLink
            variant="primary"
            target="_blank"
            href="https://tela.com"
            alias
            className="blur-sm"
          >
            tela.com
          </AnimatedLink>
        </p>

        <p>
          Passionated about <span className="text-primary">OSS</span>,{' '}
          <span className="text-primary">DX</span> & <span className="text-primary">Web3</span>
        </p>
      </div>

      <ul className="w-fit">
        <li className="text-muted-foreground">
          <AnimatedLink variant="secondary" href="/blog/invisible-blockchain" alias>
            Invisible Blockchain
          </AnimatedLink>
        </li>
      </ul>
    </main>
  );
}
