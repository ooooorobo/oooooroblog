"use client";
import styled from "styled-components";
import { useEffect } from "react";
import { getAllPostMeta } from "@src/business/post";
import PostList from "@src/components/main/PostList";
import { StorageKey } from "@src/constants/constants";
import Profile from "@src/components/main/Profile";

export default function Page() {
  const posts = getAllPostMeta();

  useEffect(() => {
    const scroll = parseInt(
      sessionStorage.getItem(StorageKey.MAIN_SCROLL_Y) ?? "0",
    );
    window.scrollTo({ top: scroll, behavior: "auto" });
  }, []);

  const onClickPost = () => {
    sessionStorage.setItem(StorageKey.MAIN_SCROLL_Y, window.scrollY.toString());
  };

  return (
    <Wrapper>
      <Profile />
      <div>
        <PostList posts={posts} onClickPost={onClickPost} />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 2.5rem auto;
  max-width: 760px;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;
