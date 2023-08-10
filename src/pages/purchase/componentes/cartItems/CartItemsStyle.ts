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

`
export const FooterSingleItem = styled.div`

`