import { styled } from "styled-components";

export const HeaderStyle = styled.header`
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3{
        margin-bottom: 12px;
    }
    picture img{
        width: 100%;
    }

    @media(max-width: 500px){
        flex-direction: column-reverse;

        picture{
            width: 60%;
        }

    }
`

export const AboutStyle = styled.article`
    display: flex;
    flex-wrap: wrap;
    
    div{
        display: flex;
        width: ${({theme}) => theme['escala-xx-plus']};
        padding-block: ${({theme}) => theme['escala-p']};
        align-items: center;

        span{
            padding: ${({theme}) => theme['escala-xx-pp']};
            margin-right: ${({theme}) => theme['escala-xx-pp']};
            color: ${({theme}) => theme['neutral-color-1']};
            text-align: center;
            border-radius: 32px;
        }
        span:nth-child(1){
            background-color: ${({theme}) => theme['second-color-2']};
        }
    }

    @media(max-width: 500px){
        justify-content: center;
    }

`