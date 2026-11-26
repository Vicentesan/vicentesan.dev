import { Head, Router, UiSchema } from '@effect/ui';
import { Html, HtmlHead } from '@effect/ui/html';
import { Schema } from 'effect';
import { BlogPostPage } from './pages/blog/BlogPostPage.ts';
import { HomePage } from './pages/HomePage.ts';
import { NotFoundPage } from './pages/NotFoundPage.ts';
import { AppRoute } from './routes.ts';
import {
  OG_IMAGE,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_NAME,
  SITE_URL,
  X_HANDLE
} from './site.ts';

const AppMessage = UiSchema.TaggedEnum({
  ChangedRoute: { route: AppRoute }
});

export const App = Html.component({
  name: 'App',
  // The first route arrives through props, every later one as a message.
  props: Schema.Struct({ route: AppRoute }),
  model: Schema.Struct({ route: AppRoute }),
  message: AppMessage
}).make({
  init: ($) => ({ route: $.props.route }),
  update: {
    ChangedRoute: (_$, { route }) => ({ route })
  },
  subscriptions: ({ model }) => [
    Router.subscription(AppRoute, model.route, (route) => AppMessage.ChangedRoute({ route }))
  ],
  // Site-wide defaults. A page's own `head` replaces the entries it names.
  head: ({ model }) => [
    ...(model.route._tag === 'NotFound' ? [Head.title('Not found')] : []),
    HtmlHead.lang('en'),
    HtmlHead.meta({ name: 'description', content: SITE_DESCRIPTION }),
    HtmlHead.meta({ name: 'keywords', content: SITE_KEYWORDS.join(', ') }),
    HtmlHead.meta({ name: 'author', content: SITE_NAME }),
    HtmlHead.meta({
      name: 'robots',
      content: model.route._tag === 'NotFound' ? 'noindex' : 'index, follow'
    }),
    HtmlHead.meta({ property: 'og:title', content: SITE_NAME }),
    HtmlHead.meta({ property: 'og:description', content: SITE_DESCRIPTION }),
    HtmlHead.meta({ property: 'og:url', content: SITE_URL }),
    HtmlHead.meta({ property: 'og:site_name', content: SITE_NAME }),
    HtmlHead.meta({ property: 'og:locale', content: 'en_US' }),
    HtmlHead.meta({ property: 'og:type', content: 'website' }),
    HtmlHead.meta({ property: 'og:image', content: OG_IMAGE.url }),
    HtmlHead.meta({ property: 'og:image:width', content: String(OG_IMAGE.width) }),
    HtmlHead.meta({ property: 'og:image:height', content: String(OG_IMAGE.height) }),
    HtmlHead.meta({ property: 'og:image:alt', content: OG_IMAGE.alt }),
    HtmlHead.meta({ name: 'twitter:card', content: 'summary_large_image' }),
    HtmlHead.meta({ name: 'twitter:title', content: SITE_NAME }),
    HtmlHead.meta({ name: 'twitter:description', content: SITE_DESCRIPTION }),
    HtmlHead.meta({ name: 'twitter:creator', content: X_HANDLE }),
    HtmlHead.meta({ name: 'twitter:image', content: OG_IMAGE.url })
  ],
  view: (h, { route }) =>
    AppRoute.match(route, {
      Home: () => HomePage(h, {}),
      BlogPost: (route) =>
        BlogPostPage(h, {
          key: AppRoute.printPath(route),
          props: { slug: route.params.slug }
        }),
      NotFound: () => NotFoundPage(h)
    })
});
