import { styled } from "styled-components";

export const NavbarStyle = styled.nav`
    display: flex;
    align-items: center;
    padding-block: ${({theme}) => theme["escala-m"]};
    
    article{
        display: flex;
        width: 27%;
        justify-content: space-between;
        gap: ${({theme}) => theme["escala-m"]};
    }
`

export const PictureStyle = styled.picture`
    width: 73%;
`

export const NavBase = styled.section`
    justify-content: center;
    padding: 8px;
`

export const LocationUserStyle = styled(NavBase)`
    border-radius: 10px;
    background-color: ${({theme}) => theme["second-color-1"]};
    color: ${({theme}) => theme["second-color-2"]};
    display: flex;
    align-items: center;
    
    input{
        border: 0;
        border-bottom: 1px solid ${({theme}) => theme["second-color-2"]};
        color: ${({theme}) => theme["second-color-2"]};
        padding: 2px;
        text-align: center;
        background-color: ${({theme}) => theme["second-color-1"]};
        
        &::placeholder{
            color: ${({theme}) => theme["second-color-2"]};
        }
        &:focus{
            outline: dotted 1px ${({theme}) => theme["second-color-2"]};
        }

        &::-webkit-inner-spin-button { 
            -webkit-appearance: none;
        }
    }
`

export const CartStyle = styled(NavBase)`
    border-radius: 10px;
    background-color: ${({theme}) => theme["first-color-1"]};
    color: ${({theme}) => theme["first-color-2"]};
`