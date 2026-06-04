import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

// The site-level docs (homepage, etc.) live in docs/src/content/docs/.
// Example docs live co-located with code in examples/.
// Both are loaded by pointing the glob loader at the repo root (one level
// above this Astro project), then using generateId to produce clean URL slugs.

const SITE_PREFIX = 'docs/src/content/docs/';

export const collections = {
  docs: defineCollection({
    loader: glob({
      pattern: [
        'docs/src/content/docs/**/*.{md,mdx}',
        'examples/**/*.{md,mdx}',
      ],
      // base is relative to the Astro project root (docs/).
      // '../' resolves to the repository root.
      base: '../',
      generateId: ({ entry }) => {
        // Strip the site-level prefix so index.mdx becomes slug "index" (→ URL /)
        if (entry.startsWith(SITE_PREFIX)) {
          return entry.slice(SITE_PREFIX.length).replace(/\.(md|mdx)$/, '');
        }
        // Examples keep their full path as slug: examples/machine_learning_associate/…
        return entry.replace(/\.(md|mdx)$/, '');
      },
    }),
    schema: docsSchema(),
  }),
};
