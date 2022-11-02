import * as yup from "yup";

export const FormSchemaRegister = yup.object({
  name: yup.string().required("Nome Obrigatório"),

  email: yup.string().required("Email obrigatório").email(),

  password: yup
    .string()
    .required("Senha obrigatória")
    .min(8)
    .matches(
      /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/,
      "Senha com no mínimo 8 caracteres. Necessário ter letras, números e ao menos um símbolo"
    ),

  confirm_password: yup
    .string()
    .required("Confirme sua Senha")
    .oneOf([yup.ref("password")], "Senhas precisam ser iguais"),

  checkbox: yup.string().required("Marque uma Opção"),
});

export const FormSchemaLogin = yup.object();
