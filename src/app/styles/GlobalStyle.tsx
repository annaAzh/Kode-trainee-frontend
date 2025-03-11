import { createGlobalStyle } from 'styled-components';
import './variables.css';

const GlobalStyle = createGlobalStyle`
    :root {
      font-family: 'Inter', sans-serif;
      line-height: 1.5;
      font-weight: 400;
    };
    body {
      background-color: ${(props) => props.theme.body};
      color: ${(props) => props.theme.text};
      min-height: 100vh;
    };
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    };
  `;

export { GlobalStyle };
