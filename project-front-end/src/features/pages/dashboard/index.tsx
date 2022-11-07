import { Avatar } from "@mui/material";
import { useEffect, useState } from "react";
import { Header } from "../../layouts/Header";
import { HireDash } from "../../layouts/HireDash";
import { api } from "../../services/axios";
import { Container } from "../../styles/container";

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
    <div>
      <Header>
        <Avatar src={user?.avatar_img} />
      </Header>
      <Container>
        <HireDash />
      </Container>
    </div>
  );
};
