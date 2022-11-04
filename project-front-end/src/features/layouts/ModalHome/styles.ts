import { Link } from "react-router-dom";
import styled from "styled-components";

export const SecStyled = styled.section`
  width: 870px;
  height: 350px;
  background-color: var(--white-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 2rem;
  position: relative;
  border-radius: 8px;

  & > h2 {
    color: var(--primary-color);
    font-weight: bold;
    font-size: 30px;
  }

  & > button {
    font-size: 20px;
    font-weight: bold;
    width: 45px;
    height: 45px;
    border: 2px solid var(--primary-color);
    border-radius: 8px;
    color: var(--primary-color);
    background-color: var(--white-color);
    position: absolute;
    top: 1rem;
    right: 1rem;
    transition: 0.5s;
    &:hover {
      transition: 0.5s;
      color: var(--white-color);
      background-color: var(--primary-color);
    }
  }
`;

export const LinkStyled = styled(Link)`
  width: 250px;
  height: 60px;
  font-size: 20px;
  font-weight: bold;
  background-color: var(--primary-color);
  color: var(--white-color);
  border: 2px solid transparent;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    transition: 0.5s;
    background-color: transparent;
    border: 2px solid var(--primary-color);
    color: var(--primary-color);
  }
`;
