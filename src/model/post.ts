export interface Post {
  slug: string;
  content: string;
  meta: PostMeta;
}

export interface PostListElement {
  slug: string;
  meta: PostMeta;
}

export interface PostMeta {
  title: string;
  description: string;
  category: string;
  series: string;
  tags: string[];
  postedAt: string;
}

export const CategoryType = {
  DEVELOP: "개발",
  REVIEW: "리뷰",
  BOOK: "서평",
};
