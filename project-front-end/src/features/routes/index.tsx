import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/homePage";
import { LandingPage } from "../pages/landingPage";
import { Login } from "../pages/login";
import { Register } from "../pages/register";

// Alimentar aqui com as rotas prontas..

export const RoutesMain = () => {
  return (
    <>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </>
  );
};
