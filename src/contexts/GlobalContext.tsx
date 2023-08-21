import { createContext, useReducer, useState, useEffect } from 'react';
import { GetCepInfoRequest } from '../fetch/getCepInfo';
import getSingleProduct from '../fetch/getSingleProduct';
import { ACTIONS, ActionProps, GlobalContextProps, MathType, ProductProps, UserDataProps } from './GlobalContextInterface';
import { SingleItemProps } from '../pages/purchase/componentes/cartItems/SingleItem';
import { AdressFormData } from '../pages/purchase/componentes/finishPurchase/AddressPurchase';
import { PaymentFormData } from '../pages/purchase/componentes/finishPurchase/PaymentPurchase';

export const GlobalContext = createContext({} as GlobalContextProps);

export const GlobalContextProvider = ({children}: {children: React.ReactNode}) => {
    //                     FUNÇÕES PARA USE REDUCER
    function reducer(state:UserDataProps, action: ActionProps):UserDataProps{
        switch(action.type){
            case 'SET_USER_ADRESS_INFO':
                return {...state, 
                    userAdress: {
                        cep: action.payload.cepInfo.cep,
                        street: action.payload.cepInfo.street,
                        neighborhood: action.payload.cepInfo.neighborhood,
                        city: action.payload.cepInfo.city,
                        state: action.payload.cepInfo.state,
                    }
                }
            case 'ADD_CART_LIST':
                const currentItem = state.userCartList.find(item => item.id == action.payload.id)

                if(!currentItem) {
                    return{ ...state,
                        userCartList: [...state.userCartList, {id: action.payload.id, quantity: 1}]
                    }
                } else{
                    return {...state,
                        userCartList: state.userCartList.map(item => {
                            if(item.id == action.payload.id) {
                                item.quantity = action.payload.quantity
                            }
                            return item
                        })
                    }
                }

            case 'REMOVE_CART_lIST':
                const currentItem2 = state.userCartList.find(item => item.id == action.payload.id)
                if(currentItem2?.quantity == 0){
                    return {...state,
                        userCartList: state.userCartList.filter(item => {
                            return item.quantity != 0;
                        })
                    }    
                } else{
                    return {...state,
                        userCartList: state.userCartList.map(item => {
                            if(item.id == action.payload.id) {
                                item.quantity = action.payload.quantity
                            }
                            return item
                        })
                    }
                }
            case 'RESET_USER_INFO':
                return action.payload.initialState

            default:
                return state    
        }
    }    
    const initialState = {
        userAdress: {
            cep: '',
            street: '',
            neighborhood: '',
            city: '',
            state: '',
            houseNumber: '',
            complement: '',
            paymentType: ''
        },
        userCartList: [],
    }
    //useReducer(função que dita oq ocorre quando dispatch for ativado, valores iniciais)
    const [userData, dispatch] = useReducer(reducer, initialState)


    //                         USESTATES
    const [product, setProduct] = useState<ProductProps[] | null>([]);
    const [selectedProducts, setSelectedProducts] = useState<SingleItemProps[] | undefined>([]);
    const [subtotal, setSubtotal] = useState<number>(0);

    //  FETCH PRODUTOS
    useEffect(() => {
        getSingleProduct()
        .then(res => {
            setProduct(res)
        })
    }, [])

    useEffect(() => {
        const produtosFiltrados = product?.filter(prod => {
            return userData?.userCartList?.find(item => {
                if(prod.id == item.id){
                    return prod;
                }
            })
        })

        setSubtotal(0)
        produtosFiltrados?.map(prod => {
            const quant = (userData?.userCartList?.find(item => prod.id == item.id))?.quantity

            if(quant){
                setSubtotal(prevValue => prevValue + Number((Number(prod.price) * quant).toFixed(2)));
            }
        })

        setSelectedProducts(produtosFiltrados)
    }, [userData?.userCartList])

    


    //                              FUNÇÕES
    // ADD INFO DO ENDEREÇO DO USER DE ACORDO COM O CEP
    function HandleSetUserCepInfo(cepInfo: GetCepInfoRequest){
        dispatch({
            type: ACTIONS.RESET_USER_INFO,
            payload: {
                initialState
            }
        })

        dispatch({
            type: ACTIONS.SET_USER_ADRESS_INFO,
            payload: {
                cepInfo
            }
        })
    }

    // ADD INTEM NO CARRINHO DE COMPRAS
    function handleCartListChange(id: string, mathType: MathType){
        let currentQuantity = userData?.userCartList?.find(item => item.id == id)

        if(mathType == 'add'){
            dispatch({
                type: ACTIONS.ADD_CART_LIST,
                payload: {
                    id: id,
                    quantity: currentQuantity ? currentQuantity?.quantity + 1 : 1 
                }
            })
        } else if(currentQuantity && currentQuantity?.quantity > 0) {
            dispatch({
                type: ACTIONS.REMOVE_CART_lIST,
                payload: {
                    id: id,
                    quantity: currentQuantity?.quantity - 1
                }
            })
        }
    }
    // JUNTA AS INFO DO PURCHASE
    function handlePurchaseValidation(inputInfo: AdressFormData | PaymentFormData | string){
        console.log(inputInfo)
    }

    return (
        <GlobalContext.Provider value={{userData, HandleSetUserCepInfo,handleCartListChange, product, setProduct, selectedProducts, subtotal, handlePurchaseValidation}}>
            {children}
        </GlobalContext.Provider>
    )
}