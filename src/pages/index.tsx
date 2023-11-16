import type { NextPage } from "next";
import { useEffect } from "react";
import { NextSeo } from "next-seo";
import styled from "styled-components";
import { compareDesc } from "date-fns";
import { allPosts } from "contentlayer/generated";

import { PostListElement } from "@src/model/post";
import Profile from "@src/components/main/Profile";
import PostList from "@src/components/main/PostList";

const Home: NextPage = () => {
  const posts = allPosts
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
    .map(
      (meta) =>
        ({
          slug: meta.url,
          meta: {
            index: meta.id,
            title: meta.title,
            description: meta.description || "",
            postedAt: meta.date,
            category: "",
            series: "",
            tags: [] as string[],
          },
        } as PostListElement)
    );

  useEffect(() => {
    const scroll = parseInt(sessionStorage.getItem("mainscroll") ?? "0");
    window.scrollTo({ top: scroll, behavior: "auto" });
  }, []);

  const onClickPost = () => {
    sessionStorage.setItem("mainscroll", window.scrollY.toString());
  };

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
      <Profile />
      <div>
        <PostList posts={posts} onClickPost={onClickPost} />
      </div>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  margin: 2.5rem auto;
  max-width: 760px;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;
