import { styled } from "styled-components";

const BasePurchase = styled.div`
    background-color: ${({theme}) => theme["neutral-color-3"]};
    padding: ${({theme}) => theme["escala-gg"]};
    border-radius: 8px;
`

export const AddressPurchaseStyle = styled(BasePurchase)`
    margin-bottom: ${({theme}) => theme["escala-m"]};

    span{
        color: ${({theme}) => theme["first-color-3"]};
    }
    
`
export const AdressHeader = styled.div`
    display: flex;
    align-items: start;

    div{
        padding-left: ${({theme}) => theme["escala-p"]};
    }
`
export const AdressBody = styled.form`
    margin-top: ${({theme}) => theme["escala-m"]};
    display: grid;
    grid-template-columns: repeat(3, 31%);
    grid-template-rows: repeat(4, 1fr);
    gap: ${({theme}) => theme["escala-m"]};

    div{
        input{
            box-shadow: 0px 0px 2px ${({theme}) => theme["first-color-3"]};
        
            &:hover,
            &:focus{
                box-shadow: 0px 0px 10px ${({theme}) => theme["first-color-3"]};
                outline: 0;
            }
        }

        &:nth-child(1){
            grid-column: 1/2; //localização
            grid-row: 1/2;
        }
        &:nth-child(2){
            grid-column: 1/4;
            grid-row: 2/3;
        }
        &:nth-child(3){
            grid-column: 1/2;
            grid-row: 3/4;
        }
        &:nth-child(4){
            grid-column: 2/4;
            grid-row: 3/4;
        }
        &:nth-child(5){
            grid-column: 1/2;
            grid-row: 4/5;
        }
        &:nth-child(6){
            grid-column: 2/3;
            grid-row: 4/5;
        }
        &:nth-child(7){
            grid-column: 3/4;
            grid-row: 4/5;
        }         
    }
`

export const PaymentPurchaseStyle = styled(BasePurchase)`
    margin-bottom: ${({theme}) => theme["escala-gg"]};

    div{
        display: flex;
    }
`

export const PaymentHeader = styled.div`
    padding-bottom: ${({theme}) => theme["escala-gg"]};
    gap: ${({theme}) => theme["escala-m"]};

    span{
        color: ${({theme}) => theme["second-color-2"]};
    }
    div{
        display: block;
    }
`

export const PaymentBody = styled.form`
    display: flex;
    justify-content: space-between;
    
    label{
        display: flex;
        background-color: ${({theme}) => theme["neutral-color-3"]};
        padding: ${({theme}) => theme["escala-xx-pp"]};
        border: 0px;
        box-shadow: 0px 0px 2px ${({theme}) => theme["second-color-3"]};
        border-radius: 5px;
        align-items: center;
        gap: 5px;
        
        &:hover{
            box-shadow: 0px 0px 10px ${({theme}) => theme["second-color-3"]};
        }

        span{
            color: ${({theme}) => theme["second-color-2"]};

        }
    }

    input[type = radio]{
        display: none;

        &:checked + label{
            box-shadow: 0px 0px 10px ${({theme}) => theme["second-color-3"]};
        }
    }
    
`