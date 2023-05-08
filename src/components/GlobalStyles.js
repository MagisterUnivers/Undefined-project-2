import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@1,600&family=Inter:wght@400;500;600;700&display=swap');


  /* Используйте @font-face, если хотите подключить шрифт из локального файла */
  /* @font-face {
    font-family: 'Font1';
    src: url('/fonts/Font1.ttf');
  } */

  body {
    /* Используйте шрифты в вашем стиле */
    font-family: 'Inter', sans-serif;
  }
`;

export default GlobalStyles;
