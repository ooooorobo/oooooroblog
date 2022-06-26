import styled from "styled-components";

export default styled.div`
  font-size: ${({ theme }) => theme.fontSizes.s};
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: 0.25rem;
`;
