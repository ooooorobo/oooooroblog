import { PostListElement } from "../../model/post";
import PostListElementComponent from "./PostListElement";
import styled from "styled-components";

interface PostListProps {
  posts: PostListElement[];
}

export default function PostList({ posts }: PostListProps) {
  return (
    <div>
      {posts.map((post) => (
        <ElementWrapper key={post.slug}>
          <PostListElementComponent post={post} />
        </ElementWrapper>
      ))}
    </div>
  );
}

const ElementWrapper = styled.div`
  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.text.secondary};
    padding-bottom: 1rem;
    margin-bottom: 1rem;
  }
`;
