import * as Style from "./InputStyle.styles";
import { HTMLInputTypeAttribute } from "react";
import { UseFormRegisterReturn } from 'react-hook-form';

interface InputProps {
    type: HTMLInputTypeAttribute,
    placeholder: string,
    register: UseFormRegisterReturn,
    defaultValue?: string | undefined,
}

function Input( { register, ...props }: InputProps) {

    return (
            <Style.Input  {...props} {...register}/>
    );
}

export default Input;