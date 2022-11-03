import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
    --primary-color:#5C0884;
    --secondary-color: #5C088470; 

    --white-color: #ffffff;
    --black-color: #000000;
    --blue-color:#102E99;

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
    width: 100%;
    height: 100vh;
}

svg, button{
    cursor:pointer;
}

`;
