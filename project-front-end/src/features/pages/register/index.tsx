import * as S from "./styles"
import { HTMLInputTypeAttribute, SetStateAction, useState } from "react"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { Input } from "../../../components/inputs/index"
import { Button } from "./../../../components/buttons/index"
import { FormStructure } from "../../layouts/form/index"
import { yupResolver } from "@hookform/resolvers/yup"
import { FormSchemaRegister } from "../../validations/Auth"
import { useForm } from "react-hook-form"

type StatePassword = boolean
type StateTypePassword = "password" | "text"

export const Register = () => {
  const [typeInput, setTypeInput] = useState<HTMLInputTypeAttribute>("password")
  const [passwordIconStatus, setPasswordIconStatus] = useState<StatePassword>(false)
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(FormSchemaRegister),
  })

  const toogleIconPassword = (type: StateTypePassword) => {
    setPasswordIconStatus((value) => !value)
    typeInput === "password" ? setTypeInput("text") : setTypeInput("password")
  }

  const submitRegister = (data: {}) => {
    const obj = {
      avatar_img: "https://cdn-icons-png.flaticon.com/512/219/219969.png"
    }
    console.log(data)
  }

  return (
    <S.RegisterStyled>
      <FormStructure title="Faça seu Registro" maxWidth={700}>
        <S.FormRegister onSubmit={handleSubmit(submitRegister)}>
          <Input
            name={"name"}
            label={"Nome"}
            type="text"
            placeholder="Insira seu nome de usuario aqui"
            register={register}
            error={errors.name}
          />
          <Input
            name={"email"}
            label={"Email"}
            type="email"
            placeholder="Insira seu email aqui"
            register={register}
            error={errors.email}
          />
          <S.CampPassword>
            <Input
              name={"password"}
              label={"Senha"}
              type={typeInput}
              placeholder="Insira sua senha aqui"
              register={register}
              error={errors.password}
            />
            {passwordIconStatus ? (
              <AiOutlineEye onClick={() => toogleIconPassword("text")} />
            ) : (
              <AiOutlineEyeInvisible onClick={() => toogleIconPassword("password")} />
            )}
          </S.CampPassword>
          <S.CampConfirmPassword>
            <Input
              name={"confirm_password"}
              label={"Confirmar senha"}
              type={typeInput}
              placeholder="Insira sua senha novamente"
              register={register}
              error={errors.password}
            />
            {passwordIconStatus ? (
              <AiOutlineEye onClick={() => toogleIconPassword("text")} />
            ) : (
              <AiOutlineEyeInvisible onClick={() => toogleIconPassword("password")} />
            )}
          </S.CampConfirmPassword>
          <S.CampTypeUser>
            <S.LabelTypeUser>Tipo de usuario</S.LabelTypeUser>
            <S.CampChoiceJob>
              <S.CampContractor>
                <input type="radio" value="true" {...register("radioGroup")}/>
                <span>Contratante</span>
              </S.CampContractor>
              <S.CampCollaborator>
                <input type="radio" value="false" {...register("radioGroup")}/>
                <span>Colaboradora</span>
              </S.CampCollaborator>
            </S.CampChoiceJob>
          </S.CampTypeUser>
          <Button type="submit" variant="primary">
            Cadastrar
          </Button>
        </S.FormRegister>
        <S.CampRedirectLogin>
          <p>Você já possui uma conta? <S.SpanLogin to="/login">faça login aqui</S.SpanLogin></p>
        </S.CampRedirectLogin>
      </FormStructure>
    </S.RegisterStyled>
  )
}
