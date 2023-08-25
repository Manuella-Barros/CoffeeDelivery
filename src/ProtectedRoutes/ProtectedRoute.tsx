import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import { Navigate } from "react-router-dom";

export function ProtectedRoutePurchase({children}: {children: React.ReactNode}) {
    const { userData } = useContext(GlobalContext);
    
    if(userData?.userCartList)
    return userData?.userCartList?.length > 0 ? children : <Navigate to={'/'}/>
}

export function ProtectedRouteSuccess({children}: {children: React.ReactNode}) {
    const { userData } = useContext(GlobalContext);

    if(userData?.paymentType.paymentType != '' && userData?.userAdress.cep != '' && userData?.userAdress.houseNumber != ''){
        return children;
    } else{ return <Navigate to={'/purchase'}/>}
}