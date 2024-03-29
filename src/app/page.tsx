"use client";
import styled from "styled-components";
import { useEffect } from "react";
import { getAllPostMeta } from "@src/entities/posts/lib/post";
import PostList from "@src/entities/posts/ui/PostList";
import { StorageKey } from "@src/shared/consts/constants";
import Profile from "@src/widgets/profile/Profile";

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
