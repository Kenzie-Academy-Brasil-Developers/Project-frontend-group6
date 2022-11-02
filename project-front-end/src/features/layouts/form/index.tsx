import { IChildren } from "../../interfaces/children";
import { FormStyled, FormTop, ImgLogo } from "./styles";
import logo from "../../../assets/logoForm.svg";

interface IForm extends IChildren {
  title: string;
}

export const FormStructure = ({ title, children }: IForm) => {
  return (
    <FormStyled>
      <FormTop>
        <ImgLogo>
          <img src={logo} alt="logo" />
        </ImgLogo>
        <h2>{title}</h2>
      </FormTop>
      {children}
    </FormStyled>
  );
};
