import styled from "styled-components";

interface TagProps {
    name: string
}

export default function Tag({name}: TagProps) {
    return <Wrapper># {name}</Wrapper>
}

const Wrapper = styled.span`
  background-color: ${({theme}) => theme.colors.bg.secondary};
  border-radius: 1rem;
  padding: 0.25rem 0.5rem;
  font-size: ${({theme}) => theme.fontSizes.tiny};
  &:not(:last-child) {
    margin-right: 0.25rem;
  }
`;