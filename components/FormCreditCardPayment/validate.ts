import * as yup from "yup";

export const schema = yup
  .object({
    name: yup
      .string()
      .min(3, "mínimo de 3 caracteres")
      .max(30, "máximo de 30 caracteres")
      .required("Campo obrigatório"),
    cpf: yup.string().length(11, "cpf incorreto").required("Campo obrigatório"),
    creditCard: yup
      .string()
      .length(16, "Número do cartão incorreto")
      .required("Campo obrigatório"),
    expireDate: yup
      .string()
      .length(4, "Vencimento incorreto")
      .required("Campo obrigatório"),
    cvv: yup.string().length(3, "cvv incorreto").required("Campo obrigatório"),
    parcelas: yup.number().min(1).required("Campo obrigatório"),
  })
  .required();

export type FormData = yup.InferType<typeof schema>;
