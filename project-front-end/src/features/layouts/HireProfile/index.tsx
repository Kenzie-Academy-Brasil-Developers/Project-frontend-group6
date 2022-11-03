import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";
import { Button } from "../../../components/buttons";
import * as S from "./styles";

export const HireProfile = () => {
  return (
    <S.EditProfile>
      <form>
        <div>
          <TextField
            id="secondary"
            color="secondary"
            label="Nome"
            sx={{ width: 300 }}
            variant="standard"
          />
          <TextField
            id="secondary"
            color="secondary"
            label="Email"
            sx={{ width: 300 }}
            variant="standard"
          />
          <TextField
            id="secondary"
            color="secondary"
            label="Contato"
            sx={{ width: 300 }}
            variant="standard"
          />
          <TextField
            id="secondary"
            color="secondary"
            label="Gênero que se identifica"
            sx={{ width: 300 }}
            variant="standard"
          />
          <TextField
            id="secondary"
            color="secondary"
            label="Localidade"
            sx={{ width: 300 }}
            variant="standard"
          />
          <TextField
            id="secondary"
            color="secondary"
            multiline
            rows={5}
            sx={{ width: 300 }}
            label="Descreva suas experiencias"
            variant="standard"
          />
        </div>
        <div className="BoxProfile">
          <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="" />
        </div>
        <div>
          <FormGroup className="GroupCheck">
            <div className="collum1">
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
            <div className="collum2">
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
          <TextField
            id="secondary"
            color="secondary"
            sx={{ width: 300 }}
            label="Url da imagem de perfil"
            variant="standard"
          />
        </div>
        <Button type="submit" variant="terciary">
          Enviar
        </Button>
      </form>
    </S.EditProfile>
  );
};
