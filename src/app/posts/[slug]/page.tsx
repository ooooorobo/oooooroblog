"use client";
import { useMDXComponent } from "next-contentlayer/hooks";
import styled from "styled-components";
import Meta from "@src/components/post/Meta";
import PostTitle from "@src/components/post/PostTitle";
import WavyLine from "@src/components/WavyLine";
import components from "@src/components/mdx/MDXComponents";
import Profile from "@src/components/main/Profile";
import SidePost from "@src/components/post/SidePost";
import Comment from "@src/components/post/Comment";
import { getPostDetail, getPostMeta } from "@src/entities/post";
import { SeriesPostTitleList } from "@src/components/series/SeriesPostTitleList";

export type PostPageProps = { params: { slug: string } };

const codePrefix = `
if (typeof process === 'undefined') {
  globalThis.process = { env: {} }
}
`;

export default function PostPage({ params: { slug } }: PostPageProps) {
  const { postIdx, detail: post } = getPostDetail(slug);
  const prevPost = getPostMeta(postIdx + 1),
    nextPost = getPostMeta(postIdx - 1);

  const MDXContent = useMDXComponent(codePrefix + post.body.code);

  return (
    <>
      <PostHeader>
        <Meta
          title={post.title}
          description={post.description}
          postedAt={post.date}
        />
        <PostTitle
          title={post.title}
          description={post.description}
          postedAt={post.date}
        />
        <WavyLine />
      </PostHeader>
      {post.seriesId && (
        <CommentWrapper>
          <SeriesPostTitleList
            seriesId={post.seriesId}
            currentPostId={post.id}
          />
        </CommentWrapper>
      )}
      <Article>
        <MDXContent components={components} />
      </Article>
      {post.seriesId && (
        <CommentWrapper>
          <SeriesPostTitleList
            seriesId={post.seriesId}
            currentPostId={post.id}
            defaultOpen={true}
          />
        </CommentWrapper>
      )}
      <ProfileWrapper>
        <Profile />
        <WavyLine />
      </ProfileWrapper>
      <SidePost prevPost={prevPost} nextPost={nextPost} />
      <CommentWrapper>
        <Comment />
      </CommentWrapper>
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
  font-size: 1.15rem;

  p {
    margin: 2em 0;
  }

  aside p {
    margin: 0.5em;
  }
`;

const ProfileWrapper = styled.div`
  padding: 0 1rem;
  max-width: 760px;
  margin: 1.5rem auto;
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;

const CommentWrapper = styled.div`
  max-width: 760px;
  margin: auto;
  padding: 0 1rem 1.5rem 1rem;
`;
