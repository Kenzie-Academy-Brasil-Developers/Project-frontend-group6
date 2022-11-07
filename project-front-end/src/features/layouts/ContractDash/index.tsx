import * as S from "./styles";
import { Button } from "../../../components/Buttons";
import { api } from "../../services/axios";
import { useEffect, useState } from "react";

interface IDataWorker {
  id: number;
  avatar_img: string;
  name: string;
  description: string;
}

export const ContractDash = () => {
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
    <S.StyledDash>
      <div className="topMenu">
        <h2 className="homeTitle">Encontre aqui as opções mais seguras</h2>
        <div className="filterWorker">
          <select id="workerType">
            <option value="" selected disabled hidden>
              Tipo de serviço
            </option>
          </select>
          <select id="workerLocation">
            <option value="" selected disabled hidden>
              Localidade
            </option>
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
    </S.StyledDash>
  );
};
