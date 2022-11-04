import * as S from "./styles";
import { motion } from "framer-motion";
import { useState } from "react";
import { IChildren } from "../../interfaces/children";
import logo from "/src/assets/logowhite.png";
import { Link } from "react-router-dom";

export const Header = ({ children }: IChildren) => {
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => setIsOn(!isOn);
  return (
    <S.StyledHeader>
      <S.Container>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <S.GoToRegister>
          <div className="switch" data-isOn={isOn} onClick={toggleSwitch}>
            <motion.div className="handle" layout transition={spring} />
          </div>
          {children}
        </S.GoToRegister>
      </S.Container>
    </S.StyledHeader>
  );
};

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};
