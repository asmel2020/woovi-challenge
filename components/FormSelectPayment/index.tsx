"use client";
import React, { useState } from "react";
import { FormData, schema } from "./validate";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Box, Button, CircularProgress, RadioGroup } from "@mui/material";
import { CardPix } from "../CardPix";
import { CardGroup } from "../CardGroup";
import { GetPayment } from "@/common/interfaces/getPayment.interfaces";
import { useRouter } from "next/navigation";
import { post } from "@/common/request";
interface Props {
  data: GetPayment;
}

export const FormSelectPayment = ({ data }: Props) => {
  const [disabled, setDisabled] = useState<boolean>(false);
  const [activeValue, setActiveValue] = useState<number>(1);
  const router = useRouter();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      id: activeValue,
    },
  });
  const onSubmit = async (formData: FormData) => {
    setDisabled(true);
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue={activeValue}
          name="radio-buttons-group"
          sx={{ display: "flex", flexDirection: "column", gap: "32px",width:"100%" }}
          /*  onChange={(e) => ActiveValue(+e.target.value)} */
          value={activeValue}
        >
          {/* Card Pix */}
          <CardPix
            disabled={disabled}
            value={data.amount}
            cashback={data.valuePix.pixCashback}
            register={register("id")}
            activeValue={activeValue}
            setActive={setActiveValue}
          />

          {/*  CardGroup */}
          <CardGroup
            disabled={disabled}
            pixParcelado={data.valuePix.PixParcelado}
            register={register("id")}
            activeValue={activeValue}
            setActive={setActiveValue}
          />
        </RadioGroup>

        <Button
          variant="contained"
          sx={{ fontWeight: 700, width: "100%", margin: "auto" }}
          type="submit"
          disabled={disabled}
        >
          {disabled ? <CircularProgress size={20} /> : "Selecione"}
        </Button>
      </Box>
    </form>
  );
};
