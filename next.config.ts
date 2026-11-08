import createMDX from '@next/mdx';
import type { NextConfig } from 'next';
import type { Pluggable } from 'unified';

const nextConfig: NextConfig = {
  pageExtensions: ['ts', 'tsx', 'md', 'mdx']
};

// Frontmatter is read separately by `src/lib/blog.ts`; this strips the YAML
// block from the rendered output instead of showing it as page content.
// Named as a string so it survives Turbopack's config serialization.
const withMDX = createMDX({
  options: {
    // Cast: Turbopack requires the string form, which @next/mdx's types
    // (which expect an imported function) don't model.
    remarkPlugins: [['remark-frontmatter', ['yaml']] as unknown as Pluggable]
  }
});

export default withMDX(nextConfig);
