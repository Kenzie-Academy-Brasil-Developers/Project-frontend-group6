import { CProfile } from "../../layouts/CProfile";
import { HireProfile } from "../../layouts/HireProfile";
import { Header } from "../../layouts/header";
import { Avatar } from "@mui/material";
import { Container } from "../../styles/container";
import { H2Styled } from "./styles";
import { UserContext } from "../../../context/UserContext";

export const Profile = ({ user }: any) => {
  return (
    <>
      <Header>
        <Avatar src="https://cdn-icons-png.flaticon.com/512/219/219969.png" />
      </Header>
      <Container>
        <H2Styled>Editar Perfil</H2Styled>
        {user.is_hire ? <HireProfile /> : <CProfile />}
      </Container>
    </>
  );
};
