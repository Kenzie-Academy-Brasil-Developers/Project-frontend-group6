import { InputHTMLAttributes } from "react"
import { UseFormRegister, FieldValues, FieldError } from 'react-hook-form'
import { CampInput, LabelStyled, InputStyled } from "./styled"

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string
    name: string
    register: UseFormRegister<FieldValues>
    error: FieldError | undefined
}

export const Input = ({ name, register,error, label, ...rest }:IInputProps) => {
    return (
        <CampInput>
            <LabelStyled>{label}</LabelStyled>
            <InputStyled {...register(name)} {...rest}/>
            {error && <span>{error.message}</span>}
        </CampInput>
    )
}
