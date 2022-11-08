import * as S from "./styles";
import { Button } from "../../../components/Buttons";
import { api } from "../../services/axios";
import { useEffect, useState } from "react";
import { Autocomplete, Avatar, TextField } from "@mui/material";

interface IDataWorker {
  id: number;
  avatar_img: string;
  name: string;
  description: string;
  location: string;
  services: Array<string>;
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

  const locationsWorkers = workerData.map((el) => el.location);
  const locations = Array.from(new Set(locationsWorkers));
  const servicesWorkers = workerData.map((el) => el.services);
  const services = Array.from(new Set(servicesWorkers));

  return (
    <S.StyledDash>
      <div className="topMenu">
        <h2 className="homeTitle">Encontre aqui as opções mais seguras</h2>
        <div className="filterWorker">          
          <Autocomplete
            options={services}
            sx={{ width: 180 }}
            renderInput={(params) => (
              <TextField {...params} label="Tipo de serviço" />
            )}
          />
          <Autocomplete
            options={locations}
            sx={{ width: 180 }}
            renderInput={(params) => (
              <TextField {...params} label="Localização" />
            )}
          />
        </div>
      </div>
      <ul>
        {workerData.map((el) => (
          <li key={el.id}>
            <Avatar
              sx={{ width: 128, height: 128 }}
              src={el.avatar_img}
              alt={el.name}
            />

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
