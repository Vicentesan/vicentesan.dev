import type { Html } from '@effect/ui/html';
import { AppRoute } from '../routes.ts';

export const BackButton = <M>(h: Html.H<M>) =>
  h.div
    .class(
      'static top-0 w-fit select-none [@media(min-width:1145px)]:fixed [@media(min-width:1416px)]:translate-x-[-360px]',
      '[@media(min-width:1145px)]:translate-y-20 [@media(min-width:1145px)_and_(max-width:1415px)]:translate-x-[-240px]'
    )
    .children(
      h.a
        .attr('href', AppRoute.print(AppRoute.Home()))
        .attr('title', 'Go back')
        .class(
          'group flex items-center justify-center gap-2 text-muted-foreground hover:text-foreground'
        )
        .children(
          h.span.class('icon-undo size-4').attr('aria-hidden', 'true'),
          h.span.class('text-[13px] leading-none').children('Back')
        )
    );
