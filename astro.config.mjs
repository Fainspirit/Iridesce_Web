import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark'; //
import wikiLink from '@portaljs/remark-wiki-link';

export default defineConfig({
  site: 'https://iridesce.art',

  outDir: './docs',
  markdown: {
    processor: unified({
      remarkPlugins: [wikiLink], // Configuration lives inside the processor now
    }),
  },
  
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
