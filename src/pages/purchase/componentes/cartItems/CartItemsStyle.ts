import { styled } from "styled-components";

export const MainCartItemStyle = styled.article`
    background-color: ${({theme}) => theme["neutral-color-3"]};
    padding: ${({theme}) => theme["escala-gg"]};
    border-top-left-radius: 8px;
    border-top-right-radius: 15px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 8px;
`
export const MainSingleItem = styled.div`
    display: flex;
    border-bottom: solid 2px ${({theme}) => theme["neutral-color-5"]};
    padding-bottom: ${({theme}) => theme["escala-xx-pp"]};
    margin-bottom: ${({theme}) => theme["escala-p"]};

    picture{
        width: 30%;
        img{
            width: 100%;
        }
    }
`

export const OptionsSingleItem = styled.div`
    text-align: center;
    padding-inline: ${({theme}) => theme["escala-m"]};

    p:first-child{
        padding-bottom: 5px;
    }
`

export const BodySingleItem = styled.div`
    span{
        padding-block: ${({theme}) => theme["escala-xx-pp"]};
        display: flex;
        justify-content: space-between;
    }

    span:last-child p{
        font-weight: bolder;
        font-size: ${({theme}) => theme["escala-m"]};
    }
`
export const DeliverButton = styled.button`
    background-color: ${({theme}) => theme['first-color-2']};
    text-align: center;
    color: ${({theme}) => theme['neutral-color-2']};
    font-size: ${({theme}) => theme['escala-m']};
    padding-block: ${({theme}) => theme['escala-pp']};
    border-radius: 10px;
    font-style: ${({theme}) => theme['fonte-1']};
    text-transform: uppercase;
    border: 0;
    width: 100%;
    
    &:hover{
        color: ${({theme}) => theme['first-color-1']};
        background-color: ${({theme}) => theme['first-color-3']};
    }
    
    &:disabled{
        color: ${({theme}) => theme['first-color-1']};
        background-color: ${({theme}) => theme['first-color-3']};
        cursor: not-allowed;
    }
`