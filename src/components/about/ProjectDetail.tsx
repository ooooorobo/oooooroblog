import styled from "styled-components";
import Link from "next/link";
import { ReactNode } from "react";
import Tag from "@src/components/Tag";
import LinkStyle from "@src/components/mdx/Link";

interface ProjectDetailProps {
  period: string;
  works: (string | ReactNode)[];
  posts: PostInfo[];
  techs: string[];
}

interface PostInfo {
  title: string;
  link: string;
}

export default function ProjectDetail({
  period,
  works,
  posts,
  techs,
}: ProjectDetailProps) {
  return (
    <div>
      <Row>
        <Subtitle>
          <h3>기간</h3>
        </Subtitle>
        <ContentWrapper>
          <p>{period}</p>
        </ContentWrapper>
      </Row>
      <Row>
        <Subtitle>
          <h3>주요 작업</h3>
        </Subtitle>
        <ul>
          {works.map((info, idx) => (
            <li key={idx}>{info}</li>
          ))}
        </ul>
      </Row>
      {posts?.length && (
        <Row>
          <Subtitle>
            <h3>관련 링크</h3>
          </Subtitle>
          <ul>
            {posts.map((info, idx) => (
              <li key={idx}>
                <Link href={info.link} passHref={true} legacyBehavior>
                  <LinkStyle>{info.title}</LinkStyle>
                </Link>
              </li>
            ))}
          </ul>
        </Row>
      )}
      <Row>
        <Subtitle>
          <h3>사용 기술</h3>
        </Subtitle>
        <ContentWrapper>
          {techs.map((info, idx) => (
            <Tag key={idx} name={info} showHash={false} />
          ))}
        </ContentWrapper>
      </Row>
    </div>
  );
}

const marginY = "8px";

const Row = styled.div`
  display: flex;

  h3 {
    margin-top: ${marginY};
    font-size: 1rem;
  }
  ul {
    margin-top: ${marginY};
  }
`;

const Subtitle = styled.div`
  min-width: 80px;
`;

const ContentWrapper = styled.div`
  margin-top: ${marginY};
  padding-left: 40px;
  p {
    margin-top: 2px;
  }
`;
