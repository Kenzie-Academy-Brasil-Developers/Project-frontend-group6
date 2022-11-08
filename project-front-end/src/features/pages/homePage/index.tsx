import * as S from "./styles";
import { Link } from "react-router-dom";
import { Button } from "../../../components/Buttons";
import { Header } from "../../layouts/Header";
import { useEffect, useState } from "react";
import { ModalHome } from "../../layouts/ModalHome";
import { api } from "../../services/axios";
import { Footer } from "../../layouts/Footer";
import { Transition } from "../../../components/Transition";

interface IDataWorker {
  id: number;
  avatar_img: string;
  name: string;
  description: string;
}

export const HomePage = () => {
  const [isModal, setIsModal] = useState(false);
  const [workerData, setWorkerData] = useState<IDataWorker[]>([]);

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
      <Transition>
        <S.StyledHome>
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
        </S.StyledHome>
      </Transition>
      <Footer></Footer>

      {isModal && <ModalHome isModal={isModal} setIsModal={setIsModal} />}
    </>
  );
};
