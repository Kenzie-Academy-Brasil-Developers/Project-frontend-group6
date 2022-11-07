export interface IRegister {
  radioGroup?: string;
  confirm_password?: string;
  name?: string;
  email: string;
  password: string;
}

export interface IDataUser extends IRegister {
  avatar_img: string;
  is_hired: boolean;
  location: string;
  contact: string;
  services: [];
}

export interface IAuthResponse {
  data: {
    user: {
      id: number;
    };
    accessToken: string;
  };
}
