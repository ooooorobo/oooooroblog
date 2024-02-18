import styled from "styled-components";

export default function ContactIconList() {
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
