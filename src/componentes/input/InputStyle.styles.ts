import { styled } from "styled-components";

export const InputStyle = styled.input`
    background-color: ${({theme}) => theme["neutral-color-3"]};
    padding: ${({theme}) => theme["escala-xx-pp"]};
    border: 0px;
    box-shadow: 0px 0px 2px ${({theme}) => theme["first-color-3"]};
    border-radius: 5px;

    &:hover,
    &:focus{
        box-shadow: 0px 0px 10px ${({theme}) => theme["first-color-3"]};
        outline: 0;
    }
`