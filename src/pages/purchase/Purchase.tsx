import { PurchaseStyle } from './PurchaseStyle.styles';
import FinishPurchase from './componentes/finishPurchase/FinishPurchase';
import CartItems from './componentes/cartItems/CartItems';

function Purchase() {
    return (
            <PurchaseStyle>
                <FinishPurchase/>
                <CartItems/>
            </PurchaseStyle>
    );
}

/*
adress => cep, street, number, complement, neigboohod, city, state
payment => paymentMethod
*/

export default Purchase;