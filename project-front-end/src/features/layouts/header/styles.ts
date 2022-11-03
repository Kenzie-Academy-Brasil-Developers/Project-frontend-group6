import styled from "styled-components";
import dark from "/src/assets/dark.png";

export const StyledHeader = styled.header`
  background-color: var(--primary-color);
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    width: 8rem;
  }
`;

export const GoToRegister = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  height: 5rem;
  a {
    background-color: var(--white-color);
    color: var(--primary-color);
    border: 2px solid transparent;
    font-weight: bold;
    padding: 0.4rem;
    border-radius: 4px;
    transition: 0.5s;
    :hover {
      transition: 0.5s;
      background-color: transparent;
      border: 2px solid var(--white-color);
      color: var(--white-color);
    }
  }

  .switch {
    width: 3rem;
    height: 1.5rem;
    background: url(${dark}) rgba(255, 255, 255, 0.7) 0.2rem no-repeat;
    background-size: 2.5rem;
    display: flex;
    justify-content: flex-start;
    border-radius: 0.8rem;
    padding: 0.2rem;
    cursor: pointer;
  }

  .switch[data-isOn="true"] {
    justify-content: flex-end;
  }

  .handle {
    width: 1.2rem;
    height: 1.2rem;
    background-color: white;
    border-radius: 0.6rem;
  }
`;
