import { MapPin, ShoppingCartSimple } from "@phosphor-icons/react";
import { CartStyle, LocationUserStyle, NavbarStyle, PictureStyle } from "./NavbarStyle.style";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import getCepInformation from "../../fetch/getCepInfo";
import { useContext } from 'react';
import { GlobalContext } from "../../contexts/GlobalContext";
import Input from "../input/Input";
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { ACTIONS } from "../../contexts/GlobalContextInterface";

const schema = z.object({
    cepInput: z.string().length(8),
})
type Data = z.infer<typeof schema>

function Navbar() {
    const { userData, handleUserDataDispatch } = useContext(GlobalContext)
    const { register, handleSubmit} = useForm<Data>({
        resolver: zodResolver(schema)
    });
    
    function handleFetchRequest(data: Data){
        handleUserDataDispatch({
            type: ACTIONS.RESET_USER_INFO,
        })

        getCepInformation(data.cepInput)
        .then(res => { 
            if(res){
                handleUserDataDispatch({
                    type: ACTIONS.SET_USER_ADRESS_INFO,
                    payload: res,
                })
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
                    <form onChange={handleSubmit(handleFetchRequest)}>
                        {
                            !userData?.userAdress.state &&
                            <Input
                                type="text"
                                placeholder="Insira seu CEP aqui"
                                register={register('cepInput')}
                            />
                        }
                    </form>
                    {/* {
                        !userData?.userAdress.state &&
                        <input 
                            type="number" 
                            placeholder="Insira seu CEP aqui" 
                            {...register('cepInput')}
                        />
                    } */}
                    {
                        userData?.userAdress.state &&
                        <p>{userData?.userAdress.city}, {userData?.userAdress.state}</p>
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