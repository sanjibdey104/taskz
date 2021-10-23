import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

:root{
    --font-primary: "Poppins", sans-serif;
    --fg-bold: #212121;
    --fg-light: #424242;
    --fg-lighter: #616161;
    --fg-lightest: #adb5bd;
    --google-blue: rgb(76,139,245);
    --google-green: rgb(15,157,88);
    --google-red: rgb(219,68,55);
    --google-yellow: rgb(244,160,0);
}

html {
  font-size: 100%;
  box-sizing: border-box;
  height: 100%;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

body {
  width: 100%;
  height: 100%;
  font-family: var(--font-primary);
}

#root {
  width: 100%;
  height: 100%;
}

img,
svg {
  display: block;
}

button,
input,
textarea {
  font-family: inherit;
}

.container {
  width: 100%;
  height: 100%;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
  color: black;
}


`;
