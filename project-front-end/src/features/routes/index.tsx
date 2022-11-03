import { Route, Routes } from "react-router-dom";
import { HireProfile } from "../layouts/HireProfile";
import { HomePage } from "../pages/homePage";
import { LandingPage } from "../pages/landingPage";
import { Login } from "../pages/login";
import { Register } from "../pages/register";

// Alimentar aqui com as rotas prontas..

export const RoutesMain = () => {
  return (
    <>
      <Routes>
        <Route />
        <Route path="/profile" element={<HireProfile/>}/>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </>
  );
};
