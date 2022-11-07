import axios from "axios";
import { useContext, createContext, useState } from "react";
import { toast } from "react-toastify";
import { IChildren } from "../../features/interfaces/children";
import { api } from "../../features/services/axios";

interface IRentalContext {
  teste: number;
}

export const RentalContext = createContext<IRentalContext>(
  {} as IRentalContext
);

export const RentalProvider = ({ children }: IChildren) => {
  const teste = 0;

  return (
    <RentalContext.Provider value={{ teste }}>
      {children}
    </RentalContext.Provider>
  );
};

export const UseRentalContext = () => useContext(RentalContext);
