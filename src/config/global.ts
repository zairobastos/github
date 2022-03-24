import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }
    :root{
        --login-background:#F0F0F7;
        --login-h1: #32264D;
        --login-p:#6A6180;
        --login-font-input:#9C98A6;
        --login-border-input:#E6E6F0;
        --login-background-input:#FAFAFC;
        --login-button: #F25D27;
        --login-button-font: #fff;
        --login-icone-fundo: #41414C;

        --home-header: #41414C;
        --home-header-font: #F0F2F5;
        --home-background:#F0F2F5;
        --home-perfil: #FCFDFF;
        --home-perfil-border: #E1E3E5;
        --home-perfil-h1: #32264D;
        --home-perfil-h3: #9c98a6;
    }
`;
