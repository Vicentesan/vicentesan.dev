import { Route } from '@effect/ui';
import { Schema } from 'effect';

export const AppRoute = Route.union({
  Home: Route.make('/'),
  BlogPost: Route.make('/blog/:slug', { params: { slug: Schema.String } }),
  NotFound: Route.make('/*')
});

export type AppRoute = typeof AppRoute.Type;
