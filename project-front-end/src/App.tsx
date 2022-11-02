import { BrowserRouter as Router } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import { RoutesMain } from "./features/routes";
import { GlobalStyle } from "./features/styles/globalStyles";

function App() {
  return (
    <>
      <Router>
        <UserProvider>
          <RoutesMain />
        </UserProvider>
        <GlobalStyle />
      </Router>
    </>
  );
}

export default App;
