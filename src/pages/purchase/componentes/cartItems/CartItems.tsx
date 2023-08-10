import { MainCartItemStyle, BodySingleItem, FooterSingleItem } from "./CartItemsStyle";
import SingleItem from "./SingleItem";

function CartItems() {
    return (
        <section>
            <h3>Cafés selecionados</h3>

            <MainCartItemStyle>
                <SingleItem/>
                <SingleItem/>
                
                <BodySingleItem>
                    <p>Subtotal</p>
                    <p>R$dinheirinhos</p>
                    <p>Taxa de entrega</p>
                    <p>R$dinheirinhos</p>
                    <p>Total</p>
                    <p>R$dinheirinhos</p>
                </BodySingleItem>
                
                <FooterSingleItem>
                    <button>Confirmar pedido</button>
                </FooterSingleItem>
            </MainCartItemStyle>    
        </section>
    );
}

export default CartItems;