import { yupResolver } from "@hookform/resolvers/yup";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../../components/buttons";
import { HireProfileSchema } from "../../validations/Other Validations";
import * as S from "./styles";

interface IHiredProfile {
  name: string;
  email: string;
  contact: string;
  gender: string;
  location: string;
  description: string;
  avatar_img: string;
  services: string[];
}

export const HireProfile = () => {
  const [services,setServices] = useState<string[]>([])

  const limpaCheck = (remove: string) => {
    const filtro = services.filter((elem) => elem != remove);

    setServices(filtro);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IHiredProfile>({ resolver: yupResolver(HireProfileSchema) });

  const onSubmit = (data: IHiredProfile) => {
    data.services = services
    console.log(data);
  };

  return (
    <S.EditProfile>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <TextField
            id="secondary"
            color="secondary"
            label="Nome"
            sx={{ width: 260 }}
            variant="standard"
            {...register("name")}
          />
          <p>{errors.name?.message}</p>
          <TextField
            id="secondary"
            color="secondary"
            label="Email"
            sx={{ width: 260 }}
            variant="standard"
            {...register("email")}
          />
          <p>{errors.email?.message}</p>
          <TextField
            id="secondary"
            color="secondary"
            label="Contato"
            sx={{ width: 260 }}
            variant="standard"
            {...register("contact")}
          />
          <p>{errors.contact?.message}</p>
          <TextField
            id="secondary"
            color="secondary"
            label="Gênero que se identifica"
            sx={{ width: 260 }}
            variant="standard"
            {...register("gender")}
          />
          <p>{errors.gender?.message}</p>
          <TextField
            id="secondary"
            color="secondary"
            label="Localidade"
            sx={{ width: 260 }}
            variant="standard"
            {...register("location")}
          />
          <p>{errors.location?.message}</p>
          <TextField
            id="secondary"
            color="secondary"
            multiline
            rows={5}
            sx={{ width: 260 }}
            label="Descreva suas experiencias"
            variant="standard"
            {...register("description")}
          />
          <p>{errors.description?.message}</p>
        </div>
        <div className="BoxProfile">
          <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="" />
        </div>
        <div>
          <h3>Tipos de serviços</h3>
          <FormGroup className="GroupCheck">
            <div className="collum1">
              <FormControlLabel
                control={<Checkbox color="secondary" onChange={(e) =>
                  e.target.checked
                    ? setServices([...services, "Alvenaria"])
                    : limpaCheck("Alvenaria")
                } />}
                label="Alvenaria"
              />
              <FormControlLabel
                control={<Checkbox color="secondary" onChange={(e) =>
                  e.target.checked
                    ? setServices([...services, "Marcenaria"])
                    : limpaCheck("Marcenaria")
                } />}
                label="Marcenaria"
              />
              <FormControlLabel
                control={<Checkbox color="secondary" onChange={(e) =>
                  e.target.checked
                    ? setServices([...services, "Eletricista"])
                    : limpaCheck("Eletricista")
                }/>}
                label="Eletricista"
              />
            </div>
            <div className="collum2">
              <FormControlLabel
                control={<Checkbox color="secondary" onChange={(e) =>
                  e.target.checked
                    ? setServices([...services, "Hidraulica"])
                    : limpaCheck("Hidraulica")
                }/>}
                label="Hidraulica"
              />
              <FormControlLabel
                control={<Checkbox color="secondary" onChange={(e) =>
                  e.target.checked
                    ? setServices([...services, "Mecanica"])
                    : limpaCheck("Mecanica")
                } />}
                label="Mecanica"
              />
              <FormControlLabel
                control={<Checkbox color="secondary" onChange={(e) =>
                  e.target.checked
                    ? setServices([...services, "Diarista"])
                    : limpaCheck("Diarista")
                }/>}
                label="Diarista"
              />
            </div>
          </FormGroup>
          <TextField
            id="secondary"
            color="secondary"
            sx={{ width: 260 }}
            label="Url da imagem de perfil"
            variant="standard"
            {...register("avatar_img")}
            />
            <p>{errors.avatar_img?.message}</p>
        </div>
        <Button type="submit" variant="terciary">
          Salvar
        </Button>
      </form>
    </S.EditProfile>
  );
};
