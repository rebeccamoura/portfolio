import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    html {
        font-size: 62.5%;
    }

    body {
        background-color: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.text};
    }

`;
