import styled from "styled-components";
import Link from "next/link";
import { useContext } from "react";
import { DarkModeContext } from "@src/utils/context/DarkModeContext";

export default function Header() {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <Background>
      <Wrapper>
        <Link href={"/"}>
          <a>ooooorobo (블로그 이사 오는 중)</a>
        </Link>
        <button onClick={toggleDarkMode}>
          {isDarkMode ? (
            <i className="bi bi-moon-fill" />
          ) : (
            <i className="bi bi-sun-fill" />
          )}
        </button>
      </Wrapper>
    </Background>
  );
}

const Background = styled.div`
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
  }
`;
