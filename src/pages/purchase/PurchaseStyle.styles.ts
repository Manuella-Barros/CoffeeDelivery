import { styled } from "styled-components";

export const PurchaseStyle = styled.main`
    display: grid;
    grid-template-columns: 60% 40%;
    gap: 20px;
    margin-top: ${({theme}) => theme["escala-g"]};
`

export const ErrorMessage = styled.p`
    color: #FF0F00;
`