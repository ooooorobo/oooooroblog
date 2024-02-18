import styled from "styled-components";
import { format } from "date-fns";
import Tag from "@src/widgets/tag/Tag";

interface PostTitleProps {
  title: string;
  description?: string;
  postedAt: string;
  tags?: string[];
}

export default function PostTitle({
  title,
  description = "",
  postedAt,
  tags = [],
}: PostTitleProps) {
  const formattedPostedAt = format(new Date(postedAt), "yyyy-MM-dd");
  return (
    <Wrapper>
      <div>
        {tags.map((tag) => (
          <Tag key={tag} name={tag} />
        ))}
      </div>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Info>{formattedPostedAt}에 씀</Info>
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
