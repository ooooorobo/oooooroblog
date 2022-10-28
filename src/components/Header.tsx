import styled from "styled-components";
import Link from "next/link";
import { useContext } from "react";
import { DarkModeContext } from "@src/utils/context/DarkModeContext";

export default function Header() {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <Background>
      <Wrapper>
        <div>
          <Link href={"/"}>
            <a>ooooorobo</a>
          </Link>
        </div>
        <div>
          <Link href={"/about"}>
            <a>About</a>
          </Link>
          <button onClick={toggleDarkMode}>
            {isDarkMode ? (
              <i className="bi bi-moon-fill" />
            ) : (
              <i className="bi bi-sun-fill" />
            )}
          </button>
        </div>
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
    padding-left: 15px;
  }
`;
