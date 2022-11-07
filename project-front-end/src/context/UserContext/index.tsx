import { useContext, createContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  IAuthResponse,
  IDataUser,
  IRegister,
} from "../../features/interfaces/auth";
import { IChildren } from "../../features/interfaces/children";
import { api } from "../../features/services/axios";

interface IUserContext {
  loginUser: (dataUser: IRegister) => Promise<void>;
  submitRegister: (data: IRegister) => void;
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: IChildren) => {
  const navigate = useNavigate();

  const loginUser = async (dataUser: IRegister) => {
    try {
      const {
        data: {
          accessToken,
          user: { id },
        },
      }: IAuthResponse = await api.post("/login", dataUser);
      localStorage.setItem("@rentalToken", accessToken);
      localStorage.setItem("@rentalId", JSON.stringify(id));
      navigate("/dashboard");
    } catch (err) {
      console.log(err);
    }
  };

  const registerUser = async (dataUser: IDataUser) => {
    try {
      const {
        data: {
          accessToken,
          user: { id },
        },
      }: IAuthResponse = await api.post("/register", dataUser);
      localStorage.setItem("@rentalToken", accessToken);
      localStorage.setItem("@rentalId", JSON.stringify(id));
      navigate("/profile");
    } catch (err) {
      console.log(err);
    }
  };

  const submitRegister = (data: IRegister) => {
    const { name, email, password, radioGroup } = data;
    const dataUser: IDataUser = {
      avatar_img: "https://cdn-icons-png.flaticon.com/512/219/219969.png",
      name: name,
      email: email,
      password: password,
      is_hired: radioGroup === "true" ? true : false,
      location: "",
      contact: "",
      services: [],
    };
    registerUser(dataUser);
  };

  return (
    <UserContext.Provider value={{ submitRegister, loginUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const UseUserContext = () => useContext(UserContext);
