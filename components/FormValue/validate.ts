import * as yup from "yup";

export const schema = yup
  .object({
    amount: yup
      .string()
      .required(),
  })
  .required();

export type FormData = yup.InferType<typeof schema>;
