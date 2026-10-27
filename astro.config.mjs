import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://iridesce.art',

  outDir: './docs',

  integrations: [
    // Add font styles here if using external fonts
    // Example for Google Fonts:
    // import FontLoader from 'unplugin-fonts/astro';
    // import { Outfit } from '@unocss/preset-unocss';
    // FontLoader({
    //   families: [
    //     { name: 'Fleur De Leah', subset: ['latin'] },
    //  ]
    // })
  ]
});
