// @ts-check
import { defineConfig } from "astro/config";

import vercelStatic from "@astrojs/vercel/static";

import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";

import fulldev from "fulldev-ui/integration";

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

  integrations: [
    sitemap(),
    tailwind({
      // Disable injecting styles, import manually instead
      applyBaseStyles: false,
    }),
    fulldev({
      injectRoutes: true,
      css: "/src/css/custom.css",
      colors: {
        theme: "dark",
        dark: {
          background: "#111110",
          base: "#6F6D66",
          brand: "#F50",
        },
        light: {
          background: "#EEEEEC",
          base: "#6F6D66",
          brand: "#F50",
        },
      },
    }),
  ],
});
