import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }

    html,body{
        font-family: "JetBrains Mono", monospace;
        background-color:${({ theme }) => theme.background};
        color:${({ theme }) => theme.text};
        height: 100%;
    }
`;

export default Global;
