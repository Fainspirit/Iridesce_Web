import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import wikiLinkPlugin from 'remark-wiki-link';

export default defineConfig({
  site: 'https://iridesce.art',

  outDir: './docs',

  
  markdown: {
    // Override the default processor to inject remark plugins
    processor: unified({
      remarkPlugins: [
        [
          wikiLinkPlugin,
          {
            // How paths are matched ("shortestPossible" mimics Obsidian's loose matching)
            format: 'regular', 
            aliasDivider: '|',
            // Customize how the target page is converted into a website URL path
            hrefTemplate: (permalink) => `/${permalink}/`,
            // Optional: add a CSS class to your generated links
            wikiLinkClassName: 'obsidian-wikilink',
          },
        ],
      ],
    }),
  },
});



