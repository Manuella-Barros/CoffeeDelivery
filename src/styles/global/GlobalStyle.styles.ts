import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0px;
        margin: 0px;
        box-sizing: border-box;
    }
    a{
        text-decoration: none;
    }
    body{
        background-color: ${({theme}) => theme["neutral-color-1"]};
        width: 80vw;
        margin: auto;
    }

    h1{
        font-family: ${({theme}) => theme["fonte-2"]};
        font-size: ${({theme}) => theme["escala-xgg"]};
        line-height: ${({theme}) => theme["escala-xx-gg"]};
        font-weight: 800;
    }

    h2{
        font-family: ${({theme}) => theme["fonte-2"]};
        font-size: ${({theme}) => theme["escala-gg"]};
        font-weight: 800;
    }
    
    h3{
        font-family: ${({theme}) => theme["fonte-2"]};
        font-size: ${({theme}) => theme["escala-m"]};
        font-weight: 700;
    }
    
    p{
        font-family: ${({theme}) => theme["fonte-1"]};
        font-size: ${({theme}) => theme["escala-p"]};
    }
`