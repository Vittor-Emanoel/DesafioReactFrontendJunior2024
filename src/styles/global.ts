import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    max-width: 550px;
    min-width: 230px;
    margin: 0 auto;
    background: #f5f5f5;
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

`;
