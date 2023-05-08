import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@1,600&family=Inter:wght@400;500;600;700&display=swap');


@font-face {
  font-family: 'Coolvetica';
  src: url('../fonts/CoolveticaRg-Italic.woff2') format('woff2');
  font-weight: 400;
  font-style: italic;
}

@font-face {
  font-family: 'Coolvetica';
  src: url('../fonts/CoolveticaRg-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
}

/* @font-face {
  font-family: 'Inter';
  src: url('../fonts/Inter-SemiBoldItalic.woff2') format('woff2');
  font-weight: 600;
  font-style: italic;
} */



  body {
    font-family: 'Inter', sans-serif;
  }
`;

export default GlobalStyles;
