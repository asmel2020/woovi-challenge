"use client";
import React, { useState } from "react";
import { Button, CircularProgress, TextField } from "@mui/material";
import { InputCpf } from "../InputCpf";
import { InputCreditCard } from "../InputCreditCard";
import { InputCVV } from "../InputCVV";
import { InputExpiryDate } from "../InputExpiryDate";
import { InputParcelas } from "../InputParcelas";
import { useForm } from "react-hook-form";
import { FormData, schema } from "./validate";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
interface Props {
  data: any;
}
export const FormCreditCardPayment = ({ data }: Props) => {
  const router = useRouter()
  const [disabled, setDisabled] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      parcelas: 1,
    },
  });

  const onSubmit = (formData: FormData) =>  router.push('/')

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-7">
      <section className="flex flex-col gap-7">
        <TextField
          id="outlined-basic"
          label="Nome completo"
          variant="outlined"
          error={!!errors.name}
          {...register("name")}
          helperText={errors.name?.message}
          disabled={disabled}
        />
        <InputCpf
          onChange={(value: string) => {
            setValue("cpf", value);
            clearErrors("cpf");
          }}
          error={!!errors.cpf}
          helperText={errors.cpf?.message}
          disabled={disabled}
        />
        <InputCreditCard
          onChange={(value: string) => {
            setValue("creditCard", value);
            clearErrors("creditCard");
          }}
          error={!!errors.creditCard}
          helperText={errors.creditCard?.message}
          disabled={disabled}
        />
      </section>

      <section className="flex gap-5">
        <InputExpiryDate
          onChange={(value: string) => {
            setValue("expireDate", value);
            clearErrors("expireDate");
          }}
          error={!!errors.expireDate}
          helperText={errors.expireDate?.message}
          disabled={disabled}
        />
        <InputCVV
          onChange={(value: string) => {
            setValue("cvv", value);
            clearErrors("cvv");
          }}
          error={!!errors.cvv}
          helperText={errors.cvv?.message}
          disabled={disabled}
        />
      </section>
      <InputParcelas
        parcelas={data.parcelas}
        error={!!errors.parcelas}
        onChange={(value: number) => {
          setValue("parcelas", value);
          clearErrors("parcelas");
        }}
        disabled={disabled}
      />
      <Button
        variant="contained"
        sx={{ background: "#133A6F", borderRadius: 2 }}
        type="submit"
        className="w-full h-9"
        disabled={disabled}
      >
        {disabled ? <CircularProgress size={20}  /> : "Pagar"}
      </Button>
    </form>
  );
};
