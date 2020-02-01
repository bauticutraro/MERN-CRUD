import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  html,
  body {
    height: 100%;
    font-family: 'Roboto', sans-serif;
  }
  * {
    box-sizing: border-box;
  }
  #root {
    height: 100%;
  }
 
`;

export default GlobalStyle;
