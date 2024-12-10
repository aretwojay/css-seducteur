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
    webAnalytics: {
      enabled: true,
    },
  }),

  integrations: [
    sitemap(),
    tailwind({
      // Disable injecting styles, import manually instead
      applyBaseStyles: true,
    }),
  ],
});
