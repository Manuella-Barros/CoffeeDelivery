import { styled } from "styled-components";

export const BodySuccess = styled.article`
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    margin-top: 2rem;
`
export const PictureSuccess = styled.picture`
    width: 50%;

    img{
        max-width: 100%;
        max-height: 100%;
    }
`
export const ContentSuccess = styled.div`
    background: linear-gradient(90deg, rgba(128,71,248,1) 0%, rgba(219,172,44,1) 100%);
    width: 50%;
    border-top-right-radius: 30px;
    border-bottom-left-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    div{
        padding: 2rem;
        background-color: ${({theme}) => theme['neutral-color-1']};
        width: 99%;
        height: 98.5%;
        border-top-right-radius: 30px;
        border-bottom-left-radius: 30px;
    }
`

export const DeliveryInfo = styled.section`
    margin-bottom: 2rem;
    display: grid;
    grid-template-columns: 0.1fr 1fr;
    grid-template-rows: 1fr 1fr;
    column-gap: 2rem;
`

interface SuccessSVGProps {
    color: 'purple' | 'yellow' | 'orange',
}
export const SuccessSVG = styled.span<SuccessSVGProps>`
    grid-row: 1/3;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    height: 90%;
    border-radius: 30px;
    color: ${({theme}) => theme["neutral-color-1"]};
    background-color: ${({theme, color}) => {
        if(color == 'purple') {
            return theme["second-color-2"]
        } else if(color == 'yellow'){
            return theme["first-color-2"]
        } else if(color == 'orange'){
            return theme["first-color-3"]
        }
    }};
`