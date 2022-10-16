import { ReactElement, useEffect, useState } from "react";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import styled from "styled-components";

import { SidePosts } from "../../service/postService";
import { PostMeta } from "@src/model/post";

import Meta from "./Meta";
import Comment from "./Comment";
import PostTitle from "./PostTitle";
import WavyLine from "@src/components/WavyLine";
import SidePost from "@src/components/post/SidePost";
import Profile from "@src/components/main/Profile";
import { FadeIn } from "@src/styles/animation";

export default function PostLayout({
  meta,
  children,
}: {
  meta: PostMeta;
  children: ReactElement;
}) {
  const router = useRouter();
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
      <NextSeo
        title={meta.title}
        description={meta.description}
        canonical={`https://www.oooooroblog.com${router.pathname}`}
        openGraph={{
          type: "website",
          title: meta.title,
          description: meta.description,
          url: `https://www.oooooroblog.com${router.pathname}`,
        }}
      />
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
  animation: ${FadeIn("0%")} 1.4s;

  padding: 0 1rem;
  margin-top: 10rem;
  margin-bottom: 3rem;
`;

const Article = styled.article`
  animation: ${FadeIn("0%")} 1.4s;

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
