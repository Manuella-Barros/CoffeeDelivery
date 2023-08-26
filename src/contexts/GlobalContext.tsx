import { createContext, useReducer, useState, useEffect } from 'react';
import getSingleProduct from '../fetch/getSingleProduct';
import { ACTIONS, ActionProps, GlobalContextProps, MathType, ProductProps, UserDataProps } from './GlobalContextInterface';
import { SingleItemProps } from '../pages/purchase/componentes/cartItems/SingleItem';



export const GlobalContext = createContext({} as GlobalContextProps);

export const GlobalContextProvider = ({children}: {children: React.ReactNode}) => {
    //                     FUNÇÕES PARA USE REDUCER
    function reducer(state:UserDataProps, action: ActionProps):UserDataProps{
        switch(action.type){
            // ADD INFO DO ENDEREÇO DO USER DE ACORDO COM O CEP
            case 'SET_USER_ADRESS_INFO':
                return {...state, 
                    userAdress: action.payload
                }
            
            case 'SET_USER_HOUSENUMBER':
                return {...state,
                    userAdress: {...state.userAdress, 
                        houseNumber: action.payload
                    }
                } 
            
            case 'SET_USER_PAYMENTTYPE':
                return {...state,
                    paymentType: {...action.payload}
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
                return state
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
        },
        userCartList: [],
        paymentType: {paymentType: ''},
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
                setSubtotal(prevValue => prevValue + Number((Number(prod.price) * quant)));
            }
        })

        setSelectedProducts(produtosFiltrados)
    }, [userData?.userCartList])

    
    function handleUserDataDispatch({type, payload}: ActionProps){
        dispatch({
            type: type,
            payload: payload,
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
    
    return (
        <GlobalContext.Provider value={{userData,handleCartListChange, product, setProduct, selectedProducts, subtotal, handleUserDataDispatch}}>
            {children}
        </GlobalContext.Provider>
    )
}