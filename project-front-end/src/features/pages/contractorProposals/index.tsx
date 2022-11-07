import { IChildren } from "../../interfaces/children";
import { Header } from "../../layouts/header";
import * as S from "./styles";
import { Button } from "./../../../components/buttons/index"
import { Avatar } from "@mui/material";
import { api } from "../../services/axios";
import { useContext, useEffect, useState } from "react";
import { UrlHistory } from "@remix-run/router/dist/history";
import { UserContext } from "../../../context/UserContext";
import { ModalContractorProposal } from "./modalContractorProposals";


export const ContractorProposals = () => {
  const [idProp, setIdProp] = useState<any>()

  const {
    openModal,
    modal,
    setProposals, proposals, update, setUpdate
} = useContext(UserContext);

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

      const userId = localStorage.getItem("@rentalId")
      const filterProposals = proposals.filter((elem: any) => elem.user.id == userId)
      
  return (
    <>
    <Header>
      <Avatar src="https://cdn-icons-png.flaticon.com/512/219/219969.png" />
    </Header>
    {modal && <ModalContractorProposal idProposal={idProp} />}
    <S.StyledContractorProposals>
      <S.StyledDivTitle>
        <S.StyledTitleContractorProposals>Minhas propostas</S.StyledTitleContractorProposals>
      </S.StyledDivTitle>

      <S.StyledListContractorProposals>
        {filterProposals.map((proposal) => (
          <S.StyledItemContractorProposals onClick={() => setIdProp(proposal.id)} key={proposal.id}>
          <S.StyledProposalInfos>
          <S.StyledDivDescription>
            <S.StyledTitleProposal> {proposal.title} </S.StyledTitleProposal>
            <S.StyledDescriptionProposal> { proposal.description} </S.StyledDescriptionProposal>
          </S.StyledDivDescription>
          <S.StyledDivStatus>
            <S.StyledStatusTitle>Status:</S.StyledStatusTitle>
            <S.StyledStatusActual> {proposal.is_active} </S.StyledStatusActual>
          </S.StyledDivStatus>
          </S.StyledProposalInfos>

          {proposal.is_active == "Em andamento" &&
          <Button type="submit" variant="terciary" onClick={() => 
            {openModal()
            localStorage.setItem("@rentalPropId", JSON.stringify(proposal.id))
          }}>Concluir</Button>
        }
        </S.StyledItemContractorProposals>

        ))}

      </S.StyledListContractorProposals>
    </S.StyledContractorProposals>
    </>
  );
};
