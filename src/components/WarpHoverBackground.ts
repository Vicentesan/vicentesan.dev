import { Component, Mount } from '@effect/ui';
import type { Html } from '@effect/ui/html';
import { Effect, Schema, Stream } from 'effect';
import { startWarp } from './startWarp.ts';

/**
 * Animates the canvas while `active` is true. The last frame stays on the
 * canvas when it stops, so the CSS fade-out has something to fade.
 */
export const DrawWarp = Mount.make(
  'DrawWarp',
  { args: { active: Schema.Boolean } },
  (canvas: HTMLCanvasElement, _args, changes) => {
    let stop: (() => void) | undefined;

    return Stream.runForEach(changes, ({ active }) =>
      Effect.sync(() => {
        stop?.();
        stop = active ? startWarp(canvas) : undefined;
      })
    ).pipe(Effect.ensuring(Effect.sync(() => stop?.())), Effect.as(Component.noop));
  }
);

export const WarpHoverBackground = <M>(h: Html.H<M>, { active }: { readonly active: boolean }) =>
  h.canvas
    .class('warp-hover-background')
    .attr('data-active', String(active))
    .attr('aria-hidden', 'true')
    .onMount(DrawWarp({ active }));
