import styled from "styled-components";

export default styled.code`
  background-color: ${({ theme }) => theme.colors.bg.secondary};
  padding: 0.2rem 0.3rem;
  font-size: ${({ theme }) => theme.fontSizes.s};
  border-radius: 3px;
  word-break: break-word;
`;
