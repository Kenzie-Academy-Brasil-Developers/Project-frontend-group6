import { Route, Routes } from "react-router-dom";
import { UserProvider } from "../../context/UserContext";
import { ContractHireP } from "../layouts/ContractHireP";
import { Dashboard } from "../pages/dashboard";
import { HomePage } from "../pages/homePage";
import { LandingPage } from "../pages/landingPage";
import { Login } from "../pages/login";
import { Profile } from "../pages/profile";
import { Register } from "../pages/register";

export const RoutesMain = () => {
  return (
    <>
      <UserProvider>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </UserProvider>
    </>
  );
};
