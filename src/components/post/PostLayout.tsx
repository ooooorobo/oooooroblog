import { ReactElement, useEffect, useState } from "react";
import { PostMeta } from "@src/model/post";
import Meta from "./Meta";
import Comment from "./Comment";
import styled from "styled-components";
import PostTitle from "./PostTitle";
import WavyLine from "@src/components/WavyLine";
import { SidePosts } from "@src/utils/postUtil";
import SidePost from "@src/components/post/SidePost";
import Profile from "@src/components/main/Profile";
import { NextSeo } from "next-seo";

export default function PostLayout({
  meta,
  children,
}: {
  meta: PostMeta;
  children: ReactElement;
}) {
  const [sidePosts, setSidePosts] = useState<SidePosts>({
    prev: undefined,
    next: undefined,
  });
  useEffect(() => {
    fetch(`/api/posts/sides/${meta.index}`)
      .then((res) => res.json())
      .then((json) => setSidePosts(json));
  }, [meta]);
  return (
    <>
      <NextSeo title={meta.title} description={meta.description} />
      <PostHeader>
        <Meta
          title={meta.title}
          description={meta.description}
          tags={meta.tags}
          postedAt={meta.postedAt}
        />
        <PostTitle meta={meta} />
        <WavyLine size={8} />
      </PostHeader>
      <Article>{children}</Article>
      <ProfileWrapper>
        <Profile />
        <WavyLine size={8} />
      </ProfileWrapper>
      {sidePosts && <SidePost sidePosts={sidePosts} />}
      <div>
        <Comment />
      </div>
    </>
  );
}

const PostHeader = styled.div`
  padding: 0 1rem;
  margin-top: 10rem;
  margin-bottom: 3rem;
`;

const Article = styled.article`
  max-width: 760px;
  margin: 0 auto 5rem auto;
  padding: 0 1rem;
`;

const ProfileWrapper = styled.div`
  padding: 0 1rem;
  max-width: 760px;
  margin: 1.5rem auto;
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;
