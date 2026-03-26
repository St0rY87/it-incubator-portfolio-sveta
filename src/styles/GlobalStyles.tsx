import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const GlobalStyles = createGlobalStyle`
   *,
   *::after,
   *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   }

   html {
    box-sizing: border-box;
    scroll-behavior: smooth
   }

   body {
    font-family: "Poppins", sans-serif;
    color: ${theme.colors.font};
    line-height: 1.2;
   }

  a {
    text-decoration: none;
    color: ${theme.colors.font};
  }

  ul {
    list-style-type: none;
  }

  button {
    background-color: unset;
    border: none;
    cursor: pointer;
    color: ${theme.colors.font};

  }

  section {
    padding-block: 100px;
  }

  section:nth-of-type(odd) {
    background-color: ${theme.colors.primaryBg}
  }
  section:nth-of-type(even) {
    background-color: ${theme.colors.secondaryBg}
  }

  h3 {
    font-family: "Josefin Sans", sans-serif;
    font-weight: 700;
    font-size: 16px;
    letter-spacing: 0.06em;
  }

  p {
      font-weight: 400;
      font-size: 14px;
      line-height: 1.4;
  }
 `;
