import type {NextPage} from 'next'
import {getPosts} from "../utils/postUtil";
import {PostListElement} from "../model/post";

const Home: NextPage<HomeProps> = ({posts}: HomeProps) => {
    return <div>
      {posts.map(post => <a key={post.slug} href={`/posts/${post.slug}`}>{post.meta.title}</a>)}
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