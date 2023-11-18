import { compareDesc } from "date-fns";
import { allPosts } from "contentlayer/generated";
import { PostListElement } from "@src/types/post";

const getSortedPosts = () => {
  return allPosts.sort((a, b) => {
    const compareByDate = compareDesc(new Date(a.date), new Date(b.date));
    if (compareByDate !== 0) return compareByDate;
    return b.id - a.id;
  });
};

export const getAllPostMeta = (): PostListElement[] => {
  return getSortedPosts().map(
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

export const getPostDetail = (slug: string) => {
  const sorted = getSortedPosts();
  const postIdx = sorted.findIndex((post) => post._raw.flattenedPath === slug);
  return {
    postIdx,
    detail: sorted[postIdx],
  };
};

export const getPostMeta = (idx: number) => {
  return getSortedPosts()[idx];
};
