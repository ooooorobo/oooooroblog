import type { NextPage } from "next";
import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { getPosts } from "@src/utils/postUtil";
import { PostListElement } from "@src/model/post";
import Profile from "@src/components/main/Profile";
import PostList from "@src/components/main/PostList";
import WavyLine from "@src/components/WavyLine";

const POST_COUNT = 10;

const Home: NextPage<HomeProps> = ({ posts }: HomeProps) => {
  const [page, setPage] = useState(0);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [postList, setPostList] = useState<PostListElement[]>(posts);

  const onClickNextPage = useCallback(() => setPage((prev) => prev + 1), []);

  useEffect(() => {
    if (page > 0) {
      fetch(`/api/posts/${page}/${POST_COUNT}`)
        .then((res) => res.json())
        .then((json) => {
          if (json.length < POST_COUNT) {
            setHasNextPage(false);
          }
          setPostList((prev) => [...prev, ...json]);
        });
    }
  }, [page]);

  return (
    <Wrapper>
      <Profile />
      <WavyLine size={10} />
      <PostList posts={postList} />
      {hasNextPage && <button onClick={onClickNextPage}>다음</button>}
    </Wrapper>
  );
};

export default Home;

export const getStaticProps = async () => {
  const posts: PostListElement[] = await getPosts(0, POST_COUNT);
  return { props: { posts } };
};

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
`;
