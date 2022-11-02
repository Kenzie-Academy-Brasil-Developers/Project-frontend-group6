import * as S from "./styles";
import { HTMLInputTypeAttribute, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Input } from "../../../components/inputs/index";
import { Button } from "./../../../components/buttons/index";
import { FormStructure } from "../../layouts/form/index";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormSchemaRegister } from "../../validations/Auth";

type StatePassword = boolean;

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(FormSchemaRegister),
  });

  const [typeInput, setTypeInput] =
    useState<HTMLInputTypeAttribute>("password");
  const [passwordIconStatus, setPasswordIconStatus] =
    useState<StatePassword>(false);

  const toogleIconPassword = () => {
    setPasswordIconStatus((value) => !value);
    typeInput === "password" ? setTypeInput("text") : setTypeInput("password");
  };

  const submitRegister = (data: {}) => {
    console.log(data);
  };

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
            name={"name"}
            label={"Email"}
            type="email"
            placeholder="Insira seu email aqui"
            register={register}
            error={errors.email}
          />

          <S.CampPassword>
            <Input
              name={"name"}
              label={"Senha"}
              type={typeInput}
              placeholder="Insira sua senha aqui"
              register={register}
              error={errors.password}
            />
            {passwordIconStatus ? (
              <AiOutlineEye onClick={toogleIconPassword} />
            ) : (
              <AiOutlineEyeInvisible onClick={toogleIconPassword} />
            )}
          </S.CampPassword>
          <S.CampConfirmPassword>
            <Input
              name={"name"}
              label={"Confirmar senha"}
              type={typeInput}
              placeholder="Insira sua senha novamente"
              register={register}
              error={errors.password}
            />

            {passwordIconStatus ? (
              <AiOutlineEye onClick={toogleIconPassword} />
            ) : (
              <AiOutlineEyeInvisible onClick={toogleIconPassword} />
            )}
          </S.CampConfirmPassword>
          <S.CampTypeUser>
            <S.LabelTypeUser>Tipo de usuario</S.LabelTypeUser>
            <S.CampChoiceJob>
              <S.CampContractor>
                <input type="checkbox" />
                <span>Contratante</span>
              </S.CampContractor>

              <S.CampCollaborator>
                <input type="checkbox" />
                <span>Colaboradora</span>
              </S.CampCollaborator>
            </S.CampChoiceJob>
          </S.CampTypeUser>

          <Button type="submit" variant="primary">
            Cadastrar
          </Button>
        </S.FormRegister>
      </FormStructure>
    </S.RegisterStyled>
  );
};
