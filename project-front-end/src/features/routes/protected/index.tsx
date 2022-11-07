import { Route } from "react-router-dom";
import { RentalProvider } from "../../../context/RentalContext";
import { Dashboard } from "../../pages/dashboard";
import { Profile } from "../../pages/profile";

export const ProtectedRoutes = () => {
  return (
    <RentalProvider>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
    </RentalProvider>
  );
};
