import * as S from "./styles"
import { HTMLInputTypeAttribute, useState, FormEvent } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { Input } from './../../../components/input/index'
import { Button } from './../../../components/buttons/index';
import { FormStructure } from './../../../components/form/index';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
// import { errorsRegister, handleSubmitRegister, registerForm } from "../../validations/Login and Register";

type StatePassword = boolean

interface IIconType {
  type: string
}

export const Register = () => {
  const [typeInput, setTypeInput] = useState<HTMLInputTypeAttribute>("password")
  const [passwordIconStatus, setPasswordIconStatus] = useState<StatePassword>(false)

  const FormSchemaRegister = yup.object({
    name: yup.string().required("Nome Obrigatório"),
    email: yup.string().required("Email obrigatório").email(),
    password: yup.string().required("Senha obrigatória")
        .min(8)
        .matches(/^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/, "Senha com no mínimo 8 caracteres. Necessário ter letras, números e ao menos um símbolo"),
    confirm_password: yup.string().required("Confirme sua Senha")
        .oneOf([yup.ref("password")], "Senhas precisam ser iguais"),
    checkbox: yup.string().required("Marque uma Opção")
  })

  const { 
      register, 
      handleSubmit, 
      formState: { 
          errors
      }} = useForm({
      resolver: yupResolver(FormSchemaRegister)
  })

  const toogleIconPassword = (type: IIconType) => {
    setPasswordIconStatus((value) => !value)
    typeInput === "password" ? setTypeInput("text") : setTypeInput("password")
  }

  const submitRegister = (data: {}) => {
    console.log(data)
  }
    
  return (
    <S.RegisterStyled>
      <FormStructure title="Faça seu Registro">
        <S.FormRegister onSubmit={handleSubmit(submitRegister)}>
          <Input 
            label={"Nome"} 
            type="text" 
            name={"name"}
            placeholder="Insira seu nome de usuario aqui"
            register={register}
            error={errors.email}
          />
          <Input 
            label={"Email"} 
            type="email" 
            placeholder="Insira seu email aqui"
            register={register}
            error={errors.email}
          />

          <S.CampPassword>
            <Input 
              label={"Senha"} 
              type={typeInput} 
              placeholder="Insira sua senha aqui"
              register={register}
              error={errors.password}
            />
            {passwordIconStatus ? (
              <AiOutlineEye onClick={toogleIconPassword}/>
            ) : (
              <AiOutlineEyeInvisible onClick={toogleIconPassword}/>
            )}
          </S.CampPassword>
          <S.CampConfirmPassword>
            <Input 
              label={"Confirmar senha"} 
              type={typeInput} 
              placeholder="Insira sua senha novamente"
              register={register}
              error={errors.password}
            />
            {passwordIconStatus ? (
                <AiOutlineEye onClick={toogleIconPassword}/>
            ) : (
                <AiOutlineEyeInvisible onClick={toogleIconPassword}/>
            )}
          </S.CampConfirmPassword>
          <S.CampTypeUser>
            <S.LabelTypeUser>Tipo de usuario</S.LabelTypeUser>
            <S.CampChoiceJob>
              <S.CampContractor>
                <input type="checkbox"/>
                <span>Contratante</span>
              </S.CampContractor>
              <S.CampCollaborator>
                <input type="checkbox"/>
                <span>Colaboradora</span>
              </S.CampCollaborator>
            </S.CampChoiceJob>
          </S.CampTypeUser>
          <Button type="submit" variant="primary">Cadastrar</Button>
        </S.FormRegister>
      </FormStructure>
    </S.RegisterStyled>
  )
};
