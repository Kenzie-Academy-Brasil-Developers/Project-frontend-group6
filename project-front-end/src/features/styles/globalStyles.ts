import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
    --primary-color:#301099;   
}

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    outline: none;
    border: 0;
    text-decoration: none;
    /* font-family: ; */
}
body{
    width: 100vw;
    height: 100vh;
}

`;
