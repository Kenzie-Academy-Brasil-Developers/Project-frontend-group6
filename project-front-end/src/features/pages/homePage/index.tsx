import StyledHome from "./styles";
import { Link } from "react-router-dom";
import { Button } from "../../../components/buttons";
import { Header } from "../../layouts/header";
import { useEffect, useState } from "react";
import { ModalHome } from "../../layouts/ModalHome";
import { api } from "../../services/axios";

interface IDataWorker {
  id: number;
  avatar_img: string;
  name: string;
  description: string;
}

export const HomePage = () => {
  const [isModal, setIsModal] = useState(false);
  const [workerData, setWorkerData] = useState<IDataWorker[]>([])
  useEffect(() => {
    async function loadWorkers() {
      try {
        const { data } = await api.get("/users?is_hired=true");
        setWorkerData(data);
      } catch (error) {
        console.error(error);
      }
    }

    loadWorkers();
  }, []);
  return (
    <>
      <Header>
        <Link to="/register">Cadastrar</Link>
      </Header>
      <StyledHome>
        <h2 className="homeTitle">Encontre aqui as opções mais seguras</h2>
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
       
      </StyledHome>

      {isModal && <ModalHome isModal={isModal} setIsModal={setIsModal} />}
    </>
  );
};
