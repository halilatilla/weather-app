import { createGlobalStyle } from "styled-components";
import { ThemeType } from "./theme";

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
body {
 font-family: 'Arial', sans-serif;
    background: linear-gradient(135deg, #6e8efb, #a777e3);
    margin: 0;
    padding: 0;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default GlobalStyle;
