import { MapPinLine } from "@phosphor-icons/react";
import { AddressPurchaseStyle, AdressHeader, AdressBody } from "./FinishPurchaseStyle.styles";
import Input from "../../../../componentes/input/Input";
import { GlobalContext } from "../../../../contexts/GlobalContext";
import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form'
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import getCepInfo from "../../../../fetch/getCepInfo";
import { ACTIONS } from "../../../../contexts/GlobalContextInterface";

const schema = z.object({
    cep: z.string().length(8, "Deve ter 8 digitos"),
    street: z.string().min(1, "Campo obrigatório"),
    houseNumber: z.string().min(1, "Campo obrigatório"),
    complement: z.string(),
    neighborhood: z.string().min(1, "Campo obrigatório"),
    city: z.string().min(1, "Campo obrigatório"),
    state: z.string().min(1, "Campo obrigatório"),
})
export type AdressFormData = z.infer<typeof schema>;

function AddressPurchase() {
    const { userData, handleUserDataDispatch } = useContext(GlobalContext);
    const { register, handleSubmit, watch} = useForm<AdressFormData>({
        resolver: zodResolver(schema)
    })

    // VERIFICA CEP
    useEffect(() => {
        if(watch('cep')?.length == 8){
            getCepInfo(watch('cep'))
                .then(res => { if(res){
                    handleUserDataDispatch({
                        type: ACTIONS.SET_USER_ADRESS_INFO,
                        payload: res,
                    })
                } })
        }
    }, [watch('cep')])
    
    // ADD NUMERO
    useEffect(() => {
        if(watch('houseNumber')?.length != 0){
            handleUserDataDispatch({
                type: ACTIONS.SET_USER_HOUSENUMBER,
                payload: watch('houseNumber'),
            })
        }
    }, [watch('houseNumber')])

    // ADD O RESTO DAS INFO SE JÁ NÃO ESTIVEREM COMPLETAS
    function handleFormSubmit(data: AdressFormData){
        handleUserDataDispatch({
            type: ACTIONS.SET_USER_ADRESS_INFO,
            payload: data,
        })
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
                        register={register('cep')}
                    />
                </div>
                <div>
                    <Input
                        type="text"
                        placeholder="Rua"
                        defaultValue={userData?.userAdress.street}
                        register={register('street')}
                    />
                </div>
                <div>
                    <Input
                        type="text"
                        placeholder="Número"
                        register={register('houseNumber')}
                    />
                </div>
                <div>
                    <Input
                        type="text"
                        placeholder="Complemento"
                        register={register('complement')}
                    />
                </div>
                <div>
                    <Input
                        type="text"
                        placeholder="Bairro"
                        defaultValue={userData?.userAdress.neighborhood}
                        register={register('neighborhood')}
                    />
                </div>
                <div>
                    <Input
                        type="text"
                        placeholder="Cidade"
                        defaultValue={userData?.userAdress.city}
                        register={register('city')}
                    />
                </div>
                <div>
                    <Input
                        type="text"
                        placeholder="UF"
                        defaultValue={userData?.userAdress.state}
                        register={register('state')}
                    />
                </div>
            </AdressBody>
        </AddressPurchaseStyle>
    );
}

export default AddressPurchase;
