import { Head, UiSchema } from '@effect/ui';
import { Html, HtmlHead } from '@effect/ui/html';
import { Schema } from 'effect';
import { AnimatedLink } from '../components/AnimatedLink.ts';
import { WarpHoverBackground } from '../components/WarpHoverBackground.ts';
import { posts } from '../content/posts.ts';
import { AppRoute } from '../routes.ts';
import { ageOn, SITE_NAME, SITE_URL, SOCIALS } from '../site.ts';

const HomePageMessage = UiSchema.TaggedEnum({
  EnteredWarpLink: {},
  LeftWarpLink: {},
  FocusedWarpLink: {},
  BlurredWarpLink: {}
});

export const HomePage = Html.component({
  name: 'HomePage',
  model: Schema.Struct({
    isWarpHovered: Schema.Boolean,
    isWarpFocused: Schema.Boolean
  }),
  message: HomePageMessage,
  // Hover and focus are the DOM's to know: Back shouldn't bring them back.
  restore: false
}).make({
  init: () => ({ isWarpHovered: false, isWarpFocused: false }),
  update: {
    EnteredWarpLink: ($) => $.evolve({ isWarpHovered: true }),
    LeftWarpLink: ($) => $.evolve({ isWarpHovered: false }),
    FocusedWarpLink: ($) => $.evolve({ isWarpFocused: true }),
    BlurredWarpLink: ($) => $.evolve({ isWarpFocused: false })
  },
  head: () => [
    Head.title(SITE_NAME),
    HtmlHead.link({ rel: 'canonical', href: `${SITE_URL}/` }),
    HtmlHead.meta({ property: 'og:url', content: SITE_URL })
  ],
  view: (h, model) =>
    h.main
      .class(
        'flex h-screen w-fit flex-col items-start justify-center gap-8 p-10 px-10 text-[13px] text-muted-foreground'
      )
      .children(
        WarpHoverBackground(h, { active: model.isWarpHovered || model.isWarpFocused }),
        h.div
          .class('flex flex-col gap-1')
          .children(h.h1.class('text-primary').children(SITE_NAME), h.p('São Paulo, Brazil')),
        h.div.class('flex flex-col gap-2').children(
          h.p
            .class('flex flex-wrap items-center gap-x-2 gap-y-1 text-pretty text-muted-foreground')
            .children(
              // The page is prerendered at deploy, so the age is the visitor's
              // clock's, not the build's.
              `${ageOn(new Date())}y/o HS dropout / Product Engineer @ `,
              AnimatedLink(h, { href: 'https://warp.co', variant: 'primary', external: true })
                .on('mouseenter', HomePageMessage.EnteredWarpLink())
                .on('mouseleave', HomePageMessage.LeftWarpLink())
                .on('focus', HomePageMessage.FocusedWarpLink())
                .on('blur', HomePageMessage.BlurredWarpLink())
                .children('warp.co')
            ),
          h.p(
            'Into ',
            h.span.class('text-primary').children('Systems'),
            ', ',
            h.span.class('text-primary').children('OSS'),
            ' & ',
            h.span.class('text-primary').children('Web3')
          )
        ),
        h.ul.class('flex w-fit flex-col gap-2').children(
          posts.map((post) =>
            h.li
              .key(post.slug)
              .class('flex flex-row items-center gap-2 text-muted-foreground')
              .children(
                AnimatedLink(h, {
                  href: AppRoute.print(AppRoute.BlogPost({ params: { slug: post.slug } }))
                }).children(post.label)
              )
          )
        ),
        h.footer
          .class('fixed bottom-10 left-10 flex flex-row flex-wrap items-center gap-x-1 text-[13px]')
          .children(
            SOCIALS.map((social, index) =>
              h.span
                .key(social.label)
                .class('flex flex-row items-center gap-x-1')
                .children(
                  index > 0 && h.span('/'),
                  AnimatedLink(h, {
                    href: social.href,
                    variant: 'primary',
                    external: true
                  }).children(social.label)
                )
            )
          )
      )
});
