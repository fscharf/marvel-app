import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Inter', 'Segoe UI', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
        word-wrap: break-word;
    }
    button, input {
        outline: none;
        border: none;
        background: none;

        &:focus, &:hover, &:active {
            outline: none;
            border: none;
        }
    }
    button {
        cursor: pointer;
    }
    body {
        background: ${props => props.theme.colors.dark};
    }
`
