import { createContext, useReducer } from 'react';
import { GetCepInfoProps } from '../fetch/getCepInfo';

interface GlobalContextProps {
    userData: UserData | null,
    HandleSetUserCepInfo: (a: GetCepInfoProps) => void
}
interface GlobalContextProviderProps {
    children: React.ReactNode,
}
interface UserData{
    id: string,
    cep: string,
    street: string,
    neighborhood: string,
    city: string,
    state: string,
    houseNumber: number | null,
    complement: string | null,
}
interface ActionProps {
    type: string,
    payload: any
}

export const GlobalContext = createContext({} as GlobalContextProps);

export const GlobalContextProvider = ({children}: GlobalContextProviderProps) => {

    //                      FUNÇÕES PARA USE REDUCER
    function reducer(state:UserData, action: ActionProps):UserData{
        switch(action.type){
            case 'SET_USER_INFO':
                return {...state, 
                    id: '1',
                    cep: action.payload.cepInfo.cep,
                    street: action.payload.cepInfo.street,
                    neighborhood: action.payload.cepInfo.neighborhood,
                    city: action.payload.cepInfo.city,
                    state: action.payload.cepInfo.state,
                }
            case 'RESET_USER_INFO':
                return action.payload.initialState
            default:
                return state    
        }
    }    
    const initialState: UserData = {
        id: '',
        cep: '',
        street: '',
        neighborhood: '',
        city: '',
        state: '',
        houseNumber: null,
        complement: null,
    }
    //useReducer(função que dita oq ocorre quando dispatch for ativado, valores iniciais)
    const [userData, dispatch] = useReducer(reducer, initialState)




    //              ADD INFO DO ENDEREÇO DO USER DE ACORDO COM O CEP
    function HandleSetUserCepInfo(cepInfo: GetCepInfoProps){
        dispatch({
            type: 'RESET_USER_INFO',
            payload: {
                initialState
            }
        })

        dispatch({
            type: 'SET_USER_INFO',
            payload: {
                cepInfo
            }
        })

    }

    return (
        <GlobalContext.Provider value={{userData, HandleSetUserCepInfo}}>
            {children}
        </GlobalContext.Provider>
    )
}