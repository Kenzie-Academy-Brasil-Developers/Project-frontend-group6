import { motion } from "framer-motion";
import styled from "styled-components";

export const NavStyled = styled(motion.nav)`
  margin-top: 40px;
  height: 100px;
  width: 120px;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  filter: drop-shadow(1px 1px 1px var(--primary-color));

  .listDropdown {
    display: flex;
    flex-direction: column;
    gap: 10px;
    background: var(--accent);
  }

  .listDropdown li {
    width: 100%;
    color: var(--background);
    display: flex;
    gap: 0.2rem;
    align-items: center;
    justify-content: center;
  }

  .listDropdown,
  li {
    margin: 0;
    padding: 8px;
    width: 100%;
  }

  .listDropdown li span {
    width: 50px;
    font-size: 16px;
    font-family: "Inter", sans-serif;
    font-weight: bold;
    cursor: pointer;
  }

  .divIcon {
    width: 50px;
    height: 50px;
  }

  .divIcon svg {
    width: 90%;
    height: 90%;
    object-fit: contain;
  }

  button {
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border-radius: 10px;
    padding: 10px 20px;
    cursor: pointer;
    width: 100%;
    margin-bottom: 10px;
  }
`;
