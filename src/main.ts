import '@fontsource-variable/inter';
import './styles.css';
import { Router } from '@effect/ui';
import { BrowserHost, BrowserRouter, HtmlHydrate } from '@effect/ui/html';
import { Effect, Layer } from 'effect';
import { App } from './App.ts';
import { AppRoute } from './routes.ts';

const container = document.getElementById('app');
if (!container) throw new Error('index.html has no #app element');

// A prerendered page ships the state it was rendered from, and the app
// adopts its HTML. The dev server and the 404 page ship none, so the app
// builds the page itself.
const state = document.getElementById('app-state')?.textContent;

const Main = state
  ? HtmlHydrate.hydrate(App, Router.props(AppRoute), container, JSON.parse(state))
  : Layer.suspend(() => {
      container.replaceChildren();
      return BrowserHost.mount(App, Router.props(AppRoute), container);
    });

Layer.launch(Main.pipe(Layer.provide(BrowserRouter.layer({ routes: AppRoute })))).pipe(
  Effect.runFork
);
