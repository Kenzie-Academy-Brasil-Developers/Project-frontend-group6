import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
    --primary-color:#341099;
    --secondary-color: #34109970; 

    --white-color: #ffffff;
    --black-color: #000000;

    --grey1-color: #D9D9D9;
    --grey2-color: #D2CDCD;
    --grey3-color: #00000050;
}

*{
    padding: 0;
    margin: 0;
    border: 0;
    box-sizing: border-box;
    list-style: none;
    outline: none;
    text-decoration: none;
    font-family: 'Inter', sans-serif;
}

body{
    width: 100vw;
    height: 100vh;
}

button{
    cursor:pointer;
}

`;
