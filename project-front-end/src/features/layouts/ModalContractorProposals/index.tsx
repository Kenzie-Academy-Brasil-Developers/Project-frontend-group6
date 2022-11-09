import * as S from "./styles";
import { RiCloseLine } from "react-icons/ri";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../context/UserContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ModalStyled } from "../../../components/Modal/styles";
import { Button } from "../../../components/Buttons/index";
import { toast } from "react-toastify";
import { api } from "../../services/axios";
import { Transition } from "../../../components/Transition";
import { formYup } from "../../validations/Other Validations";
import { IProposals } from "../../interfaces/context";

export const ModalContractorProposal = ({ idProposal }: any) => {
  const [user, setUser] = useState<any>({});
  const { openModal, setUpdate } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IProposals>({ resolver: yupResolver(formYup) });

  const getUser = async () => {
    const idUser = localStorage.getItem("@rentalId");
    try {
      const { data } = await api.get(`/users/${idUser}`);
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const registerSubmit = async (data: IProposals) => {
    setUpdate(true);
    const token = localStorage.getItem("@rentalToken");

    try {
      const body = {
        is_active: "Concluido",
        recomendation: data.description,
        user: {
          avatar_img: user.avatar_img,
          contractorName: user.name,
          contact: user.contact,
          contractorId: user.id,
        },
      };

      api.defaults.headers.common.authorization = `Bearer ${token}`;
      const response = await api.patch(`proposals/${idProposal}`, body);
      toast.success("Avaliação recebida com sucesso!");
    } catch (error) {
      toast.error("Erro ao avaliar!");
      console.log(error);
    } finally {
      setUpdate(false);
      openModal();
    }
  };

  return (
    <Transition>
      <ModalStyled>
        <S.FormRatingStyled onSubmit={handleSubmit(registerSubmit)}>
          <RiCloseLine id="closed" onClick={openModal} />
          <S.TitleRatingStyled>
            Descreva como foi o atendimento da nossa colaboradora:
            <S.TextRatingStyled
              placeholder="Digite aqui..."
              {...register("description")}
            />
          </S.TitleRatingStyled>
          {errors.description?.message}
          <Button type="submit" variant="terciary">
            Enviar
          </Button>
        </S.FormRatingStyled>
      </ModalStyled>
    </Transition>
  );
};
