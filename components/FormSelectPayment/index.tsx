"use client";
import React, { useState } from "react";
import { FormData, schema } from "./validate";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Button, CircularProgress, RadioGroup } from "@mui/material";
import { CardPix } from "../CardPix";
import { CardGroup } from "../CardGroup";
import {
  GetPayment,
  ValuePix,
} from "@/common/interfaces/getPayment.interfaces";
import { useRouter } from "next/navigation";
import { post } from "@/common/request";
interface Props {
  data: GetPayment;
}

export const FormSelectPayment = ({ data }: Props) => {
  const [disabled, setDisabled] = useState<boolean>(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (formData: FormData) => {
    let name = data.nome || "";
    let amount = data.amount;
    let installment = formData.id;

    const {
      result: { id },
    } = await post({
      url: "/api/payment",
      data: {
        amount,
        name,
        installment,
      },
    });
    router.push(`/payment/paymentpix?paymentId=${id}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={1}
        name="radio-buttons-group"
        className="flex flex-col gap-8"
      >
        {/* Card Pix */}
        <CardPix
          value={data.amount}
          cashback={data.valuePix.pixCashback}
          register={register("id")}
        />

        {/*  CardGroup */}
        <CardGroup
          pixParcelado={data.valuePix.PixParcelado}
          register={register("id")}
        />
      </RadioGroup>
      <Button
        variant="contained"
        sx={{ background: "#133A6F" }}
        type="submit"
        className="w-full"
      >
        {disabled ? <CircularProgress size={20} /> : "Selecione"}
      </Button>
    </form>
  );
};
