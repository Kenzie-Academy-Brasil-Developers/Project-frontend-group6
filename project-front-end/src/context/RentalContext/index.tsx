import { useContext, createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IChildren } from "../../features/interfaces/children";
import { IHiredUser } from "../../features/interfaces/layouts";
import { IHiredProfile } from "../../features/interfaces/profile";
import { api } from "../../features/services/axios";

interface IRentalContext {
  user: IHiredProfile | null;
  hiredUser: IHiredUser;
  setUser: React.Dispatch<React.SetStateAction<IHiredProfile>>;
  setHiredUser: React.Dispatch<React.SetStateAction<IHiredUser>>;
  idUser: string | null;
  tokenUser: string | null;
}

export const RentalContext = createContext<IRentalContext>(
  {} as IRentalContext
);

export const RentalProvider = ({ children }: IChildren) => {
  const navigate = useNavigate();
  const idUser = localStorage.getItem("@rentalId");
  const tokenUser = localStorage.getItem("@rentalToken");

  const [user, setUser] = useState<IHiredProfile>({} as IHiredProfile);
  const [hiredUser, setHiredUser] = useState<IHiredUser>({} as IHiredUser);

  const getUser = async () => {
    try {
      const { data } = await api.get<IHiredProfile>(`/users/${idUser}`);
      setUser(data);
    } catch (error) {
      localStorage.removeItem("@rentalToken");
      localStorage.removeItem("@rentalId");
      navigate("/login");
      console.error(error);
    }
  };

  // const getWorkers = async () => {
  //   try {
  //     const { data } = await api.get("/users?is_hired=true");
  //     return data;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const getProposals = async () => {};

  useEffect(() => {
    getUser();
  }, []);

  return (
    <RentalContext.Provider
      value={{ user, setUser, hiredUser, setHiredUser, idUser, tokenUser }}
    >
      {children}
    </RentalContext.Provider>
  );
};

export const UseRentalContext = () => useContext(RentalContext);
