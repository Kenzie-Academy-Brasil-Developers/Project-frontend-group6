import { StyledHeader, GoToRegister, Container } from "./styles";
import { motion } from "framer-motion";
import logo from "/src/assets/logowhite.png";
import { useState } from "react";
import { IChildren } from "../../interfaces/children";

export const Header = ({ children }: IChildren) => {
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => setIsOn(!isOn);
  return (
    <StyledHeader>
      <Container>
        <img src={logo} alt="Logo" />
        <GoToRegister>
          <div className="switch" data-isOn={isOn} onClick={toggleSwitch}>
            <motion.div className="handle" layout transition={spring} />
          </div>
          {children}
        </GoToRegister>
      </Container>
    </StyledHeader>
  );
};

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};
