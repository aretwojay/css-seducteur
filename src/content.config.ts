import { glob } from "astro/loaders";
import { defineCollection, reference, z } from "astro:content";

const tutorials = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/tutorials" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // // In frontmatter, dates written without quotes around them are interpreted as Date objects
    publishDate: z.date(),
    author: reference("authors"),
    tags: z.array(z.string()),
    relatedPosts: z.array(reference("tutorials")),
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

const authors = defineCollection({
  loader: glob({ pattern: "**/[^_]*.json", base: "./src/data/authors" }),
  schema: z.object({
    name: z.string(),
    github: z.string().url(),
    image: z.string().url(),
  }),
});

export const collections = {
  tutorials,
  authors,
};
