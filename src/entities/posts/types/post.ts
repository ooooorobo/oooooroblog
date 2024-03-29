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
  index: number;
  title: string;
  description: string;
  category: string;
  series: string;
  tags: string[];
  keywords: string[];
  postedAt: string;
}
