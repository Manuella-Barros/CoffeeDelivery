import AddressPurchase from "./AddressPurchase";
import PaymentPurchase from "./PaymentPurchase";

function FinishPurchase() {
    return (
        <section>
            <h3>Complete seu pedido</h3>

            <AddressPurchase/>
            <PaymentPurchase/>
        </section>
    );
}

export default FinishPurchase;