import { yupResolver } from "@hookform/resolvers/yup";
import axios, { AxiosError } from "axios";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Button } from "../../../components/buttons";
import { ModalStyled } from "../../../components/Modal/styles";
import { UserContext } from "../../../context/UserContext";
import { ErrorToast, SucessToast } from "../../libs/toastify";
import { api } from "../../services/axios";
import { ModalProfileHireSchema } from "../../validations/Other Validations";
import { ModalSendPropose } from "./style";

interface ISendPropose {
  title: string;
  description: string;
  userId: number;
  is_active: string;
  user: {
    avatar_img: string;
    contractorName: string;
    contact: string;
    contractorId: number;
  };
}

export const ModalProfileHire = ({
  isModal,
  setIsModal,
  contractor,
  hired,
}: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISendPropose>({ resolver: yupResolver(ModalProfileHireSchema) });

  const getProposals = async (proposal: ISendPropose) => {
    const token = localStorage.getItem("@rentalToken");
    try {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      const { data } = await api.post("proposals", proposal);
      SucessToast("Proposta enviada com sucesso");
      setIsModal(!isModal);
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error);
        ErrorToast("Não foi possível enviar sua proposta");
      }
    }
  };

  const onSubmit = (data: ISendPropose) => {
    const proposal = {
      userId: hired.id,
      is_active: "Enviado",
      title: data.title,
      description: data.description,
      user: {
        avatar_img: contractor.avatar_img,
        contractorName: contractor.name,
        contact: contractor.contact,
        contractorId: contractor.id,
      },
    };
    getProposals(proposal);
  };

  return (
    <ModalStyled>
      <ModalSendPropose>
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
      </ModalSendPropose>
    </ModalStyled>
  );
};
