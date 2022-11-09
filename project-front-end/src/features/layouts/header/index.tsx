import * as S from "./styles";
import logo from "/src/assets/logoWhite.svg";
import { motion } from "framer-motion";
import { useState } from "react";
import { IChildren } from "../../interfaces/children";
import { Link } from "react-router-dom";

export const Header = ({ children }: IChildren) => {
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => setIsOn(!isOn);

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  return (
    <S.StyledHeader>
      <S.Container>
        <Link to="/dashboard">
          <img src={logo} alt="Logo" />
        </Link>
        <S.DivSecundaria>
          <motion.div
            className="switch"
            data-ison={isOn}
            onClick={toggleSwitch}
          >
            <motion.div className="handle" layout transition={spring} />
          </motion.div>
          {children}
        </S.DivSecundaria>
      </S.Container>
    </S.StyledHeader>
  );
};
