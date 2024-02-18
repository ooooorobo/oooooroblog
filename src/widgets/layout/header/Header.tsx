"use client";
import styled from "styled-components";
import Link from "next/link";
import { ThemeToggleButton } from "@src/widgets/layout/header/ThemeToggleButton";

export default function Header() {
  return (
    <Background>
      <Wrapper>
        <Link href={"/"}>ooooorobo</Link>
        <ThemeToggleButton />
      </Wrapper>
    </Background>
  );
}

const Background = styled.nav`
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;

const Wrapper = styled.div`
  padding: 0 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 760px;
  height: 3rem;

  margin: 0 auto;

  button {
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.text.primary};
    padding-left: 15px;
  }
`;
