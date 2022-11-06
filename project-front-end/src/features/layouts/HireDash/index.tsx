import { useEffect, useState } from "react";
import { Loading } from "../../../components/Loading";
import { api } from "../../services/axios";
import { DashStyled, FProposalStyled, ProposalStyled } from "./style";

export const HireDash = () => {
  const [proposals, setProposals] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);

  console.log(proposals);

  const filterProposals = (status: string) => {
    const filter = proposals.filter((elem: any) => elem.is_active == status);
    return filter;
  };

  useEffect(() => {
    const getMyProposals = async () => {
      const userId = localStorage.getItem("@rentalId");
      const token = localStorage.getItem("@rentalToken");

      try {
        api.defaults.headers.common.authorization = `Bearer ${token}`;

        const { data } = await api.get(`/proposals?userId=${userId}`);
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
      <DashStyled>
        <ProposalStyled>
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
              <h2>Texto</h2>
            )}
          </ul>
        </ProposalStyled>
        <FProposalStyled>
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
              <h2>Texto</h2>
            )}
          </ul>
        </FProposalStyled>
      </DashStyled>
    );
  }
};
