import type { NextPage } from "next";
import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import PostUtil from "@src/utils/postUtil";
import { PostListElement } from "@src/model/post";
import Profile from "@src/components/main/Profile";
import PostList from "@src/components/main/PostList";
import WavyLine from "@src/components/WavyLine";
import TagList from "@src/components/main/TagList";
import { NextSeo } from "next-seo";

const POST_COUNT = 10;

const Home: NextPage<HomeProps> = ({ tags }: HomeProps) => {
  const [page, setPage] = useState(0);
  const [selectedTag, setSelectedTag] = useState<string | undefined>(undefined);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [postList, setPostList] = useState<PostListElement[]>([]);

  const onClickNextPage = useCallback(() => setPage((prev) => prev + 1), []);
  const onClickTag = useCallback(
    (tag: string | undefined) => {
      setPostList([]);
      setPage(0);
      setSelectedTag(tag);
      setHasNextPage(true);
    },
    [selectedTag]
  );

  useEffect(() => {
    fetch(
      `/api/posts/${page}/${POST_COUNT}${selectedTag ? `/${selectedTag}` : ""}`
    )
      .then((res) => res.json())
      .then((json) => {
        if (json.length < POST_COUNT) {
          setHasNextPage(false);
        }
        setPostList((prev) => [...prev, ...json]);
      });
  }, [page, selectedTag]);

  return (
    <Wrapper>
      <NextSeo title={"oooooroblog"} />
      <Profile />
      <WavyLine size={10} />
      <TagList
        tagList={tags}
        onClickTag={onClickTag}
        selectedTag={selectedTag}
      />
      <PostList posts={postList} />
      {hasNextPage && <button onClick={onClickNextPage}>다음</button>}
    </Wrapper>
  );
};

export default Home;

export const getStaticProps = async () => {
  const posts: PostListElement[] = await PostUtil.instance.getPosts(
    0,
    POST_COUNT
  );
  const tags: string[] = await PostUtil.instance.getAllTags();
  return { props: { posts, tags } };
};

interface HomeProps {
  posts: PostListElement[];
  tags: string[];
}

const Wrapper = styled.div`
  margin: 2.5rem auto;
  max-width: 760px;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
`;
