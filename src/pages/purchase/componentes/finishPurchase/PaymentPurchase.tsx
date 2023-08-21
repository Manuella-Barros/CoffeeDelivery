import { Bank, CreditCard, CurrencyDollar, Money } from "@phosphor-icons/react";
import { PaymentBody, PaymentHeader, PaymentPurchaseStyle } from "./FinishPurchaseStyle.styles";
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { GlobalContext } from "../../../../contexts/GlobalContext";

const schema = z.object({
    paymentType: z.string().min(1),
})
export type PaymentFormData = z.infer<typeof schema>;

function PaymentPurchase() {
    const { handlePurchaseValidation } = useContext(GlobalContext)
    const { register, handleSubmit } = useForm<PaymentFormData>({
        resolver: zodResolver(schema)
    });

    function handleFormSubmit(data: PaymentFormData){
        handlePurchaseValidation(data)
    }


    return (
        <PaymentPurchaseStyle>
            <PaymentHeader>
                <span><CurrencyDollar size={24} /></span>
                <div>
                    <h3>Pagamento</h3>
                    <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                </div>
            </PaymentHeader>

            <PaymentBody onChange={handleSubmit(handleFormSubmit)}>
                <input type="radio" id="credito" value="credito" {...register('paymentType')}/>
                <label htmlFor="credito">
                    <span><CreditCard size={24} /></span>
                    <p>Cartão de crédito</p>
                </label>

                <input type="radio" id="debito" value="debito" {...register('paymentType')}/>
                <label htmlFor="debito">
                    <span><Bank size={24} /></span>
                    <p>Cartão de débito</p>
                </label>

                <input type="radio" id="dinheiro" value="dinheiro" {...register('paymentType')}/>
                <label htmlFor="dinheiro">
                    <span><Money size={24} /></span>
                    <p>Dinheiro</p>
                </label>
            </PaymentBody>
        </PaymentPurchaseStyle>
    );
}

export default PaymentPurchase;