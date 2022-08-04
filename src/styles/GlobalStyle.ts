import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --dark-gray: hsl(0, 0%, 59%);
    --very-dark-gray: hsl(0, 0%, 17%);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-size: 16px;
    font-family: 'Rubik', sans-serif;
    color: var(--very-dark-gray);
    background-color: var(--very-dark-gray);
  }

  input, button {
    font-family: 'Rubik', sans-serif;
  }

  .leaflet-container {
    width: 100%;
    height: 100vh;
    z-index: 0;
  }
`;
