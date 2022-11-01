import { useContext, createContext } from "react";

interface IRentalContext {}

export const RentalContext = createContext<IRentalContext>(
  {} as IRentalContext
);

export const RentalProvider = () => {};

export const UseRentalContext = () => {
  return useContext(RentalContext);
};
