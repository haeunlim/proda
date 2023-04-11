import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;  
    box-sizing: border-box;
  }

  legend {
    font-size: 0;
    text-indent: -999999999px;
}
`;

export default GlobalStyle;
