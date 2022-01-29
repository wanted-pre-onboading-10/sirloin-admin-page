import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle` 
  ${reset};

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    font-family: "Arial",
  }

  body {
    height:100%;
    width:100%;
    font-family: "Arial",
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul,
  ol,
  li {
    list-style: none;
    font-family: "Arial",
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-family: "Arial",
  }
`;

export default GlobalStyles;
