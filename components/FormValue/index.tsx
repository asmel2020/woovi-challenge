"use client";
import React from "react";
import { InputAmountPayment } from "../InputAmountPayment";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormData, schema } from "./validate";
import { useRouter } from "next/navigation";
import { encode } from "js-base64";
import { post } from "@/common/request";
export const FormValue = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    clearErrors,
    setError,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    const amount = +data.amount.replaceAll(".", "").replaceAll(",", ".");

    if (isNaN(amount)) {
      setError("amount", { message: "d" });
      return;
    }

    try {
     /*  const {
        result: { id },
      } = await post({
        url: "/api/payment",
        data: {
          amount,
          name: "hola",
        },
      }); */
      reset();
      router.push(`/payment/select-payment?amount=${encode(JSON.stringify({amount}))}`);
    } catch (error) {
      setError("amount", { message: "d" });
      return;
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" flex flex-col items-center justify-center w-full gap-5"
    >
      <InputAmountPayment
        register={register("amount")}
        error={!!errors.amount}
        label="Valor que você deseja pagar"
      />
      <Button variant="contained" type="submit" sx={{ background: "#133A6F" }}>
        Pagar
      </Button>
    </form>
  );
};
