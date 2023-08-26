import { styled } from "styled-components"

export const Products = styled.main` // main home
    margin-top: ${({theme}) => theme["escala-gg"]};
    @media(max-width: 500px){
        text-align: center;
    }
    
    article{
        margin-top: ${({theme}) => theme["escala-gg"]};
        flex-wrap: wrap;
        gap: ${({theme}) => theme["escala-g"]};
        display: flex;

        @media(max-width: 500px){
            justify-content: center;
        }
    }
`

export const SingleProduct = styled.section`
    background-color: ${({theme}) => theme["neutral-color-3"]};
    margin-top: ${({theme}) => theme["escala-gg"]};
    padding: 1.25rem;
    width: 13.4rem;
    text-align: center;
    border-top-right-radius: 40px;
    border-bottom-left-radius: 40px;
    
    display: flex;
    flex-direction: column; 
    justify-content: space-between;
`

export const HeaderSingleProduct = styled.div`
    display: block;

    picture{
        display: flex;
        width: 50%;
        margin: auto;
        margin-bottom: 10px;

        img{
            margin-top: -${({theme}) => theme["escala-xx-gg"]};
            width: 100%;
        }
    }
    
    div{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 10px;
    }
    div p{
        font-size: ${({theme}) => theme["escala-xx-pp"]};
        text-transform: uppercase;
        font-weight: bold;
        color: ${({theme}) => theme["first-color-3"]};
        background-color: ${({theme}) => theme["first-color-1"]};
        padding: 5px 8px;
        border-radius: 20px;
    }
`

export const BodySingleProduct = styled.div`
    h3{
        font-weight: bold;
        font-size: 1rem;
        margin-block: 10px;
    }
    p{
        color: ${({theme}) => theme["neutral-color-7"]};
        font-size: 0.85rem;
        margin-bottom: 2px;
    }
`

export const FooterSingleProduct = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    svg{
        width: 100%;
        height: 100%;
    }

    a{
        color: ${({theme}) => theme["neutral-color-2"]};
        background-color: ${({theme}) => theme["second-color-3"]};
        padding: 2px;
        border-radius: 5px;
        font-size: 10px;
        
        :hover{
            background-color: ${({theme}) => theme["second-color-2"]};
        }
    } 
`

export const Price = styled.p`
    font-size: 16px;
    font-weight: bold;
    color:  ${({theme}) => theme["neutral-color-9"]};
`