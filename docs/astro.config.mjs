import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  integrations: [
    starlight({
      title: 'Databricks Examples',
      description:
        'Preparation guides and examples for Databricks certifications.',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/mrn/databricks-examples',
        },
      ],
      sidebar: [
        {
          label: 'Machine Learning Associate',
          items: [
            {
              autogenerate: {
                directory: 'examples/machine_learning_associate',
              },
            },
          ],
        },
      ],
      editLink: {
        baseUrl:
          'https://github.com/mrn/databricks-examples/edit/main/',
      },
    }),
  ],
  vite: {
    resolve: {
      // Redirect Starlight component imports from MDX files living outside
      // docs/ to the packages installed in docs/node_modules/.
      alias: [
        {
          find: /^@astrojs\/starlight(.*)/,
          replacement: path.resolve(__dirname, 'node_modules/@astrojs/starlight$1'),
        },
      ],
    },
    server: {
      watch: {
        // Also watch MDX files outside docs/ (co-located with code)
        ignored: ['!**/examples/**'],
      },
    },
  },
});
