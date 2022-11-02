import { Input } from "../../../components/inputs/index";
import { Button } from "./../../../components/buttons/index";
import { FormStructure } from "../../layouts/form";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormSchemaLogin } from "../../validations/Auth";
import * as S from './styles'

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(FormSchemaLogin),
  })

  return (
    <S.LoginStyled>
      <FormStructure title={"Faça seu Login"} maxWidth={450}>
        <S.FormLogin>
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
          <Button type="submit" variant="primary">Entrar</Button>
        </S.FormLogin>
        <S.CampRedirectRegister>
          <p>Ainda não possui conta? <S.SpanRegister to="/register">registro aqui</S.SpanRegister></p>
        </S.CampRedirectRegister>
      </FormStructure>
    </S.LoginStyled>
  )
};
