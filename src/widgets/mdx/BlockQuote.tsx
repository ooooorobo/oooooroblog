import styled from "styled-components";

export default styled.blockquote`
  font-size: ${({ theme }) => theme.fontSizes.s};
  border-left: 6px solid ${({theme}) => theme.colors.primary};
  padding-left: 10px;
`;