'use client';

import { differenceInYears } from 'date-fns';
import { useState } from 'react';
import { AnimatedLink } from '@/components/animated-link';
import { WarpHoverBackground } from '@/components/warp-hover-background';

const LINKS = [
  {
    label: 'Invisible Blockchain',
    href: '/blog/invisible-blockchain'
  }
];

export default function Home() {
  const [warpHovered, setWarpHovered] = useState(false);
  const [warpFocused, setWarpFocused] = useState(false);
  const birthDate = new Date('2009-04-18');
  const today = new Date();
  const age = differenceInYears(today, birthDate);

  return (
    <main className="flex h-screen w-fit flex-col items-start justify-center gap-8 p-10 px-10 text-[13px] text-muted-foreground">
      <WarpHoverBackground active={warpHovered || warpFocused} />
        <div className="flex flex-col gap-1">
          <h1 className="text-primary">Vicente Sanchez</h1>
          <p>São Paulo, Brazil</p>
        </div>

      <div className="flex flex-col gap-2">
        <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-pretty text-muted-foreground">
          {age}y/o HS dropout / Product Engineer @{' '}
          <AnimatedLink
            href="https://warp.co"

            variant="primary"
            target="_blank"
            onMouseEnter={() => setWarpHovered(true)}
            onMouseLeave={() => setWarpHovered(false)}
            onFocus={() => setWarpFocused(true)}
            onBlur={() => setWarpFocused(false)}
          >
            warp.co
          </AnimatedLink>
        </p>

        <p>
          Into <span className="text-primary">Systems</span>,{' '}
          <span className="text-primary">OSS</span> & <span className="text-primary">Web3</span>
        </p>
      </div>

			<ul className="flex flex-col w-fit gap-2">
        {LINKS.map((link) => (
					<div key={link.label} className="flex flex-row items-center justify-center gap-2">
						<li className="flex flex-row items-center justify-center text-muted-foreground">
							<AnimatedLink variant="secondary" href={link.href}>
                {link.label}
              </AnimatedLink>
            </li>

          </div>
        ))}
      </ul>
    </main>
  );
}
