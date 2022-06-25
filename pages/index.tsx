import type {NextPage} from 'next'
import Link from "next/link"
import {getPosts} from "../utils/postUtil";
import {PostListElement} from "../model/post";

const Home: NextPage<HomeProps> = ({posts}: HomeProps) => {
    return <div>
        {posts.map(post =>
            <Link key={post.slug} href={`/posts/${post.slug}`}>
                <a>{post.meta.title}</a>
            </Link>
        )}
    </div>
}

export default Home

export const getStaticProps = async () => {
    const posts: PostListElement[] = await getPosts(0, 10);
    return {props: {posts}}
}

interface HomeProps {
    posts: PostListElement[];
}