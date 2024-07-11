import * as yup from "yup";

export const schema = yup.object({
    id: yup.number().required()/* .min(1).max(10).matches(/^[a-z]+$/).required() */,
}).required();

export type FormData = yup.InferType<typeof schema>;