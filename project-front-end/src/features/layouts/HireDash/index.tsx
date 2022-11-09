import * as S from "./styles";
import { useEffect, useState } from "react";
import { Loading } from "../../../components/Loading";
import { api } from "../../services/axios";
import { UseRentalContext } from "../../../context/RentalContext";
import { IProposals } from "../../interfaces/context";
import { ModalProposeA } from "../ModalProposeA";

export const HireDash = () => {
  const { idUser, tokenUser } = UseRentalContext();
  const [proposals, setProposals] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal,setShowModal] = useState(false)

  const filterProposals = (status: string) => {
    const filter = proposals.filter(
      (elem: IProposals) => elem.is_active == status
    );
    return filter;
  };

  useEffect(() => {
    const getMyProposals = async () => {
      try {
        api.defaults.headers.common.authorization = `Bearer ${tokenUser}`;
        const { data } = await api.get(`/proposals?userId=${idUser}`);
        setProposals(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    getMyProposals();
  }, []);

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <S.DashStyled>
        <S.ProposalStyled>
          <h2>Propostas</h2>
          <ul>
            {filterProposals("Enviado").length !== 0 ? (
              filterProposals("Enviado").map((elem: any) => (
                <li>
                  <figure>
                    <img src={elem.user.avatar_img} alt={elem.user.username} />
                  </figure>
                  <div>
                    <h3>{elem.title}</h3>
                    <p>{elem.description}</p>
                  </div>
                  <button>Analisar</button>
                </li>
              ))
            ) : (
              <h2 id="textNone">Texto</h2>
            )}
          </ul>
        </S.ProposalStyled>
        <S.FProposalStyled>
          <h2>Trabalhos finalizados</h2>
          <ul>
            {filterProposals("Enviado").length !== 0 ? (
              filterProposals("Concluido").map((elem: any) => (
                <li>
                  <figure>
                    <img src={elem.user.avatar_img} alt={elem.user.username} />
                  </figure>
                  <div>
                    <h3>{elem.title}</h3>
                    <span>{elem.description}</span>
                    <h3>Recomendação:</h3>
                    <p>{elem.recomendation}</p>
                  </div>
                </li>
              ))
            ) : (
              <h2 id="textNone">Texto</h2>
            )}
          </ul>
        </S.FProposalStyled>
        { showModal && <ModalProposeA setShowModal={setShowModal} showModal={showModal}/>}
      </S.DashStyled>
    );
  }
};
