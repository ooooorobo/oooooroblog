import type {NextPage} from "next";
import {useCallback, useEffect, useRef, useState} from "react";
import {NextSeo} from "next-seo";
import {QueryClient, useInfiniteQuery} from "@tanstack/react-query";
import styled from "styled-components";
import {useRouter} from "next/router";

// libs
import PostService from "../service/postService";
import {PostListElement} from "@src/model/post";
import {QueryKey} from "@src/constants/queryKey";
import {POST_COUNT} from "@src/constants/constants";
import {fetchPostList} from "@src/query/post";
import {isWindow} from "@src/utils/windowUtil";

// components
import Profile from "@src/components/main/Profile";
import PostList from "@src/components/main/PostList";
import WavyLine from "@src/components/WavyLine";
import TagList from "@src/components/main/TagList";
import Loading from "@src/components/common/Loading";

const Home: NextPage<HomeProps> = ({tags, posts}: HomeProps) => {
    const observerEntry = useRef<HTMLDivElement>(null);
    const router = useRouter();

    const [selectedTag, setSelectedTag] = useState<string | undefined>(() =>
        isWindow()
            ? window.location.search.split("tag=")?.[1]?.split("&")?.[0]
            : undefined
    );

    const {data, fetchNextPage, isLoading, hasNextPage} = useInfiniteQuery(
        [QueryKey.POST_LIST, selectedTag],
        ({pageParam}) =>
            fetchPostList({page: pageParam, postCount: POST_COUNT, selectedTag}),
        {
            getNextPageParam: (lastPage, allPages) =>
                lastPage.length === POST_COUNT ? allPages.length : undefined,
        }
    );

    const onClickTag = useCallback(
        (tag: string | undefined) => {
            setSelectedTag(tag);
            router.push(
                router.pathname,
                {pathname: router.basePath, query: {tag}},
                {shallow: true}
            );
        },
        [selectedTag]
    );

    useEffect(() => {
        if (!observerEntry.current || !hasNextPage) return;
        const observer = new IntersectionObserver(
            () => {
                fetchNextPage();
            },
            {threshold: 0}
        );
        observer.observe(observerEntry.current);
    }, [observerEntry, hasNextPage]);

    return (
        <Wrapper>
            <NextSeo
                title={"oooooroblog"}
                description={"웹 프론트엔드 개발자 조예진"}
                canonical={"https://www.oooooroblog.com"}
                openGraph={{
                    type: "website",
                    url: "https://www.oooooroblog.com",
                    title: "oooooroblog",
                    description: "웹 프론트엔드 개발자 조예진",
                }}
            />
            <Profile/>
            <WavyLine size={10}/>
            <TagList
                tagList={tags}
                onClickTag={onClickTag}
                selectedTag={selectedTag}
            />
            <div>
                {(data ? data.pages : [posts]).map((posts, i) => (
                    <PostList key={i} posts={posts}/>
                ))}
                <div ref={observerEntry}/>
            </div>
            {isLoading && <Loading/>}
            {!isLoading && !hasNextPage && !selectedTag && (
                <LastMessage>
                    안녕하세요! 👆 이 글이 이 블로그의 마지막 글입니다 :)
                </LastMessage>
            )}
        </Wrapper>
    );
};

export default Home;

export const getStaticProps = async () => {
    const posts: PostListElement[] = await fetchPostList({
        page: 0,
        postCount: POST_COUNT,
    });
    const tags: string[] = await PostService.instance.getAllTags();

    const queryClient = new QueryClient();
    await queryClient.prefetchQuery([QueryKey.POST_LIST])

    return {props: {tags, posts}};
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

const LastMessage = styled.p`
  margin-top: 60px;
  text-align: center;
  font-size: ${({theme}) => theme.fontSizes.s};
`;
