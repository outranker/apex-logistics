import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  body {
    color: ${(props) => (props.whiteColor ? "white" : "black")};
    font-family: ${(props) => props.theme.fontFamily};
  }

  `;
//   ::selection {
//     background-color: $color-primary;
//     color: $color-white;
//   }
