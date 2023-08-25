import { GetCepInfoRequest } from "../fetch/getCepInfo";
import { SingleItemProps } from '../pages/purchase/componentes/cartItems/SingleItem';
import { AdressFormData } from "../pages/purchase/componentes/finishPurchase/AddressPurchase";
import { PaymentFormData } from "../pages/purchase/componentes/finishPurchase/PaymentPurchase";

export interface GlobalContextProps { // Do q vai ser exportado
    userData:  UserDataProps | null,
    product: ProductProps[] | null,
    selectedProducts: SingleItemProps[] | undefined,
    subtotal: number,
    setProduct: React.Dispatch<React.SetStateAction<ProductProps[] | null>>,
    handleCartListChange: (a: string, b: MathType) => void,
    handleUserDataDispatch: (a: ActionProps) => void
}
export interface ProductProps {
    id: string,
    name: string,
    price: string,
    description: string,
    tags: string[],
    imagePath: string,
}
export const ACTIONS = {
    SET_USER_ADRESS_INFO: 'SET_USER_ADRESS_INFO',
    ADD_CART_LIST: 'ADD_CART_LIST',
    RESET_USER_INFO: 'RESET_USER_INFO',
    REMOVE_CART_lIST: 'REMOVE_CART_lIST',
    SET_USER_HOUSENUMBER: 'SET_USER_HOUSENUMBER',
    SET_USER_PAYMENTTYPE: 'SET_USER_PAYMENTTYPE', 
} as const

export type ActionsType = typeof ACTIONS[keyof typeof ACTIONS];

export interface ActionProps {
    type: ActionsType,
    payload?: any
}
export type userAdressProps = { // Os tipo que tem nas infos de endereço
    cep: string,
    street: string,
    neighborhood: string,
    city: string,
    state: string,
    houseNumber?: string | null,
    complement?: string | null,
}
export type userCartList = {// Os tipo que tem nas infos do carrinho
    id: string,
    quantity: number
}
export interface UserDataProps {
    userAdress: userAdressProps
    userCartList: userCartList[]
    paymentType: PaymentFormData,
}
export type MathType = "add" | "subtract";