import { BrowserRouter as Router } from "react-router-dom";
import { RoutesMain } from "./features/routes";

import { GlobalStyle } from "./features/styles/globalStyles";

function App() {
  return (
    <>
      <Router>
        <RoutesMain />
        <GlobalStyle />
      </Router>
    </>
  );
}

export default App;
