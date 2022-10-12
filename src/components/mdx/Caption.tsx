import styled from "styled-components";

export default styled.p`
  font-size: ${({ theme }) => theme.fontSizes.s};
  color: ${({ theme }) => theme.colors.text.secondary};
  text-align: center;
  margin-top: 0;
`;
