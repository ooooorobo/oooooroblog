import { PostMeta } from "@src/model/post";
import styled from "styled-components";
import Tag from "../Tag";

interface PostTitleProps {
  meta: PostMeta;
}

export default function PostTitle({ meta }: PostTitleProps) {
  return (
    <Wrapper>
      <div>
        {meta.tags.map((tag) => (
          <Tag key={tag} name={tag} />
        ))}
      </div>
      <Title>{meta.title}</Title>
      <Description>{meta.description}</Description>
      <Info>{meta.postedAt}에 씀</Info>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 760px;
  margin: auto;

  ${({ theme }) =>
    theme.media.desktop(` 
    text-align: center;
  `)};
`;

const Title = styled.h1`
  word-break: keep-all;
`;

const Description = styled.p`
  color: ${(props) => props.theme.colors.text.secondary};
  font-size: ${(props) => props.theme.fontSizes.s};
  word-break: keep-all;
`;

const Info = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.tiny};
`;
