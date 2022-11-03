import StyledHeader from "./styles";
import { motion } from "framer-motion";
import { useState } from "react";

export const Header = () => {
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => setIsOn(!isOn);
  return (
    <StyledHeader>
      <div className="container">
        <img src="../../../../src/assets/logoForm.svg" alt="Logo" />
        <div className="goToRegister">
          <div className="switch" data-isOn={isOn} onClick={toggleSwitch}>
            <motion.div className="handle" layout transition={spring} />
          </div>

          <button>Cadastrar</button>
        </div>
      </div>
    </StyledHeader>
  );
};

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};
