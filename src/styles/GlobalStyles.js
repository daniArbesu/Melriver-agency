import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

const GlobalStyle = createGlobalStyle`
*, *::before, *::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body,
html {
  /* user-select: none; */
  background: ${theme.color.white};
  overscroll-behavior: none;
  font-family: "Josefin Sans", -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
    "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.App {
  z-index: 2;
  transform: translateY(0);
  position: relative;
}

.page {
  height: 100vh;
  width: 100%;
  background: ${theme.color.white};;
  .row {
    display: flex;
    align-items: center;
  }
}
`;

export default GlobalStyle;
