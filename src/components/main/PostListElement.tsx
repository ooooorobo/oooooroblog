import { RefObject, useRef } from "react";
import Link from "next/link";
import styled from "styled-components";

import useIntersectionObserver from "@src/utils/hooks/useIntersectionObserver";

import { PostListElement } from "@src/model/post";
import Tag from "@src/components/Tag";

interface PostListElementProps {
  post: PostListElement;
  onClickPost: () => void;
}

export default function PostListElementComponent({
  post,
  onClickPost,
}: PostListElementProps) {
  const ref: RefObject<HTMLDivElement> = useRef(null);
  const entry = useIntersectionObserver(ref);

  return (
    <Wrapper showed={Boolean(entry?.isIntersecting)} ref={ref}>
      <div>
        {post.meta.tags.map((tag) => (
          <Tag key={tag} name={tag} />
        ))}
      </div>
      <Link href={`/posts/${post.slug}`}>
        <a onClick={onClickPost}>
          <Title>{post.meta.title}</Title>
          <Description>{post.meta.description}</Description>
          <Info>{post.meta.postedAt}</Info>
        </a>
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.div<{ showed: boolean }>`
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translate3d(0, 10%, 0);
    }
    to {
      opacity: 1;
      transform: translateZ(0);
    }
  }

  animation: ${({ showed }) => (showed ? "fadeIn 1s" : "")};
  border-top: 1px solid ${({ theme }) => theme.colors.text.secondary};
  padding-top: 1rem;
  margin-top: 1rem;
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
