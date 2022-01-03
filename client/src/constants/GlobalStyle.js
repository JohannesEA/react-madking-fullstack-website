import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
box-sizing: border-box;
}
  html {
    --color-1: #03090D;
    --color-2: #0B1E26;
    --color-3: #214554;
    --color-4: #3E768C;
    --color-5: #B0CDD9;
    --color-dark: #030102;
    --color-light: #F2F2F2;
    --color-text: #F2F2F2;
    --color-button-hover: #254A59;
  }
`;

export default GlobalStyles;
