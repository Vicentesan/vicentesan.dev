import type { Html } from '@effect/ui/html';
import { AnimatedLink } from '../components/AnimatedLink.ts';
import { AppRoute } from '../routes.ts';

export const NotFoundPage = <M>(h: Html.H<M>) =>
  h.main
    .class(
      'flex h-screen w-fit flex-col items-start justify-center gap-8 p-10 text-[13px] text-muted-foreground'
    )
    .children(
      h.div
        .class('flex flex-col gap-1')
        .children(h.h1.class('text-primary').children('404'), h.p('This page does not exist.')),
      AnimatedLink(h, { href: AppRoute.print(AppRoute.Home()), variant: 'primary' }).children(
        'Back home'
      )
    );
