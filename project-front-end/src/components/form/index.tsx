import { IChildren } from './../../features/interfaces/children'
import { FormStyled, FormTop } from './styled'
import logo from '../../../src/assets/logowhite.png'
import { FormEvent } from 'react'

interface IForm {
    title: string
    children: any
}

export const FormStructure = ({ title, children }:IForm) => {
    return (
        <FormStyled>
            <FormTop>
                <img src={logo} alt="logo" />
                <h2>{title}</h2>
            </FormTop>
            {children}
        </FormStyled>
    )
}
