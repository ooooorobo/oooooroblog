import type {NextPage} from 'next'
import {getPosts} from "../utils/postUtil";
import {PostListElement} from "../model/post";
import Profile from "../components/main/Profile";
import PostList from "../components/main/PostList";
import styled from "styled-components";
import WavyLine from "../components/WavyLine";

const Home: NextPage<HomeProps> = ({posts}: HomeProps) => {
    return <Wrapper>
        <Profile/>
        <WavyLine size={10} />
        <PostList posts={posts} />
    </Wrapper>;
}

export default Home

export const getStaticProps = async () => {
    const posts: PostListElement[] = await getPosts(0, 10);
    return {props: {posts}}
}

interface HomeProps {
    posts: PostListElement[];
}

const Wrapper = styled.div`
  margin: 2.5rem auto;
  max-width: 760px;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
`