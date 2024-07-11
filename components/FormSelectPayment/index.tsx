"use client";
import React from "react";
import { FormData, schema } from "./validate";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Button, RadioGroup } from "@mui/material";
import { CardPix } from "../CardPix";
import { CardGroup } from "../CardGroup";
import { GetPayment } from "@/common/interfaces/getPayment.interfaces";
import { useRouter } from "next/navigation";
interface Props {
  data: GetPayment;
  paymentId:string
}

export const FormSelectPayment = ({ data,paymentId }: Props) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: FormData) => {
    router.push(`/payment/paymentpix?parcela=${data.id}&paymentId=${paymentId}`);
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
          value={data.result.amount}
          cashback={data.result.valuePix.pixCashback}
          register={register("id")}
        />

        {/*  CardGroup */}
        <CardGroup
          pixParcelado={data.result.valuePix.PixParcelado}
          register={register("id")}
        />
      </RadioGroup>
      <Button
        variant="contained"
        sx={{background:"#133A6F"}}
        type="submit"
        className="w-full"
      >
        Selecione
      </Button>
    </form>
  );
};
