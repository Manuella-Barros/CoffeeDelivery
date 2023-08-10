import { useForm } from "react-hook-form";
import { InputStyle } from "./InputStyle.styles";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import getCepInfo from "../../fetch/getCepInfo";

function Input( { $registerValue='noValue', ...props }) {
    const { HandleSetUserCepInfo } = useContext(GlobalContext);
    const { register, watch } = useForm();

    const watchCepInputUser = watch('cepInputUser')

    useEffect(() => {
        console.log('userData')
        getCepInfo(watchCepInputUser)
        .then(res => {
            if(res){
                HandleSetUserCepInfo(res)
            }
        })
    }, [watchCepInputUser])

    return (
            <InputStyle  {...props} {...register($registerValue)}/>
    );
}
// function Input( { registerName='', ...props }) {
//     const { register } = useForm();

//     return (
//         <InputStyle  {...props}  {...register(registerName)}/>
//     );
// }

export default Input;