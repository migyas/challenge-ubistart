import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  html {
    font-size: 55%;
  }
  body, input, button {
    font-family: 'Montserrat', sans-serif;
    background-color: #f5f2f2;
  }
  #root {
    margin: 0 auto;
  }
  button {
    cursor: pointer;
  }
`;
