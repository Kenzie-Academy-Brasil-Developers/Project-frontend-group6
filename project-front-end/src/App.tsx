import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { RoutesMain } from "./features/routes";
import { GlobalStyle } from "./features/styles/globalStyles";

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <RoutesMain />
        <ToastContainer limit={3} autoClose={2000} />
      </Router>
    </>
  );
}

export default App;
