import { MapPinLine } from "@phosphor-icons/react";
import { AddressPurchaseStyle, AdressHeader, AdressBody } from "./FinishPurchaseStyle.styles";
import Input from "../../../../componentes/input/Input";
import { GlobalContext } from "../../../../contexts/GlobalContext";
import { useContext } from 'react';

function AddressPurchase() {
    const { userData } = useContext(GlobalContext);
    
    return (
        <AddressPurchaseStyle>
            <AdressHeader>
                <span><MapPinLine size={22} /></span>
                <div>
                    <h3>Endereço de entrega</h3>
                    <p>Informe o endereço de onde deseja receber seu pedido</p>
                </div>
            </AdressHeader>
            <AdressBody>
                <Input 
                    type="number" 
                    placeholder="CEP" 
                    defaultValue={userData?.cep} 
                    $registerValue={'cepInputUser'}
                />
                <Input 
                    type="text" 
                    placeholder="Rua" 
                    defaultValue={userData?.street} 
                    $registerValue={'InputUser'}
                />
                <Input 
                    type="number" 
                    placeholder="Número"
                />
                <Input 
                    type="text" 
                    placeholder="Complemento"
                />
                <Input 
                    type="text" 
                    placeholder="Bairro" 
                    defaultValue={userData?.neighborhood}
                />
                <Input 
                    type="text" 
                    placeholder="Cidade" 
                    defaultValue={userData?.city}
                />
                <Input 
                    type="text" 
                    placeholder="UF"
                    defaultValue={userData?.state}
                />
            </AdressBody>
        </AddressPurchaseStyle>
    );
}

export default AddressPurchase;
