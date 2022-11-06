export interface ICProfile {
  name: string;
  email: string;
  contact?: string;
  gender?: string;
  location?: string;
  avatar_img: string;
  services?: string[];
  is_hired: boolean;
}

export interface IHiredProfile extends ICProfile {
  description?: string;
}
