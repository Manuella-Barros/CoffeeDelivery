import { styled } from "styled-components";

export const QuantityButtonStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    button{
        font-size: ${({theme}) => theme["escala-g"]};
        color: ${({theme}) => theme["second-color-2"]};
        border: none;
        font-weight: bold;
        cursor: pointer;
    }
    button,
    p{
        background-color: ${({theme}) => theme["neutral-color-5"]};
        font-family: ${({theme}) => theme["fonte-1"]};
        font-size: ${({theme}) => theme["escala-m"]};
        padding-inline: ${({theme}) => theme["escala-xx-pp"]};
    }
    
    /* button, p{
        background-color: ${({theme}) => theme["neutral-color-6"]};
        border: none;
        padding-inline: 12px;
        align-items: center;
    }
    button{
        color: ${({theme}) => theme["second-color-3"]};
        font-family: ${({theme}) => theme["fonte-1"]};
        font-size: ${({theme}) => theme["escala-g"]};
    }


    span{
        color: ${({theme}) => theme["neutral-color-2"]};
        background-color: ${({theme}) => theme["second-color-3"]};
        padding: 2px;
        border-radius: 5px;
        font-size: 10px;
    }     */
`