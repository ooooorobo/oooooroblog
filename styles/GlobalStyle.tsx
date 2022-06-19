import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background-color: ${({theme}) => theme.colors.bg.primary};
    color: ${({theme}) => theme.colors.text.primary};
    line-height: ${({theme}) => theme.lineHeights.body};
  }
`

export default GlobalStyle;