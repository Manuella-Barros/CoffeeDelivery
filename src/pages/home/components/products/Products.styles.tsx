import { styled } from "styled-components"

export const Products = styled.main` // main home
    margin-top: ${({theme}) => theme["escala-gg"]};
    article{
        flex-wrap: wrap;
        gap: ${({theme}) => theme["escala-gg"]};
        display: flex;
    }
`

export const SingleProduct = styled.section`
    background-color: ${({theme}) => theme["neutral-color-3"]};
    margin-top: ${({theme}) => theme["escala-gg"]};
    padding: ${({theme}) => theme["escala-gg"]};
    width: ${({theme}) => theme["escala-xx-plus"]};
    text-align: center;
    border-top-right-radius: 40px;
    border-bottom-left-radius: 40px;
`

export const HeaderSingleProduct = styled.div`
    display: block;
    
    picture img {
        margin-top: -${({theme}) => theme["escala-xx-gg"]};
    }

    div{
        display: flex;
    }
    div p{
        color: ${({theme}) => theme["first-color-3"]};
        background-color: ${({theme}) => theme["first-color-1"]};
        margin: auto;
        padding: 5px 10px;
        border-radius: 20px;
    }
`

export const BodySingleProduct = styled.div`
    margin-block: ${({theme}) => theme["escala-m"]};
    h3{
        padding-bottom: ${({theme}) => theme["escala-xpp"]};
        font-weight: bold;
    }
    p{
        color: ${({theme}) => theme["neutral-color-7"]};
    }
`

export const FooterSingleProduct = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    a{
        color: ${({theme}) => theme["neutral-color-2"]};
        background-color: ${({theme}) => theme["second-color-3"]};
        padding: 2px;
        border-radius: 5px;
        font-size: 10px;
        
        :hover{
            color: ${({theme}) => theme["neutral-color-2"]};
            background-color: ${({theme}) => theme["second-color-2"]};
        }
    } 
`