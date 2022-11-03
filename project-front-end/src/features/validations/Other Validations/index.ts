import * as yup from "yup";

export const CProfileSchema = yup.object({
  name: yup.string().required("O campo de nome é obrigatório"),
  email: yup
    .string()
    .email("Insira um email válido")
    .required("O campo de email é obrigatório"),
  contact: yup.string().required("O campo de contato é obrigatório"),
  gender: yup.string().required("O campo de gênero é obrigatório"),
  location: yup.string().required("O campo de localidade é obrigatório"),
  avatar_img: yup.string().required("O campo de URL da imagem é obrigatório"),
});
