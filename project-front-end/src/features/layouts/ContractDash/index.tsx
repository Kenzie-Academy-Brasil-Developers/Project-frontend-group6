import * as S from "./styles";
import { Button } from "../../../components/Buttons";
import { api } from "../../services/axios";
import { useEffect, useState } from "react";
import { Autocomplete, Avatar, TextField } from "@mui/material";
import { NoWorkers } from "../NoWorkers";

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
  const [fServices, setFServices] = useState<IDataWorker[]>([]);
  const [fLocations, setFLocations] = useState<IDataWorker[]>([]);
  const [optServices, setOptServices] = useState("");
  const [optLocations, setOptLocations] = useState("");
  const [isFiltered, setIsFiltered] = useState(false);

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

  const createCard = (el: any) => (
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
  ); 

  const allWorkers = workerData.map((el) => createCard(el));
  const filteredWorkers = fLocations.map((el) => createCard(el));
  const updatedFilteredList = (service: any, location: any) => {
    const updatedServices = service
      ? workerData.filter(
          (el) => el.services.some((elem) => elem === service) === true
        )
      : workerData;

    const updatedLocations = location
      ? updatedServices.filter((el) => el.location === location)
      : updatedServices;  
    setFLocations(updatedLocations);    
  };

  const locationsWorkers = workerData.map((el) => el.location);
  const locations = Array.from(new Set(locationsWorkers));
  const servicesWorkers = workerData.map((el) => el.services.join(""));
  const services = Array.from(new Set(servicesWorkers));

  return (
    <S.StyledDash>
      <div className="topMenu">
        <h2 className="homeTitle">Encontre aqui as opções mais seguras</h2>
        <div className="filterWorker">
          <Autocomplete
            onChange={(event: any) => {
              setOptServices(event.target.textContent);
              updatedFilteredList(event.target.textContent, optLocations);
              setIsFiltered(true);
            }}
            options={services}
            sx={{ width: 180 }}
            renderInput={(params) => (
              <TextField {...params} label="Tipo de serviço" />
            )}
          />
          <Autocomplete
            onChange={(event: any) => {
              setOptLocations(event.target.textContent);
              updatedFilteredList(optServices, event.target.textContent);
              setIsFiltered(true);
            }}
            options={locations}
            sx={{ width: 180 }}
            renderInput={(params) => (
              <TextField {...params} label="Localização" />
            )}
          />
        </div>
      </div>
      <ul>{!isFiltered ? allWorkers : !fLocations.length ? <NoWorkers/> : filteredWorkers }</ul>
    </S.StyledDash>
  );
};
