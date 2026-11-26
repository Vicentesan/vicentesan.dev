import { Router } from '@effect/ui';
import { HtmlServer } from '@effect/ui/html';
import { Effect } from 'effect';
import { App } from './App.ts';
import { posts } from './content/posts.ts';
import { AppRoute } from './routes.ts';

export interface PrerenderedPage {
  /** The file to write, relative to the build output. */
  readonly fileName: string;
  readonly html: string;
}

interface Target {
  readonly fileName: string;
  readonly url: string;
  /** Whether the browser adopts this HTML or rebuilds the page. */
  readonly hydrate: boolean;
}

const targets: ReadonlyArray<Target> = [
  { fileName: 'index.html', url: AppRoute.print(AppRoute.Home()), hydrate: true },
  ...posts.map((post) => ({
    // Cloudflare serves `blog/<slug>.html` at `/blog/<slug>`.
    fileName: `blog/${post.slug}.html`,
    url: AppRoute.print(AppRoute.BlogPost({ params: { slug: post.slug } })),
    hydrate: true
  })),
  // Served for every unknown URL, so its state would name the wrong route:
  // the browser builds this one fresh.
  { fileName: '404.html', url: '/404', hydrate: false }
];

const fill = (template: string, marker: string, value: string): string => {
  if (!template.includes(marker)) throw new Error(`index.html is missing ${marker}`);

  // A function, so `$` in the value is not read as a replacement pattern.
  return template.replace(marker, () => value);
};

const renderPage = (template: string, target: Target) =>
  HtmlServer.renderToHtml(App, Router.props(AppRoute), { static: true }).pipe(
    Effect.provide(Router.static({ routes: AppRoute, url: target.url })),
    Effect.map((page): PrerenderedPage => {
      const state = target.hydrate
        ? `<script type="application/json" id="app-state">${HtmlServer.serializeState(page.state)}</script>`
        : '';

      let html = fill(template, '<!--app-head-->', page.head);
      html = fill(html, '<!--app-html-->', page.html);
      html = fill(html, '<!--app-state-->', state);
      if (page.htmlAttributes !== '') html = fill(html, '<html>', `<html ${page.htmlAttributes}>`);

      return { fileName: target.fileName, html };
    })
  );

/**
 * Renders every page of the site into `template`, the built `index.html`.
 * The `prerender` plugin in `vite.config.ts` calls this during the build.
 */
export const prerender = (template: string): Promise<ReadonlyArray<PrerenderedPage>> =>
  Effect.runPromise(Effect.forEach(targets, (target) => renderPage(template, target)));
