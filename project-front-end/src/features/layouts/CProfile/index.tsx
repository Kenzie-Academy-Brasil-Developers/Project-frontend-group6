import { TextField } from "@mui/material";
import { CProfileStyled } from "./style";

export const CProfile = () => {
  return (
    <CProfileStyled>
      <div>
        <img src="" alt="" />
      </div>
      <TextField id="standard-basic" label="Standard" variant="standard" />
      <h2>ola</h2>
    </CProfileStyled>
  );
};
