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
    padding: 1.25rem;
    width: 12.75rem;
    text-align: center;
    border-top-right-radius: 40px;
    border-bottom-left-radius: 40px;
`

export const HeaderSingleProduct = styled.div`
    display: block;

    picture{
        display: flex;
        width: 70%;
        margin: auto;

        img{
            margin-top: -${({theme}) => theme["escala-xx-gg"]};
            width: 100%;
        }
    }
    
    div{
        display: flex;
    }
    div p{
        font-size: ${({theme}) => theme["escala-xpp"]};
        text-transform: uppercase;
        font-weight: bold;
        color: ${({theme}) => theme["first-color-3"]};
        background-color: ${({theme}) => theme["first-color-1"]};
        margin: 2px auto;
        padding: 5px 8px;
        border-radius: 20px;
    }
`

export const BodySingleProduct = styled.div`
    h3{
        font-weight: bold;
        font-size: 1rem;
        margin-block: 2px;
    }
    p{
        color: ${({theme}) => theme["neutral-color-7"]};
        font-size: 0.9rem;
        margin-bottom: 2px;
    }
    `

export const FooterSingleProduct = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    p, button{
        font-size: 0.9rem;
    }
    button{
        padding-inline: 2px;
    }

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