import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @media screen and (max-device-width: 480px) {
    body {
      -webkit-text-size-adjust: none;
    }
  }

  * {
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;;
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
    margin-top: 40px;
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

  .giscus {
    max-width: 760px;
    margin: auto auto 80px;
    padding: 0 0.5rem;
  }

  div.wavyline {
    ${({ theme }) =>
      theme.media.desktop(`
    text-align: center;
  `)};
    height: 20px;

    &:after {
      overflow: hidden;
      content: 'mmmmmmmm';
    }

    color: transparent;
    position: relative;
    top: -10px;
    font-size: 1rem;

    text-decoration-style: wavy !important;
    text-decoration: ${({ theme }) => theme.colors.primary};
    text-decoration-line: underline;
  }

  p.caption {
    font-size: ${({ theme }) => theme.fontSizes.s};
    color: ${({ theme }) => theme.colors.text.secondary};
    text-align: center;
    margin-top: 0;
  }

  aside {
    background-color: ${({ theme }) => theme.colors.bg.secondary};
    padding: 14px;
    border-radius: 10px;
    margin: 20px 0;

    p {
      margin: 0;
    }
  }

  a.link {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration-line: underline;
    text-decoration-style: dashed;
    text-underline-offset: 0.25rem;
    word-break: break-all;

    &:hover {
      color: ${({ theme }) => theme.colors.primaryLight};
    }
  }
`;

export default GlobalStyle;
