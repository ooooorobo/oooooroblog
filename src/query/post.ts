import { PostListElement } from "@src/model/post";
import { SERVER_URL } from "@src/constants/environments";

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
    `${SERVER_URL}/api/posts/${page}/${postCount}${
      selectedTag ? `/${selectedTag}` : ""
    }`
  );
  return res.json();
}
