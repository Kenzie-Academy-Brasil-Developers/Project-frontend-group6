import styled, { css } from "styled-components";

interface IProps {
  variant?: "primary" | "secondary" | "terciary" | "quaternary";
}
const typeButton = {
  primary: css`
    width: 100%;
    height: 60px;
    font-size: 24px;

    background-color: var(--primary-color);
    color: var(--white-color);
    border: 2px solid transparent;

    :hover {
      background-color: transparent;
      transition: 0.5s;
      border: 2px solid var(--primary-color);
      color: var(--primary-color);
    }
  `,

  secondary: css`
    width: 50px;
    height: 60px;
    font-size: 20px;

    background-color: var(--white-color);
    color: var(--primary-color);

    :hover {
    }
  `,

  terciary: css`
    width: 40%;
    height: 48px;
    font-size: 24px;

    background-color: var(--primary-color);
    color: var(--white-color);

    :hover {
      background-color: var(--secondary-color);
      transition: 0.5s;
    }
  `,

  quaternary: css`
    width: 50px;
    height: 48px;
    font-size: 16px;

    background-color: var(--white-color);
    color: var(--primary-color);
    :hover {
    }
  `,
};

export const ButtonStyled = styled.button<IProps>`
  border-radius: 8px;
  text-align: center;
  font-weight: bold;
  transition: 0.5s;
  cursor: pointer;
  ${({ variant }) => typeButton[variant || "primary"]};
`;
