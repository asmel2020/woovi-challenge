"use client";
import { post } from "@/common/request";
import { Button, CircularProgress } from "@mui/material";
import React, { useState } from "react";
import { ModalPixTransfer } from "../ModalPixTransfer";
import toast, { Toaster } from "react-hot-toast";
interface Props {
  paymentId: string;
  installment: number;
}
export const ButtonPaymentPix = ({ paymentId, installment }: Props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);

  const [disabled, setDisabled] = useState<boolean>(false);
  const handelPayment = async (paymentId: string) => {
    setDisabled(true);
    try {
      await post({
        url: "/api/pix",
        data: {
          id: paymentId,
          installment: installment,
        },
      });
      handleOpen();
      setDisabled(false);
    } catch (error) {
      toast.error("A transferência não pôde ser processada");
    }
    setDisabled(false);
  };
  return (
    <>
      <Toaster />
      <ModalPixTransfer open={open} />{" "}
      <Button
        disabled={disabled}
        variant="contained"
        sx={{ background: "#133A6F" }}
        type="submit"
        className="w-full h-10"
        onClick={() => handelPayment(paymentId)}
      >
        {disabled ? <CircularProgress size={20} /> : "Transfeir"}
      </Button>{" "}
    </>
  );
};
