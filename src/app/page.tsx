import { differenceInYears } from 'date-fns';

import { AnimatedLink } from '@/components/animated-link';

const LINKS = [
  {
    label: '2026 Goals',
    href: '/2026-goals'
  },
  {
    label: 'Invisible Blockchain',
    href: '/blog/invisible-blockchain'
  }
];

export default function Home() {
  const birthDate = new Date('2009-04-18');
  const today = new Date();
  const age = differenceInYears(today, birthDate);

  return (
    <main className="flex h-screen w-fit flex-col items-start justify-center gap-8 p-10 px-10 text-[13px] text-muted-foreground uppercase">
      <div className="flex flex-col gap-2">
        <h1 className="text-primary">Vicente Sanchez</h1>
        <p>São Paulo, Brazil</p>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-muted-foreground">
          {age}y/o high school dropout & foundation @{' '}
          <AnimatedLink variant="primary" target="_blank" href="https://tela.com" alias>
            tela.com
          </AnimatedLink>
        </p>

        <p>
          Passionated about <span className="text-primary">OSS</span>,{' '}
          <span className="text-primary">DX</span> & <span className="text-primary">Web3</span>
        </p>
      </div>

      <ul className="flex w-fit gap-2">
        {LINKS.map((link, i) => (
          <div key={link.label} className="flex flex-row items-center justify-center gap-2">
            <li className="flex flex-row items-center justify-center text-muted-foreground">
              <AnimatedLink variant="secondary" href={link.href} alias>
                {link.label}
              </AnimatedLink>
            </li>
            {i < LINKS.length - 1 && (
              <span className="size-1 rounded-full bg-muted-foreground/80" />
            )}
          </div>
        ))}
      </ul>
    </main>
  );
}
