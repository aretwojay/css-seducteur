// @ts-check
import { defineConfig } from "astro/config";

import vercelStatic from "@astrojs/vercel/static";

import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // Must be 'static' or 'hybrid'
  site: "https://css-seducteur.vercel.app/",
  output: "static",

  adapter: vercelStatic({
    webAnalytics: {
      enabled: true,
    },
  }),

  integrations: [sitemap(), tailwind()],
});