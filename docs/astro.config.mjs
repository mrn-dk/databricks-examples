import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeNord from 'starlight-theme-nord';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Databricks Examples',
      description:
        'Preparation guides and examples for Databricks certifications.',
      plugins: [starlightThemeNord()],
      customCss: ['./src/styles/custom.css'],
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
                directory: 'machine_learning_associate',
              },
            }
          ],
        },
      ],
      editLink: {
        baseUrl:
          'https://github.com/mrn/databricks-examples/edit/main/docs/',
      }
    }),
  ],
});
