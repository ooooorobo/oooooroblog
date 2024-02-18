import Link from "next/link";
import styled from "styled-components";
import { type Post } from "contentlayer/generated";

const Post = ({ title, url }: { title: string; url: string }) => {
  return (
    <Link href={"/" + url}>
      <PostTitle>{title}</PostTitle>
    </Link>
  );
};
export default function SidePost({
  prevPost,
  nextPost,
}: {
  prevPost?: Post;
  nextPost?: Post;
}) {
  return (
    <Wrapper>
      <PostWrapper $align={"left"}>
        {prevPost && (
          <>
            <SmallTitle>이전 포스트</SmallTitle>
            <Post title={prevPost.title} url={prevPost.url} />
          </>
        )}
      </PostWrapper>
      <PostWrapper $align={"right"}>
        {nextPost && (
          <>
            <SmallTitle>다음 포스트</SmallTitle>
            <Post title={nextPost.title} url={nextPost.url} />
          </>
        )}
      </PostWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 0 auto 2rem auto;
  padding: 1rem;
  display: flex;
  column-gap: 1rem;
  max-width: 760px;
  ${({ theme }) =>
    theme.media.mobile(`
    flex-direction: column;  
    row-gap: 1.8rem;
  `)}
`;

const PostWrapper = styled.div<{ $align: string }>`
  width: 50%;
  text-align: ${({ $align }) => $align};
  ${({ theme }) =>
    theme.media.mobile(`
    width: auto;  
  `)}
`;

const PostTitle = styled.strong`
  word-break: keep-all;
  word-wrap: break-word;
  display: -webkit-box;
  white-space: normal;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const SmallTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.s};
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: 0.25rem;
`;
