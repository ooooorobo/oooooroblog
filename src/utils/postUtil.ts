import fs from "fs";
import path from "path";
import { PostListElement, PostMeta } from "@src/model/post";

const parsePostIndex = (name: string) =>
  Number(name.slice(0, name.indexOf("-")));

const getAllPostNames = (reverse?: boolean) => {
  const postPath = path.join(process.cwd(), "src", "pages", "posts");

  return fs
    .readdirSync(postPath)
    .sort(
      (a, b) => (parsePostIndex(a) - parsePostIndex(b)) * (reverse ? -1 : 1)
    );
};

const getPostMeta = async (slug: string) => {
  const m = await import(`@src/pages/posts/${encodeURIComponent(slug)}`);
  return {
    slug: slug.replace(".mdx", ""),
    meta: { ...(m.meta as PostMeta), index: parsePostIndex(slug) } ?? null,
  } as PostListElement;
};

export async function getPosts(
  page: number,
  count: number
): Promise<PostListElement[]> {
  const [start, end] = [page * count, (page + 1) * count];

  const dirFiles = getAllPostNames(true).slice(start, end);

  return Promise.all(dirFiles.map(async (p) => getPostMeta(p)));
}

export interface SidePosts {
  prev?: PostListElement;
  next?: PostListElement;
}
export async function getSidePosts(index: number): Promise<SidePosts> {
  const postNames = getAllPostNames();
  const found: number = postNames.findIndex(
    (post) => parsePostIndex(post) === index
  );
  return {
    prev: found > 0 ? await getPostMeta(postNames[found - 1]) : undefined,
    next:
      found < postNames.length - 1
        ? await getPostMeta(postNames[found + 1])
        : undefined,
  };
}
