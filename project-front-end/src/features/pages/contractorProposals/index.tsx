import * as S from "./styles";
import { Header } from "../../layouts/Header";
import { Button } from "../../../components/Buttons/index";
import { Avatar } from "@mui/material";
import { api } from "../../services/axios";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../context/UserContext";
import { ModalContractorProposal } from "../../layouts/ModalContractorProposals";
import { UserDropdown } from "../../../components/UserDropdown";
import { Footer } from "../../layouts/Footer";
import { Transition } from "../../../components/Transition";
import { Container } from "../../styles/container";
import { IProposals } from "../../interfaces/context";
import { UseRentalContext } from "../../../context/RentalContext";

export const ContractorProposals = () => {
  const { idUser } = UseRentalContext();
  const [idProp, setIdProp] = useState<any>();

  const { openModal, modal, setProposals, proposals, update, setUpdate } =
    useContext(UserContext);

  const filterProposals = proposals.filter(
    (elem: any) => elem.user.id == idUser
  );

  useEffect(() => {
    const userProposals = async () => {
      const token = localStorage.getItem("@rentalToken");
      try {
        api.defaults.headers.common.authorization = `Bearer ${token}`;
        const response = await api.get(`/proposals`);
        setProposals(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    userProposals();
  }, []);

  return (
    <>
      <Header>
        <UserDropdown>
          <Avatar src="https://cdn-icons-png.flaticon.com/512/219/219969.png" />
        </UserDropdown>
      </Header>
      {modal && <ModalContractorProposal idProposal={idProp} />}
      <Transition>
        <Container>
          <S.StyledContractorProposals>
            <S.StyledDivTitle>
              <S.StyledTitleContractorProposals>
                Minhas propostas
              </S.StyledTitleContractorProposals>
            </S.StyledDivTitle>

            <S.StyledListContractorProposals>
              {filterProposals.length == 0 && (
                <S.StyledMessage>
                  Você ainda não fez nenhuma proposta.
                </S.StyledMessage>
              )}

              {filterProposals.map((proposal: IProposals) => (
                <S.StyledItemContractorProposals
                  onClick={() => setIdProp(proposal.id)}
                  key={proposal.id}
                >
                  <S.StyledProposalInfos>
                    <S.StyledDivDescription>
                      <S.StyledTitleProposal>
                        {" "}
                        {proposal.title}{" "}
                      </S.StyledTitleProposal>
                      <S.StyledDescriptionProposal>
                        {" "}
                        {proposal.description}{" "}
                      </S.StyledDescriptionProposal>
                    </S.StyledDivDescription>
                    <S.StyledDivStatus>
                      <S.StyledStatusTitle>Status:</S.StyledStatusTitle>
                      <S.StyledStatusActual>
                        {" "}
                        {proposal.is_active}{" "}
                      </S.StyledStatusActual>
                    </S.StyledDivStatus>
                  </S.StyledProposalInfos>

                  {proposal.is_active == "Em andamento" && (
                    <Button
                      type="submit"
                      variant="terciary"
                      onClick={() => {
                        openModal();
                        localStorage.setItem(
                          "@rentalPropId",
                          JSON.stringify(proposal.id)
                        );
                      }}
                    >
                      Concluir
                    </Button>
                  )}
                </S.StyledItemContractorProposals>
              ))}
            </S.StyledListContractorProposals>
          </S.StyledContractorProposals>
        </Container>
      </Transition>
      <Footer />
    </>
  );
};
