import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const tutorials = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/tutorials" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // // In frontmatter, dates written without quotes around them are interpreted as Date objects
    publishDate: z.date(),
    author: z.string().default("Anonymous"),
    tags: z.array(z.string()),
    // An optional frontmatter property. Very common!
    // footnote: z.string().optional(),
    // // You can also transform a date string (e.g. "2022-07-08") to a Date object
    // // publishDate: z.string().transform((str) => new Date(str)),
    // // Advanced: Validate that the string is also an email
    // authorContact: z.string().email(),
    // // Advanced: Validate that the string is also a URL
    // canonicalURL: z.string().url(),
    // sortOrder: z.number(),
    // image: z.object({
    //   src: z.string(),
    //   alt: z.string(),
    // }),
    // isDraft: z.boolean(),
  }),
});

export const collections = {
  tutorials,
};
