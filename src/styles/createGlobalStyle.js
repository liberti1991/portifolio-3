import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
    }

    html, body, #root {
        height: 100%;
        background: #30363d;
        color: #fff;
    }

    *, button, input {
        border: 0;
        outline: 0;
        font-family: 'Roboto', sans-serif;
    }

    a {
        text-decoration: none;
    }

    button, svg {
        cursor: pointer;
    }
`;