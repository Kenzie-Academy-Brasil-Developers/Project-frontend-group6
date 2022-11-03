import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";
import { Button } from "../../../components/buttons";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { CProfileStyled } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

const schema = yup.object({
  name: yup.string().required("O campo de nome é obrigatório"),
  email: yup
    .string()
    .email("Insira um email válido")
    .required("O campo de email é obrigatório"),
  contact: yup.string().required("O campo de contato é obrigatório"),
  gender: yup.string().required("O campo de gênero é obrigatório"),
  location: yup.string().required("O campo de localidade é obrigatório"),
  avatar_img: yup.string().required("O campo de URL da imagem é obrigatório"),
});

interface ICProfile {
  name: string;
  email: string;
  contact: string;
  gender: string;
  location: string;
  avatar_img: string;
  services: string[];
}

export const CProfile = () => {
  const [services, setServices] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICProfile>({ resolver: yupResolver(schema) });

  const onSubmit = (data: ICProfile) => {
    console.log(data);
  };

  return (
    <CProfileStyled>
      <div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/219/219969.png"
          alt=""
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <TextField
            id="standard-basic"
            label="Nome"
            variant="standard"
            color="secondary"
            sx={{
              width: 300,
            }}
            {...register("name")}
          />
          <p>{errors.name?.message}</p>
          <TextField
            id="standard-basic"
            label="Email"
            variant="standard"
            color="secondary"
            sx={{
              width: 300,
            }}
            {...register("email")}
          />
          <p>{errors.email?.message}</p>
          <TextField
            id="standard-basic"
            label="Contato"
            variant="standard"
            color="secondary"
            sx={{
              width: 300,
            }}
            {...register("contact")}
          />
          <p>{errors.contact?.message}</p>
          <TextField
            id="standard-basic"
            label="Gênero que se identifica"
            variant="standard"
            color="secondary"
            sx={{
              width: 300,
            }}
            {...register("gender")}
          />
          <p>{errors.gender?.message}</p>
          <TextField
            id="standard-basic"
            label="Localidade"
            variant="standard"
            color="secondary"
            sx={{
              width: 300,
            }}
            {...register("location")}
          />
          <p>{errors.location?.message}</p>
        </div>
        <div>
          <section>
            <h2>Preferencia de serviços</h2>
            <FormGroup className="checkSec">
              <div className="checkLocale">
                <FormControlLabel
                  control={<Checkbox color="secondary" />}
                  label="Alvenaria"
                />
                <FormControlLabel
                  control={<Checkbox color="secondary" />}
                  label="Marcenaria"
                />
                <FormControlLabel
                  control={<Checkbox color="secondary" />}
                  label="Eletricista"
                />
              </div>
              <div className="checkLocale">
                <FormControlLabel
                  control={<Checkbox color="secondary" />}
                  label="Hidraulico"
                />
                <FormControlLabel
                  control={<Checkbox color="secondary" />}
                  label="Mecanico"
                />
                <FormControlLabel
                  control={<Checkbox color="secondary" />}
                  label="Diarista"
                />
              </div>
            </FormGroup>
          </section>
          <TextField
            id="standard-basic"
            label="URL da imagem de perfil"
            variant="standard"
            color="secondary"
            sx={{
              width: 300,
            }}
            {...register("avatar_img")}
          />
          <p>{errors.avatar_img?.message}</p>
        </div>
        <Button variant="terciary" type="submit">
          Salvar
        </Button>
      </form>
    </CProfileStyled>
  );
};
