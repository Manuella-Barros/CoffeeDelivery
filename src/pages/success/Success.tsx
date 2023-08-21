import { CurrencyCircleDollar, MapPin, Timer } from '@phosphor-icons/react';
import * as Style from './Success.styles';
import { useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';

function Success() {
    const { userData } = useContext(GlobalContext);
    
    return (
        <main>
            <h2>Uhu! Pedido confirmado</h2>
            <h3>Agora é só aguardar que logo o café chegará até você</h3>

            <Style.BodySuccess>
                <Style.ContentSuccess>
                    <div>
                        <Style.DeliveryInfo>
                            <Style.SuccessSVG color='purple'><MapPin size={24} /></Style.SuccessSVG>
                            <p>Entrega em <strong>{userData?.userAdress.street}, {userData?.userAdress.houseNumber}</strong></p>
                            <p>{userData?.userAdress.city} - {userData?.userAdress.state}</p>
                        </Style.DeliveryInfo>
                        <Style.DeliveryInfo>
                            <Style.SuccessSVG color='yellow'><Timer size={24} /></Style.SuccessSVG>
                            <p>Previsão de entrega</p>
                            <p><strong>20 min - 30 min</strong></p>
                        </Style.DeliveryInfo>
                        <Style.DeliveryInfo>
                            <Style.SuccessSVG color='orange'><CurrencyCircleDollar size={24} /></Style.SuccessSVG>
                            <p>Pagamento na entrega</p>
                            <p><strong>Cartão de crédito</strong></p>
                        </Style.DeliveryInfo>
                    </div>
                </Style.ContentSuccess>

                <Style.PictureSuccess>
                    <img src="./images/entrega.svg" alt="" />
                </Style.PictureSuccess>
            </Style.BodySuccess>
        </main>
    );
}

export default Success;