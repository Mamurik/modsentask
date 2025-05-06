import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    line-height: 1;
    font-family: 'Inter', sans-serif;
    background-color: #fff;
    color: #000;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
  }

  #root {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  ul,
  ol {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button,
  input,
  textarea,
  select {
    font: inherit;
    color: inherit;
    background: none;
    border: none;
    outline: none;
  }

  button {
    cursor: pointer;
    background-color: transparent;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  html,
  body {
    height: 100%;
  }
`;
