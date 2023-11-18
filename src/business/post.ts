import { compareDesc } from "date-fns";
import { allPosts } from "contentlayer/generated";
import { PostListElement } from "@src/types/post";

export const getAllPostMeta = (): PostListElement[] => {
  return allPosts
    .sort((a, b) => {
      const compareByDate = compareDesc(new Date(a.date), new Date(b.date));
      if (compareByDate !== 0) return compareByDate;
      return b.id - a.id;
    })
    .map(
      (meta) =>
        ({
          slug: meta.url,
          meta: {
            index: meta.id,
            title: meta.title,
            description: meta.description || "",
            postedAt: meta.date,
            category: "",
            series: "",
            tags: [],
            keywords: [],
          },
        }) satisfies PostListElement,
    );
};
