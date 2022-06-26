import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'IBM Plex Sans KR', sans-serif;
  }

  body {
    background-color: ${({ theme }) => theme.colors.bg.primary};
    color: ${({ theme }) => theme.colors.text.primary};
    line-height: ${({ theme }) => theme.lineHeights.body};

    margin: 0;
    padding: 0;
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
  
  pre, code {
    &, * {
      font-family: 'Nanum Gothic Coding', monospace;
      line-height: ${({ theme }) => theme.lineHeights.code};
    }
  }
`;

export default GlobalStyle;
