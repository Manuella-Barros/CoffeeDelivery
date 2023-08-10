import { Bank, CreditCard, CurrencyDollar, Money } from "@phosphor-icons/react";
import { PaymentBody, PaymentHeader, PaymentPurchaseStyle } from "./FinishPurchaseStyle.styles";

function PaymentPurchase() {
    return (
        <PaymentPurchaseStyle>
            <PaymentHeader>
                <span><CurrencyDollar size={24} /></span>
                <div>
                    <h3>Pagamento</h3>
                    <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                </div>
            </PaymentHeader>

            <PaymentBody>
                <button>
                    <span><CreditCard size={24} /></span>
                    <p>Cartão de crédito</p>
                </button>
                <button>
                    <span><Bank size={24} /></span>
                    <p>Cartão de débito</p>
                </button>
                <button>
                    <span><Money size={24} /></span>
                    <p>Dinheiro</p>
                </button>
            </PaymentBody>
        </PaymentPurchaseStyle>
    );
}

export default PaymentPurchase;