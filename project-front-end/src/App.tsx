import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { RoutesMain } from "./features/routes";
import { GlobalStyle } from "./features/styles/globalStyles";
import "react-toastify/dist/ReactToastify.css";
import "animate.css";
import { AnimatePresence } from "framer-motion";

export const App = () => {
  return (
    <>
      <Router>
        <AnimatePresence exitBeforeEnter>
          <GlobalStyle />
          <RoutesMain />
          <ToastContainer limit={3} autoClose={2000} />
        </AnimatePresence>
      </Router>
    </>
  );
};
