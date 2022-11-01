import { useContext, createContext } from "react";

interface IUserContext {}

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = () => {};

export const UseUserContext = () => {
  return useContext(UserContext);
};
