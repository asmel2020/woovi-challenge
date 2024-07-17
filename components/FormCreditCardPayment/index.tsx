"use client";
import React, { useState } from "react";
import { Box, Button, CircularProgress, TextField } from "@mui/material";
import { InputCpf } from "../InputCpf";
import { InputCreditCard } from "../InputCreditCard";
import { InputCVV } from "../InputCVV";
import { InputExpiryDate } from "../InputExpiryDate";
import { InputParcelas } from "../InputParcelas";
import { useForm } from "react-hook-form";
import { FormData, schema } from "./validate";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { FormCreditCArdPaymentProps } from "@/common/interfaces/FormCreditCArdPayment.interfaces";
import { post } from "@/common/request";
import toast, { Toaster } from "react-hot-toast";
import { ModalPixTransfer } from "../ModalPixTransfer";

export const FormCreditCardPayment = ({ data }: FormCreditCArdPaymentProps) => {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(!open);

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

  const onSubmit = async ({
    cpf,
    name,
    creditCard,
    parcelas: installment,
  }: FormData) => {
    let result = {
      paymentId: data.id,
      name,
      cpf,
      last4DigitsCreditCard: creditCard.slice(-4),
      installment,
      amountInstallment: data.parcelas[installment - 1].amount,
    };
    setDisabled(true);
    try {
      await post({
        url: "/api/payment/payment-credicard",
        data: result,
      });
      handleOpen();
      reset();
    } catch (error) {
      toast.error("O pagamento não pode ser processado");
      setDisabled(false);
      return;
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "28px" }}>
        <Toaster />
        <ModalPixTransfer open={open} label="Pagamento processado" />
        <Box sx={{ display: "flex", flexDirection: "column", gap: "28px" }}>
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
        </Box>

        <Box sx={{ display: "flex", gap: "20px" }}>
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
        </Box>
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
          sx={{
            background: "#133A6F",
            borderRadius: 2,
            width: "100%",
            height: "36px",
          }}
          type="submit"
          disabled={disabled}
        >
          {disabled ? <CircularProgress size={20} /> : "Pagar"}
        </Button>
      </Box>
    </form>
  );
};
