import * as yup from "yup";

export const schema = yup
  .object({
    nome: yup.string().min(3,"mínimo de 3 caracteres").max(10,"máximo de 10 caracteres").required("Campo obrigatório"),
    amount: yup.string().required("Campo obrigatório"),
  })
  .required();

export type FormData = yup.InferType<typeof schema>;
