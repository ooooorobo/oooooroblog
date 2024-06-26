import Link from "next/link";
import styled from "styled-components";

import { format } from "date-fns";
import { PostListElement } from "@src/entities/posts/types/post";
import Tag from "@src/widgets/tag/Tag";

interface PostListElementProps {
  post: PostListElement;
  onClickPost?: () => void;
}

export default function PostListElementComponent({
  post,
  onClickPost,
}: PostListElementProps) {
  const postedAt = format(new Date(post.meta.postedAt), "yyyy-MM-dd");
  return (
    <Wrapper>
      <div>
        {post.meta.tags.map((tag) => (
          <Tag key={tag} name={tag} />
        ))}
      </div>
      <Link href={"/" + post.slug} onClick={onClickPost}>
        <Title>{post.meta.title}</Title>
        <Description>{post.meta.description}</Description>
        <Info>{postedAt}</Info>
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.text.secondary};
  padding: 20px 0;
`;

const Title = styled.h2`
  margin: 0.5rem 0;
  font-size: ${({ theme }) => theme.fontSizes.l};
`;

const Description = styled.p`
  margin: 0.5rem 0;
  font-size: ${({ theme }) => theme.fontSizes.s};
`;

const Info = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.s};
  color: ${({ theme }) => theme.colors.text.secondary};
  margin: 0 !important;
`;
