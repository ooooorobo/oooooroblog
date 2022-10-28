import styled from "styled-components";
import Link from "next/link";

interface ContactIconListProps {
  showResume?: boolean;
}

export default function ContactIconList({
  showResume = false,
}: ContactIconListProps) {
  return (
    <IconWrapper>
      <a href="https://github.com/ooooorobo">
        <i className="bi bi-github" />
      </a>
      <a href="https://www.linkedin.com/in/%EC%98%88%EC%A7%84-%EC%A1%B0-b741a3222/">
        <i className="bi bi-linkedin" />
      </a>
      <a href="mailto:orobos654@gmail.com" title="orobos654@gmail.com">
        <i className="bi bi-envelope-fill" />
      </a>
      {showResume && (
        <Link href={"/about"}>
          <a>이력서</a>
        </Link>
      )}
    </IconWrapper>
  );
}

const IconWrapper = styled.div`
  display: flex;
  column-gap: 10px;
  position: absolute;
  bottom: 5px;
  font-size: 13px;
`;
