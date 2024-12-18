import type { CollectionEntry } from "astro:content";

export const WEBSITE_DOMAIN = "css-seducteur-css.site";

export function sortByPublishDate(
  tutorials: CollectionEntry<"tutorials">[],
  order: "asc" | "desc" = "asc"
) {
  return tutorials.sort((a, b) => {
    if (order === "asc") {
      return a.data.publishDate.getTime() - b.data.publishDate.getTime();
    }
    return b.data.publishDate.getTime() - a.data.publishDate.getTime();
  });
}
