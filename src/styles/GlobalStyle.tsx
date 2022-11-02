import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'IBM Plex Sans KR', sans-serif;
  }
  
  html {
    height: auto;
  }

  body {
    background-color: ${({ theme }) => theme.colors.bg.primary};
    transition: all 0.35s ease-in-out;
    color: ${({ theme }) => theme.colors.text.primary};
    line-height: ${({ theme }) => theme.lineHeights.body};

    margin: 0;
    padding: 0;

    height: auto;
    overflow: auto;
  }
  
  img {
    max-width: 100%;
  }
  
  a {
    color: inherit;
    text-decoration: none; 
  }
  
  p {
    line-height: ${(props) => props.theme.lineHeights.body};
  }
  
  h1, h2, h3, h4, h5, h6 {
    line-height: ${(props) => props.theme.lineHeights.title};
    word-break: keep-all;
  }
  
  h1 {
    font-size: 2rem;
  }
  
  pre, code {
    &, * {
      font-family: 'Nanum Gothic Coding', monospace;
      line-height: ${({ theme }) => theme.lineHeights.code};
    }
  }
`;

export default GlobalStyle;
