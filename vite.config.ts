import { markdown } from '@effect/ui/html/MarkdownVite';
import tailwindcss from '@tailwindcss/vite';
import { createServer, defineConfig, type Plugin } from 'vite';
import { PostFrontmatter } from './src/domain/Post.ts';

// Compiles every imported `.md` file at build time and checks its
// frontmatter, so no Markdown parser ships to the browser.
const posts = () => markdown({ frontmatter: PostFrontmatter });

/**
 * Turns the single-page build into a static site: once the client bundle is
 * ready, it renders every route into the built `index.html` and emits one
 * HTML file per page. The browser then hydrates that HTML.
 */
const prerender = (): Plugin => ({
  name: 'site:prerender',
  apply: 'build',
  enforce: 'post',
  async generateBundle(_options, bundle) {
    if (this.environment.name !== 'client') return;

    const template = bundle['index.html'];
    if (template?.type !== 'asset') throw new Error('The build emitted no index.html');

    // The app's modules import `.md` files and `import.meta.glob`, so they
    // are loaded through a throwaway Vite server rather than by Node.
    const server = await createServer({
      root: this.environment.config.root,
      configFile: false,
      plugins: [posts()],
      appType: 'custom',
      logLevel: 'error',
      server: { middlewareMode: true, ws: false, watch: null },
      optimizeDeps: { noDiscovery: true }
    });

    try {
      const { prerender } = (await server.ssrLoadModule(
        '/src/prerender.ts'
      )) as typeof import('./src/prerender.ts');

      for (const page of await prerender(String(template.source))) {
        if (page.fileName === 'index.html') template.source = page.html;
        else this.emitFile({ type: 'asset', fileName: page.fileName, source: page.html });
      }
    } finally {
      await server.close();
    }
  }
});

export default defineConfig({
  plugins: [tailwindcss(), posts(), prerender()]
});
