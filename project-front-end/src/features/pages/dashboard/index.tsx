import { Header } from "../../layouts/Header";
import { Footer } from "../../layouts/Footer";
import { useEffect, useState } from "react";
import { api } from "../../services/axios";
import { Avatar } from "@mui/material";
import { ModalHome } from "../../layouts/ModalHome";
import { HireDash } from "../../layouts/HireDash";
import { Container } from "../../styles/container";
import { UserDropdown } from "../../../components/UserDropdown";
import { Transition } from "../../../components/Transition";
import { ContractDash } from "../../layouts/ContractDash";

export const Dashboard = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    async function getUser() {
      const userId = localStorage.getItem("@rentalId");

      try {
        const { data } = await api.get<any>(`/users/${userId}`);

        setUser(data);
      } catch (error) {
        console.error(error);
      }
    }
    getUser();
  }, []);

  return (
    <>
      <Header>
        <UserDropdown>
          <Avatar src={user?.avatar_img} />
        </UserDropdown>
      </Header>
      <Transition><ContractDash/></Transition>

      <Footer />
    </>
  );
};
