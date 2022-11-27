import styled from "styled-components";

export default styled.aside`
  background-color: ${({ theme }) => theme.colors.bg.secondary};
  padding: 14px;
  border-radius: 10px;
  margin: 20px 0;

  p {
    margin: 0;
  }
`;
