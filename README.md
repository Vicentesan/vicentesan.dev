# vicente.fyi

My personal site and a place for writing about systems, fintech, and the web. A minimal homepage, a few interactive details, and long-form posts.

**[Visit the site →](https://vicente.fyi)**

## Stack

- [Effect UI](https://ui.effect.website/) (`@effect/ui`) for the components, routing, document head and Markdown rendering. It is a public preview installed from a pinned [pkg.pr.new](https://pkg.pr.new/~/Effect-TS/ui) snapshot, not from npm.
- [Vite](https://vite.dev) and Tailwind CSS for the build. The build prerenders every page to static HTML, and the browser hydrates it.
- [Alchemy](https://alchemy.run/) to deploy the build to Cloudflare as an assets-only Worker.

## Develop

```sh
bun install
bun run dev:vite   # Vite dev server only, no Cloudflare account needed
bun run dev        # the same site through `alchemy dev`
```

`bun run build` writes the static site to `dist/`, and `bun run preview` serves it.

## Deploy

Connect a Cloudflare account once with `bun alchemy profile edit --add Cloudflare`, then:

```sh
bun run deploy        # your personal stage, on a workers.dev URL
bun run deploy:prod   # the `prod` stage, on vicente.fyi
```

The `prod` stage attaches `vicente.fyi`, so the domain's zone must be in the Cloudflare account. The stack is in `alchemy.run.ts`.

## Writing a post

Add a Markdown file to `src/content/blog`. The file name is the URL slug, and the frontmatter is checked at build time against `src/domain/Post.ts`:

```md
---
title: "The full title"
label: Short label for the home page
description: One sentence for search results and link previews
date: 2026-01-31
keywords: comma, separated, list
---
```

A `## Heading` gets an anchor from its text. End it with `(#custom-id)` to pin the anchor.
