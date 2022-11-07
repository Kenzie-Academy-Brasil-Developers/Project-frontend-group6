import { useContext, createContext } from "react";
import { IChildren } from "../../features/interfaces/children";

interface IRentalContext {}

export const RentalContext = createContext<IRentalContext>(
  {} as IRentalContext
);

export const RentalProvider = ({ children }: IChildren) => {
  return (
    <RentalContext.Provider value={"oi"}>{children}</RentalContext.Provider>
  );
};

export const UseRentalContext = () => useContext(RentalContext);
