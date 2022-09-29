import { PostListElement } from "@src/model/post";

interface FetchPostListParam {
  page: number;
  postCount: number;
  selectedTag?: string;
}

export async function fetchPostList({
  page,
  postCount,
  selectedTag,
}: FetchPostListParam): Promise<PostListElement[]> {
  const res = await fetch(
    `/api/posts/${page}/${postCount}${selectedTag ? `/${selectedTag}` : ""}`
  );
  return res.json();
}
