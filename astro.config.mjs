// @ts-check
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import { remarkReadingTime } from "./remark-reading-time.mjs";

// https://astro.build/config
export default defineConfig({
  // Must be 'static' or 'hybrid'
  site: "https://css-seducteur-css.site",
  output: "static",
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  adapter: vercel({
    isr: {
      // caches all pages on first request and saves for 1 day
      expiration: 60 * 60 * 24,
    },
    webAnalytics: {
      enabled: true,
    },
  }),

  integrations: [
    sitemap({
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date("2022-02-24"),
    }),
    tailwind({
      // Disable injecting styles, import manually instead
      applyBaseStyles: true,
    }),
  ],
});
