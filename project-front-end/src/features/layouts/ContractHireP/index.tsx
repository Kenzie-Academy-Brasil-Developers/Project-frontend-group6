import axios from "axios";
import { api } from "../../services/axios";

import { Button } from "../../../components/buttons";
import { UseRentalContext } from "../../../context/RentalContext";
import { UserContext } from "../../../context/UserContext";
import { ModalProfileHire } from "../ModalProfileHire";
import { ProfileHireStyle } from "./style";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ErrorToast } from "../../libs/toastify";
import { Header } from "../header";
import { Avatar } from "@mui/material";
import { Container } from "../../styles/container";

interface IHiredUser {
  name: string;
  email: string;
  services: [];
  avatar_img: string;
  description: string;
  id: number;
  is_active: string;
  user: {
    contractorId: number;
    contractorName: string;
    avatar_img: string;
  };
  recomendation: string;
}

export const ContractHireP = () => {
  const [hiredUser, setHiredUser] = useState<IHiredUser>({} as IHiredUser);

  const [contractorUser, setContractorUser] = useState<IHiredUser>(
    {} as IHiredUser
  );
  const [proposalsHired, setProposalsHired] = useState([]);

  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const getHiredUser = async () => {
    const token = localStorage.getItem("@rentalToken");
    try {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      const { data } = await api.get(`/users/1`);
      setHiredUser(data);
      setLoading(true);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(error);
      }
    }
  };

  const getDoneProposalsUser = async () => {
    const token = localStorage.getItem("@rentalToken");
    try {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      const { data } = await api.get("/proposals?userId=1&is_active=Concluido");
      setProposalsHired(data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const erro = error.response?.data;
        ErrorToast(erro);
      }
    }
  };

  // const getRecomendationUser = async () => {
  //   const token = localStorage.getItem("@rentalToken");
  //   try {
  //     api.defaults.headers.common.authorization = `Bearer ${token}`;
  //     const { data } = await api.get(`/users`);
  //     setRatinUser(data);
  //   } catch (error) {
  //     if (axios.isAxiosError(error)) {
  //       console.error(error);
  //     }
  //   }
  // };

  const getContractorUser = async () => {
    const token = localStorage.getItem("@rentalToken");
    const userId = localStorage.getItem("@rentalId");
    try {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      const { data } = await api.get(`/users/${userId}`);
      setContractorUser(data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    getDoneProposalsUser();
    getHiredUser();
  }, []);

  return (
    <>
      {loading === false ? (
        <div>Aguarde</div>
      ) : (
        <>
          <Header>
            <Avatar src={hiredUser.avatar_img} />
          </Header>
          <Container>
            <ProfileHireStyle>
              <div className="HeaderContent">
                <div>
                  <Avatar
                    sx={{ width: 250, height: 250 }}
                    src={hiredUser.avatar_img}
                    alt={hiredUser.name}
                  />
                  <h3>{hiredUser.name}</h3>
                </div>
                <div>
                  <p>Competencias</p>
                  <ul>
                    {hiredUser.services.length ? (
                      hiredUser.services.map(
                        (element: string, index: number) => (
                          <li key={index}>
                            <span>{element}</span>
                          </li>
                        )
                      )
                    ) : (
                      <li>
                        <span>Não há competências</span>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
              <div className="boxDescription">
                <p>Descrição</p>
                <div>
                  {hiredUser.description ? (
                    <p>{hiredUser.description}</p>
                  ) : (
                    <h2>Sem descrição</h2>
                  )}
                </div>
              </div>
              <div className="boxRatings">
                <p>Recomendações</p>
                <div>
                  <ul>
                    {proposalsHired.length ? (
                      proposalsHired.map(
                        (element: IHiredUser, index: number) => {
                          if (element.recomendation.length > 0) {
                            return (
                              <li key={index}>
                                <Avatar src={element.user.avatar_img} />
                                <h4>{element.user.contractorName}</h4>
                                <p>{element.recomendation}</p>
                              </li>
                            );
                          } else {
                            return (
                              <h2 key={0}>Não existe nenhuma recomendação</h2>
                            );
                          }
                        }
                      )
                    ) : (
                      <h2>Não existe nenhuma recomendação</h2>
                    )}
                  </ul>
                </div>
              </div>
              <div className="boxButton">
                <Link type="button" to={"/home"}>
                  Voltar
                </Link>
                <Button
                  onClick={() => {
                    getContractorUser();
                    setShowModal(true);
                  }}
                  type="button"
                  variant="terciary"
                >
                  Contratar
                </Button>
              </div>
            </ProfileHireStyle>
          </Container>
          {showModal === true && (
            <ModalProfileHire
              isModal={showModal}
              setIsModal={setShowModal}
              contractor={contractorUser}
              hired={hiredUser}
            />
          )}
        </>
      )}
    </>
  );
};
