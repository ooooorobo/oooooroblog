import fs from 'fs';
import path from 'path';
import {PostListElement, PostMeta} from "../model/post";

export async function getPosts(page: number, count: number): Promise<PostListElement[]> {
    const [start, end] = [page * count, (page + 1) * count];

    const postPath = path.join(process.cwd(), 'pages', 'posts');

    const dirFiles = fs.readdirSync(postPath).slice(start, end);

    const postMetaList = await Promise.all(
        dirFiles.map(async p => {
            const m = await import(`../pages/posts/${p}`)
            return {
                slug: p.replace('.mdx', ''),
                meta: m.meta as PostMeta ?? null
            } as PostListElement
        })
    )

    return postMetaList;
}