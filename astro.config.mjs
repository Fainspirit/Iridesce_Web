import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://iridesce.art',

  outDir: './docs',

  fonts: [{
    name: 'Fleur De Leah',
    style: 'normal',
    weight: 400,
    variable: '--font-fleur-de-leah'
  }]
});
