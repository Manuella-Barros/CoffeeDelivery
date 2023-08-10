import { MapPin, ShoppingCartSimple } from "@phosphor-icons/react";
import { CartStyle, LocationUserStyle, NavbarStyle, PictureStyle } from "./NavbarStyle.style";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import getCepInformation from "../../fetch/getCepInfo";
import { useContext } from 'react';
import { GlobalContext } from "../../contexts/GlobalContext";

function Navbar() {
    const { HandleSetUserCepInfo, userData } = useContext(GlobalContext)
    const { register, watch } = useForm();

    const wacthCepInput = watch('cepInput', null)

    if(wacthCepInput){
        getCepInformation(wacthCepInput)
        .then(res => {
            if(res){
                HandleSetUserCepInfo(res)
            }
        })
    }
    
    return (
        <NavbarStyle>
            <PictureStyle>
                <Link to={'/'}>
                    <img src="./images/logo/logo.svg" alt="Logo Coffe Delivery" />
                </Link>
            </PictureStyle>

            <article>
                <LocationUserStyle>
                    <MapPin size={25} weight="fill" />
                    {
                        !userData?.state &&
                        <input 
                            type="number" 
                            placeholder="Insira seu CEP aqui" 
                            {...register('cepInput')}
                        />
                    }
                    {
                        userData?.state &&
                        <p>{userData?.city}, {userData?.state}</p>
                    }
                </LocationUserStyle>                

                <Link to={'/purchase'}>
                    <CartStyle>
                        <ShoppingCartSimple size={25} weight="fill"/>
                    </CartStyle>
                </Link>
            </article>

        </NavbarStyle>
    );
}

export default Navbar;