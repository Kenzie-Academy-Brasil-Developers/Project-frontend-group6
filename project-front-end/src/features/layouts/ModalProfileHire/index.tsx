import * as S from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Button } from "../../../components/Buttons";
import { ModalStyled } from "../../../components/Modal/styles";
import { ModalProfileHireSchema } from "../../validations/Other Validations";

interface ISendPropose {
  title: string;
  description: string;
}

export const ModalProfileHire = ({ isModal, setIsModal }: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISendPropose>({ resolver: yupResolver(ModalProfileHireSchema) });

  const onSubmit = (data: ISendPropose) => {
    console.log(data);
  };

  return (
    <ModalStyled>
      <S.ModalSendPropose>
        <div>
          <h3>Faça uma Proposta</h3>
          <button onClick={() => setIsModal(!isModal)}>X</button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="">Qual trabalho você precisa?</label>
            <input
              {...register("title")}
              placeholder="Ex: Troca de Chuveiro"
              type="text"
            />
            <p>{errors.title?.message}</p>
          </div>
          <div>
            <label htmlFor="">Descrição do trabalho a ser feito</label>
            <textarea
              {...register("description")}
              placeholder="Digite a descrição detalhada"
            />
            <p>{errors.description?.message}</p>
          </div>
          <Button type="submit" variant="primary">
            Faça uma proposta
          </Button>
        </form>
      </S.ModalSendPropose>
    </ModalStyled>
  );
};
