export interface Post {
    slug: string;
    content: string;
    data: PostMeta;
}

export interface PostMeta {
    title: string;
    description: string;
    tags: string[];
}