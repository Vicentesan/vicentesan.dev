'use client';

import { useState } from 'react';
import { AnimatedLink } from '@/components/animated-link';
import { WarpHoverBackground } from '@/components/warp-hover-background';
import type { Post } from '@/lib/blog';
import { SOCIALS } from '@/lib/site';

interface HomeProps {
  posts: Post[];
  age: number;
}

export function Home({ posts, age }: HomeProps) {
  const [warpHovered, setWarpHovered] = useState(false);
  const [warpFocused, setWarpFocused] = useState(false);

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

      <ul className="flex w-fit flex-col gap-2">
        {posts.map((post) => (
          <li key={post.slug} className="flex flex-row items-center gap-2 text-muted-foreground">
            <AnimatedLink variant="secondary" href={`/blog/${post.slug}`}>
              {post.label ?? post.title}
            </AnimatedLink>
          </li>
        ))}
      </ul>

      <footer className="fixed bottom-10 left-10 flex flex-row flex-wrap items-center gap-x-1 text-[13px]">
        {SOCIALS.map((social, i) => (
          <span key={social.label} className="flex flex-row items-center gap-x-1">
            {i > 0 && <span>/</span>}
            <AnimatedLink variant="primary" href={social.href} target="_blank">
              {social.label}
            </AnimatedLink>
          </span>
        ))}
      </footer>
    </main>
  );
}
