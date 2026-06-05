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
          href: 'https://github.com/mrn-dk/databricks-examples',
        },
      ],
      sidebar: [
        {
          label: 'Machine Learning Associate',
          items: [
            { slug: 'machine_learning_associate' },
            {
              label: 'Databricks Machine Learning',
              items: [{ autogenerate: { directory: 'machine_learning_associate/1_databricks_machine_learning' } }],
            },
            {
              label: 'Data Processing',
              items: [{ autogenerate: { directory: 'machine_learning_associate/2_data_processing' } }],
            },
            {
              label: 'Model Development',
              items: [{ autogenerate: { directory: 'machine_learning_associate/3_model_development' } }],
            },
            {
              label: 'Model Deployment',
              items: [{ autogenerate: { directory: 'machine_learning_associate/4_model_deployment' } }],
            },
          ],
        },
      ],
      editLink: {
        baseUrl:
          'https://github.com/mrn-dk/databricks-examples/edit/main/',
      },
    }),
  ],
});
