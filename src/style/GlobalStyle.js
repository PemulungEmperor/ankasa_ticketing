import { createGlobalStyle } from 'styled-components';
import '@fontsource/lato';
import '@fontsource/poppins';

const GlobalStyles = createGlobalStyle`
  /* Global CSS */
  :root {
    --text-black: #000000;
    --text-gray: #414141;
    --text-lightgray: #595959;
    --text-gainsboro: #6B6B6B;
    --text-sliver: #979797;
    --text-blue: #2395FF;
    --text-white: #FFFFFF;
    --shadow-black-100: 0 5px 15px rgba(0, 0, 0, 1);
    --shadow-black-300: 0 5px 15px rgba(0, 0, 0, 0.3);
  }

  /* Fonts */
  .ff-poppins {
    font-family: 'Poppins', 'sans-serif';
  }

  .ff-lato {
    font-family: 'Lato', 'sans-serif';
  }

`;

export default GlobalStyles;
