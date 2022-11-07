import StyledDash from "./styles";
import { Link } from "react-router-dom";
import { Button } from "../../../components/buttons";
import { Header } from "../../layouts/header";
import { useEffect, useState } from "react";
import { ModalHome } from "../../layouts/ModalHome";
import { api } from "../../services/axios";
import { Avatar } from "@mui/material";
import { HireDash } from "../../layouts/HireDash";
import { api } from "../../services/axios";
import { Container } from "../../styles/container";


interface IDataWorker {
  id: number;
  avatar_img: string;
  name: string;
  description: string;
}

export const Dashboard = () => {
  const [isModal, setIsModal] = useState(false);
  const [workerData, setWorkerData] = useState<IDataWorker[]>([]);
  const [user, setUser] = useState<any>(null);
  
  useEffect(() => {
    async function loadWorkers() {
      try {
        const { data } = await api.get("/users?is_hired=true");
        setWorkerData(data);
         } catch (error) {
        console.error(error);
      } loadWorkers();
  }, []);
      
    
     useEffect(() => {
    async function getUser() {
      const userId = localStorage.getItem("@rentalId");

      try {
        const { data } = await api.get<any>(`/users/${userId}`);

        setUser(data);
         } catch (error) {
        console.error(error);
      }
    }   getUser();
  }, []);


 
  return (
    <>
      <Header>
          <Avatar src={user?.avatar_img} />
      </Header>
      <StyledDash>
        <div className="topMenu">
          <h2 className="homeTitle">Encontre aqui as opções mais seguras</h2>
          <div className="filterWorker">
            <select id="workerType">
              <option value="" selected disabled hidden>Tipo de serviço</option>
            </select>
            <select id="workerLocation">
              <option value="" selected disabled hidden>Localidade</option>
            </select>
          </div>
        </div>
        <ul>
          {workerData.map((el) => (
            <li key={el.id}>
              <figure>
                <img src={el.avatar_img} alt={el.name} />
              </figure>
              <h2>{el.name}</h2>
              <p>{el.description}</p>
              <Button
                type="button"
                variant="terciary"
                onClick={() => setIsModal(!isModal)}
              >
                Abrir
              </Button>
            </li>
          ))}
        </ul>
      </StyledDash>
    </>
  );
};
