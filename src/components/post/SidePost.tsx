import { SidePosts } from "@src/utils/postUtil";
import Link from "next/link";
import { PostListElement } from "@src/model/post";
import styled from "styled-components";
import SmallTitle from "@src/components/SmallTitle";

const Post = ({ post }: { post: PostListElement }) => {
  return (
    <Link href={`/posts/${post.slug}`}>
      <a>
        <PostTitle>{post.meta.title}</PostTitle>
      </a>
    </Link>
  );
};
export default function SidePost({ sidePosts }: { sidePosts: SidePosts }) {
  return (
    <Wrapper>
      <PostWrapper align={"left"}>
        {sidePosts.prev && (
          <>
            <SmallTitle>이전 포스트</SmallTitle>
            <Post post={sidePosts.prev} />
          </>
        )}
      </PostWrapper>
      <PostWrapper align={"right"}>
        {sidePosts.next && (
          <>
            <SmallTitle>다음 포스트</SmallTitle>
            <Post post={sidePosts.next} />
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

const PostWrapper = styled.div<{ align: string }>`
  width: 50%;
  text-align: ${({ align }) => align};
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
