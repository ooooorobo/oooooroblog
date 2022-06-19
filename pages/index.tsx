import type {NextPage} from 'next'
import {getPosts} from "../utils/postUtil";
import {Post} from "../model/post";

const Home: NextPage<HomeProps> = ({posts}: HomeProps) => {
    return <div>
      {posts.map(post => <p key={post.slug}>{post.data.title}</p>)}
    </div>
}

export default Home

export const getStaticProps = () => {
    const posts: Post[] = getPosts(0, 10);
    return {props: {posts}}
}

interface HomeProps {
    posts: Post[];
}