import type { NextPage } from "next";
import { useCallback, useEffect, useState } from "react";
import { NextSeo } from "next-seo";
import { useInfiniteQuery } from "@tanstack/react-query";
import styled from "styled-components";

// libs
import PostUtil from "@src/utils/postUtil";
import { PostListElement } from "@src/model/post";
import { QueryKey } from "@src/constants/queryKey";
import { POST_COUNT } from "@src/constants/constants";
import { fetchPostList } from "@src/query/post";

// components
import Profile from "@src/components/main/Profile";
import PostList from "@src/components/main/PostList";
import WavyLine from "@src/components/WavyLine";
import TagList from "@src/components/main/TagList";
import Loading from "@src/components/common/Loading";

const Home: NextPage<HomeProps> = ({ tags }: HomeProps) => {
  const [selectedTag, setSelectedTag] = useState<string | undefined>(undefined);

  const { data, fetchNextPage, isLoading, hasNextPage } = useInfiniteQuery(
    [`${QueryKey.POST_LIST}${selectedTag}`],
    ({ pageParam }) =>
      fetchPostList({ page: pageParam, postCount: POST_COUNT, selectedTag }),
    {
      getNextPageParam: (lastPage, allPages) =>
        lastPage.length === POST_COUNT ? allPages.length : undefined,
    }
  );

  const onClickNextPage = useCallback(() => fetchNextPage(), []);
  const onClickTag = useCallback(
    (tag: string | undefined) => {
      setSelectedTag(tag);
    },
    [selectedTag]
  );

  useEffect(() => {
    fetchNextPage();
  }, [selectedTag]);

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
      {isLoading && <Loading />}
      <div>
        {data &&
          data.pages.map((posts, i) => <PostList key={i} posts={posts} />)}
      </div>
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
