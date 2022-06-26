import { ReactElement } from "react";
import { PostMeta } from "@src/model/post";
import Meta from "./Meta";
import Comment from "./Comment";
import styled from "styled-components";
import PostTitle from "./PostTitle";
import WavyLine from "@src/components/WavyLine";

export default function PostLayout({
  meta,
  children,
}: {
  meta: PostMeta;
  children: ReactElement;
}) {
  return (
    <>
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
      <WavyLine size={8} />
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
