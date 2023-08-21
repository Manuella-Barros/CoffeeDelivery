import { GlobalContext } from "../../../../contexts/GlobalContext";
import * as Style from "./CartItemsStyle";
import SingleItem from "./SingleItem";
import { useContext } from 'react';

function CartItems() {
    const { selectedProducts, subtotal } = useContext(GlobalContext)
    const taxa: number = 5;

    
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
                    <Style.DeliverButton type="submit">Confirmar pedido</Style.DeliverButton>
                </div>
            </Style.MainCartItemStyle>    
        </section>
    );
}

export default CartItems;