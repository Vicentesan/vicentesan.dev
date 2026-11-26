import * as Cloudflare from '@alchemy.run/cloudflare';
import * as Alchemy from 'alchemy';
import * as Effect from 'effect/Effect';

/** The stage that serves the real domain. Every other stage gets a workers.dev URL. */
const PRODUCTION_STAGE = 'prod';
const DOMAIN = 'vicente.fyi';

export default Alchemy.Stack(
  'VicenteSite',
  {
    providers: Cloudflare.providers(),
    state: Cloudflare.state({ workerName: 'portfolio-state-store'})
  },
  Effect.gen(function* () {
    const stage = yield* Alchemy.Stage;

    // `vite build` prerenders every page, so the Worker is assets-only:
    // Cloudflare serves the HTML itself and no Worker code runs.
    const website = yield* Cloudflare.Website.Vite('Website', {
      domain: stage === PRODUCTION_STAGE ? DOMAIN : undefined,
      assets: {
        // `/blog/<slug>` is served from `blog/<slug>.html`.
        htmlHandling: 'auto-trailing-slash',
        // Unknown URLs get the prerendered `404.html` with a 404 status.
        notFoundHandling: '404-page'
      },
      memo: {
        include: ['src/**', 'public/**', 'index.html', 'vite.config.ts', 'package.json'],
        lockfile: true
      }
    });

    return { url: website.url };
  })
);
