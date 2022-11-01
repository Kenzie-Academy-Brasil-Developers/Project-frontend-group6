import { ReactNode } from "react";
import { InputStyled } from "./styles";

interface IInput {
  children: ReactNode;
}

export const Input = ({ children }: IInput) => {
  return <InputStyled>{children}</InputStyled>;
};
