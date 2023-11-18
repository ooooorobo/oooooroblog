import { GetStaticPropsContext } from "next";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import styled from "styled-components";
import { useMDXComponent } from "next-contentlayer/hooks";
import { allPosts, type Post } from "contentlayer/generated";

import components from "@src/components/mdx/MDXComponents";
import WavyLine from "@src/components/WavyLine";
import Meta from "@src/components/post/Meta";
import PostTitle from "@src/components/post/PostTitle";
import Profile from "@src/components/main/Profile";
import Comment from "@src/components/post/Comment";
import { FadeIn } from "@src/styles/animation";
import SidePost from "@src/components/post/SidePost";

export async function getStaticPaths() {
  // Get a list of valid post paths.
  const paths = allPosts.map((post) => ({
    params: { slug: post._raw.flattenedPath },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  // Find the post for the current page.
  const postIdx = allPosts.findIndex(
    (post) => post._raw.flattenedPath === context.params?.slug
  );
  const post = allPosts[postIdx];
  const prevPost = allPosts[postIdx - 1] ?? null,
    nextPost = allPosts[postIdx + 1] ?? null;

  // Return notFound if the post does not exist.
  if (!post) return { notFound: true };

  // Return the post as page props.
  return { props: { post, prevPost, nextPost } };
}

const codePrefix = `
if (typeof process === 'undefined') {
  globalThis.process = { env: {} }
}
`;

export default function Page({
  post,
  prevPost,
  nextPost,
}: {
  post: Post;
  prevPost: Post;
  nextPost: Post;
}) {
  // Parse the MDX file via the useMDXComponent hook.
  const MDXContent = useMDXComponent(codePrefix + post.body.code);
  const router = useRouter();

  return (
    <>
      <NextSeo
        title={post.title}
        description={post.description}
        canonical={`https://www.oooooroblog.com${router.pathname}`}
        openGraph={{
          type: "website",
          title: post.title,
          description: post.description,
          url: `https://www.oooooroblog.com${router.pathname}`,
        }}
      />
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
      <Article>
        <MDXContent components={components} />
      </Article>
      <ProfileWrapper>
        <Profile />
        <WavyLine />
      </ProfileWrapper>
      <SidePost prevPost={prevPost} nextPost={nextPost} />
      <Comment />
    </>
  );
}

const PostHeader = styled.div`
  animation: ${FadeIn("0%")} 1.4s;

  padding: 0 1rem;
  margin-top: 10rem;
  margin-bottom: 3rem;
`;

export const Article = styled.article`
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
