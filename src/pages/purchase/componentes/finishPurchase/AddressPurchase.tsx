import { MapPinLine } from "@phosphor-icons/react";
import { AddressPurchaseStyle, AdressHeader, AdressBody } from "./FinishPurchaseStyle.styles";
import Input from "../../../../componentes/input/Input";
import { GlobalContext } from "../../../../contexts/GlobalContext";
import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form'
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import getCepInfo from "../../../../fetch/getCepInfo";

const schema = z.object({
    cepInputUser: z.string().length(8, "Deve ter 8 digitos"),
    streetInput: z.string().min(1, "Campo obrigatório"),
    numberInput: z.string().min(1, "Campo obrigatório"),
    complementInput: z.string(),
    neighborhoodInput: z.string().min(1, "Campo obrigatório"),
    cityInput: z.string().min(1, "Campo obrigatório"),
    stateInput: z.string().min(1, "Campo obrigatório"),
})
export type AdressFormData = z.infer<typeof schema>;

function AddressPurchase() {
    const { userData, handlePurchaseValidation, HandleSetUserCepInfo } = useContext(GlobalContext);
    const { register, handleSubmit, watch} = useForm<AdressFormData>({
        resolver: zodResolver(schema)
    })

    // VERIFICA CEP
    useEffect(() => {
        if(watch('cepInputUser')?.length == 8){
            getCepInfo(watch('cepInputUser'))
                .then(res => { if(res){ HandleSetUserCepInfo(res) } })
        }
    }, [watch('cepInputUser')])
    
    // ADD NUMERO
    useEffect(() => {
        if(watch('numberInput')?.length != 0){
            handlePurchaseValidation(watch('numberInput'))
        }
    }, [watch('numberInput')])

    // ADD O RESTO DAS INFO SE JÁ NÃO ESTIVEREM COMPLETAS
    function handleFormSubmit(data: AdressFormData){
        handlePurchaseValidation(data)
    }

    return (
        <AddressPurchaseStyle>
            <AdressHeader>
                <span><MapPinLine size={22} /></span>
                <div>
                    <h3>Endereço de entrega</h3>
                    <p>Informe o endereço de onde deseja receber seu pedido</p>
                </div>
            </AdressHeader>

            <AdressBody onChange={handleSubmit(handleFormSubmit)}>
                <div>
                    <Input
                        type="text"
                        placeholder="CEP"
                        defaultValue={userData?.userAdress.cep}
                        register={register('cepInputUser')}
                    />
                </div>
                <div>
                    <Input
                        type="text"
                        placeholder="Rua"
                        defaultValue={userData?.userAdress.street}
                        register={register('streetInput')}
                    />
                </div>
                <div>
                    <Input
                        type="text"
                        placeholder="Número"
                        register={register('numberInput')}
                    />
                </div>
                <div>
                    <Input
                        type="text"
                        placeholder="Complemento"
                        register={register('complementInput')}
                    />
                </div>
                <div>
                    <Input
                        type="text"
                        placeholder="Bairro"
                        defaultValue={userData?.userAdress.neighborhood}
                        register={register('neighborhoodInput')}
                    />
                </div>
                <div>
                    <Input
                        type="text"
                        placeholder="Cidade"
                        defaultValue={userData?.userAdress.city}
                        register={register('cityInput')}
                    />
                </div>
                <div>
                    <Input
                        type="text"
                        placeholder="UF"
                        defaultValue={userData?.userAdress.state}
                        register={register('stateInput')}
                    />
                </div>
            </AdressBody>
        </AddressPurchaseStyle>
    );
}

export default AddressPurchase;
