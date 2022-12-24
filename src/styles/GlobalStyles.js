import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    font-family: 'Noto Sans KR', sans-serif;
    -webkit-box-sizing: inherit;
    box-sizing: inherit;
    -moz-box-sizing: inherit;
    resize: none;
    outline: 0;  
    font-family: 'Montserrat', sans-serif;
  }

  html {
    font-size: 62.5%;

    scroll-behavior: smooth;
    box-sizing: border-box;

    /* overflow: hidden; */
  }

  body {
  font-family: $font-primary;
  color: $color-grey-dark-2;
  font-weight: 300;
  line-height: 1.6;
  font-size: 1.8rem;
  position: relative;
}
`;
