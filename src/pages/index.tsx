import type { NextPage } from "next";
import { useCallback, useEffect, useRef, useState } from "react";
import { NextSeo } from "next-seo";
import {
  dehydrate,
  QueryClient,
  useInfiniteQuery,
} from "@tanstack/react-query";
import styled from "styled-components";

// libs
import PostUtil from "@src/utils/postUtil";
import { PostListElement } from "@src/model/post";
import { QueryKey } from "@src/constants/queryKey";
import { POST_COUNT } from "@src/constants/constants";
import { fetchPostList } from "@src/query/post";
import { useLocalStorage } from "@src/utils/hooks/useLocalStorage";
import { StorageKey } from "@src/constants/storageKey";
import { isWindow } from "@src/utils/windowUtil";

// components
import Profile from "@src/components/main/Profile";
import PostList from "@src/components/main/PostList";
import WavyLine from "@src/components/WavyLine";
import TagList from "@src/components/main/TagList";
import Loading from "@src/components/common/Loading";

const Home: NextPage<HomeProps> = ({ tags }: HomeProps) => {
  const observerEntry = useRef<HTMLDivElement>(null);

  const [selectedTag, setSelectedTag] = useState<string | undefined>(undefined);
  const [scrollY, setScrollY] = useLocalStorage(StorageKey.MAIN_SCROLL_Y, 0);

  const { data, fetchNextPage, isLoading, hasNextPage } = useInfiniteQuery(
    [`${QueryKey.POST_LIST}${selectedTag}`],
    ({ pageParam }) =>
      fetchPostList({ page: pageParam, postCount: POST_COUNT, selectedTag }),
    {
      getNextPageParam: (lastPage, allPages) =>
        lastPage.length === POST_COUNT ? allPages.length : undefined,
    }
  );

  const onClickTag = useCallback(
    (tag: string | undefined) => {
      setSelectedTag(tag);
    },
    [selectedTag]
  );

  const onClickPost = useCallback(() => {
    setScrollY(window.scrollY);
  }, [setScrollY]);

  useEffect(() => {
    if (!isWindow()) return;

    // todo: 함수 분리
    (async () => {
      const scrollToDestination = async () => {
        while (window.scrollY + 50 < scrollY) {
          await new Promise((resolve) =>
            setTimeout(() => {
              window.scrollTo({
                top: Math.min(document.body.scrollHeight, scrollY),
              });
              resolve(10);
            }, 20)
          );
        }
      };
      const timer = new Promise((resolve) => {
        setTimeout(resolve, 500, true);
      });

      await Promise.race([scrollToDestination(), timer]);

      setScrollY(0);
    })();
  }, []);

  useEffect(() => {
    if (!observerEntry.current || !hasNextPage) return;
    const observer = new IntersectionObserver(() => {
      fetchNextPage();
    });
    observer.observe(observerEntry.current);
  }, [observerEntry, hasNextPage]);

  return (
    <Wrapper minHeight={scrollY}>
      <NextSeo title={"oooooroblog"} />
      <Profile />
      <WavyLine size={10} />
      <TagList
        tagList={tags}
        onClickTag={onClickTag}
        selectedTag={selectedTag}
      />
      <div>
        {data &&
          data.pages.map((posts, i) => (
            <PostList key={i} posts={posts} onClickPost={onClickPost} />
          ))}
      </div>
      {isLoading && <Loading />}
      <div ref={observerEntry} />
    </Wrapper>
  );
};

export default Home;

export const getStaticProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery(
    [QueryKey.POST_LIST],
    ({ pageParam }) => fetchPostList({ page: pageParam, postCount: POST_COUNT })
  );
  const tags: string[] = await PostUtil.instance.getAllTags();
  return { props: { dehydrateState: dehydrate(queryClient), tags } };
};

interface HomeProps {
  posts: PostListElement[];
  tags: string[];
}

const Wrapper = styled.div<{ minHeight: number }>`
  margin: 2.5rem auto;
  max-width: 760px;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
`;
