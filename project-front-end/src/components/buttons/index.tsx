import { ReactNode } from "react";
import { ButtonStyled } from "./styles";

interface IButton {
  type: "button" | "submit" | "reset" | undefined;
  variant?: "primary" | "secondary" | "terciary" | "quaternary";
  children: ReactNode;

  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export const Button = ({ type, variant, children, onClick }: IButton) => {
  return (
    <ButtonStyled type={type} variant={variant} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
};
