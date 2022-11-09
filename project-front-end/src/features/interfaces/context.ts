import { IRegister } from "./auth";

export interface IUserContext {
  loginUser: (dataUser: IRegister) => Promise<void>;
  submitRegister: (data: IRegister) => void;
  openModal: () => void;
  setUpdate: React.Dispatch<React.SetStateAction<boolean>>;
  modal: boolean;
  update: boolean;
}

export interface IProposals {
  userId: number;
  is_active: string;
  title: string;
  description: string;
  user: {
    avatar_img: URL;
    username: string;
    contact: string;
    id: number;
  };
  id: number;
}
