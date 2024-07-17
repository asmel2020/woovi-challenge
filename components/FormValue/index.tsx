"use client";
import React, { useState } from "react";
import { InputAmountPayment } from "../InputAmountPayment";
import { Box, Button, CircularProgress, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormData, schema } from "./validate";
import { useRouter } from "next/navigation";
import { encode } from "js-base64";
import { post } from "@/common/request";
import toast, { Toaster } from "react-hot-toast";
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

  const [disabled, setDisabled] = useState<boolean>(false);
  const onSubmit = async ({ amount, nome }: FormData) => {
    setDisabled(true);
    const value = +amount.replaceAll(".", "").replaceAll(",", ".");

    if (isNaN(value)) {
      setError("amount", { message: "" });
      setDisabled(false);
      return;
    }

    try {
      router.push(
        `/payment/select-payment?data=${encode(
          JSON.stringify({ amount: value, nome })
        )}`
      );
    } catch (error) {
      setDisabled(false);
      toast.success("Erro ao pagar");
      return;
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          gap: "20px",
          justifyItems: "center",
          paddingX: "10px",
        }}
      >
        <Toaster />
        <TextField
          id="outlined-basic"
          sx={{
            width: "100%",
          }}
          label={"Nome"}
          variant="outlined"
          error={!!errors.nome}
          {...register("nome")}
          helperText={errors.nome?.message}
          disabled={disabled}
        />
        <InputAmountPayment
          register={register("amount")}
          error={!!errors.amount}
          label="Valor que você deseja pagar"
          helperText={errors.amount?.message}
          disabled={disabled}
        />
        <Button
          variant="contained"
          type="submit"
          sx={{
            width: "100%",
            fontWeight: 700,
          }}
          disabled={disabled}
        >
          {" "}
          {disabled ? <CircularProgress size={20} /> : "Pagar"}
        </Button>
      </Box>
    </form>
  );
};
