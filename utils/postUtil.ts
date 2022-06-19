import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import {Post} from "../model/post";

export const getPosts = (page: number, count: number) => {
    const [start, end] = [page * count, (page + 1) * count];

    const postPath = path.join(process.cwd(), 'pages', 'posts');

    const dirFiles = fs.readdirSync(postPath, {
        withFileTypes: true
    });

    const posts: Post[] = dirFiles
        .filter(file => file.name.endsWith('.mdx'))
        .slice(start, end)
        .map(file => {
            const fileContent = fs.readFileSync(path.join(postPath, file.name), 'utf-8');
            const {data, content} = matter(fileContent);
            const slug = file.name.replace(/.mdx$/, '');
            return {data, content, slug} as Post
        })
        .filter(post => post);

    return posts;
}