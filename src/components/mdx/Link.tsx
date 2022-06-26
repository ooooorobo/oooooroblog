import styled from "styled-components";

export default styled.a`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration-line: underline;
  text-decoration-style: dashed;
  text-underline-offset: 0.25rem;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryLight};
  }
`;
