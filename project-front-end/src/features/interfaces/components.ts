import { FieldValues } from "react-hook-form";
import { UseFormRegister } from "react-hook-form";
import { ButtonHTMLAttributes, InputHTMLAttributes } from "react";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  type: "button" | "submit" | "reset";
  children: string;

  variant?: "primary" | "secondary" | "terciary" | "quaternary";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  error: any;

  register: UseFormRegister<FieldValues>;
}
