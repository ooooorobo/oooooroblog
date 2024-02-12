import Link from "next/link";
import { css, styled } from "styled-components";
import { getPostBySeriesId } from "@src/entities/post";
import { SeriesMap } from "@src/entities/series/consts/series";

export const SeriesPostTitleList = ({
  seriesId,
  currentPostId,
  defaultOpen = false,
}: {
  seriesId: string;
  currentPostId?: number;
  defaultOpen?: boolean;
}) => {
  const series = SeriesMap.get(seriesId);
  if (!series) return <></>;

  const posts = getPostBySeriesId(seriesId);

  return (
    <Container open={defaultOpen}>
      <Title>
        <SeriesTitle>{series.title}</SeriesTitle> 시리즈의 다른 글
      </Title>
      <ol>
        {posts.map((post) => (
          <ListItem
            key={post.meta.index}
            highlighted={post.meta.index === currentPostId}
          >
            <Link href={"/" + post.slug}>{post.meta.title}</Link>
          </ListItem>
        ))}
      </ol>
    </Container>
  );
};

const Container = styled.details`
  background-color: ${({ theme }) => theme.colors.bg.secondary};
  padding: 24px;
  border-radius: 10px;

  ol {
    padding-inline-start: 1.2rem;
    margin-block-end: 0;
    margin-block-start: 12px;
  }
`;

const Title = styled.summary`
  font-size: ${({ theme }) => theme.fontSizes.m};
`;

const SeriesTitle = styled.span`
  font-weight: bold;
  margin-left: 4px;
`;

const ListItem = styled.li<{ highlighted: boolean }>`
  color: ${({ theme }) => theme.colors.text.placeholder};

  ${({ highlighted, theme }) =>
    highlighted &&
    css`
      color: ${theme.colors.primaryLight};
    `}

  &:hover {
    text-decoration: underline;
    color: ${({ theme, highlighted }) =>
      highlighted ? theme.colors.primaryBrighter : theme.colors.text.primary};
  }
`;
