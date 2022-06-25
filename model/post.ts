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
    tags: string[];
    postedAt: string;
}