import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://valsaven.com',
	integrations: [mdx(), sitemap()],
	i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ja']
  },
});
