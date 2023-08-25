import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../../../contexts/GlobalContext";
import * as Style from "./CartItemsStyle";
import SingleItem from "./SingleItem";
import { useContext } from 'react';

function CartItems() {
    const { selectedProducts, subtotal, userData } = useContext(GlobalContext)
    const navigate = useNavigate();
    const taxa: number = 5;

    const isDisabled = !(!!userData?.userAdress.houseNumber && !!userData?.userAdress.cep && !!userData?.paymentType)

    // console.log(!!userData?.userAdress.houseNumber)
    // console.log(!!userData?.userAdress.cep)
    // console.log(!!userData?.paymentType.paymentType)
    
    // console.log(isDisabled)

    function handleDeliverButtonClick(){
        navigate('/success')
    }

    
    return (
        <section>
            <h3>Cafés selecionados</h3>

            <Style.MainCartItemStyle>
                {
                    selectedProducts?.map(item => {
                        return <SingleItem key={item.id} id={item.id} name={item.name} price={item.price} imagePath={item.imagePath}/>
                    })
                } 
                
                <Style.BodySingleItem>
                    <span>
                        <p>Subtotal</p>
                        <p>R${subtotal}</p>
                    </span>
                    <span>
                        <p>Taxa de entrega</p>
                        <p>R${taxa}</p>
                    </span>
                    <span>
                        <p>Total</p>
                        <p>R${subtotal + taxa}</p>
                    </span>
                </Style.BodySingleItem>
                
                <div>
                    <Style.DeliverButton onClick={handleDeliverButtonClick} disabled={isDisabled} type="submit">Confirmar pedido</Style.DeliverButton>
                </div>
            </Style.MainCartItemStyle>    
        </section>
    );
}

export default CartItems;