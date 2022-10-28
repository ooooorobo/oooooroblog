import styled from "styled-components";

interface TagProps {
  name: string;
  showHash: boolean;
}

export default function Tag({ name, showHash = true }: TagProps) {
  return (
    <Wrapper>
      {showHash ? "# " : ""}
      {name}
    </Wrapper>
  );
}

const Wrapper = styled.span`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.bg.secondary};
  border-radius: 1rem;
  padding: 0.25rem 0.5rem;
  font-size: ${({ theme }) => theme.fontSizes.tiny};
  &:not(:last-child) {
    margin-right: 0.25rem;
  }
`;
