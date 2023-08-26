import { styled } from "styled-components";

export const PurchaseStyle = styled.main`
    display: grid;
    grid-template-columns: 60% 40%;
    gap: 20px;
    margin-block: ${({theme}) => theme["escala-g"]};
    

    @media(max-width: 500px){
        display: flex;
        flex-direction: column;
    }
`

export const ErrorMessage = styled.p`
    color: #FF0F00;
`