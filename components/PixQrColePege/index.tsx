"use client";
import { Box, Button, Card } from "@mui/material";
import React, { useEffect } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { ClipCopyIcon } from "../Svg";
import QRCode from "react-qr-code";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
interface Props {
  id: string;
}
export const PixQrColePege = ({ id }: Props) => {
  const router = useRouter();
  const handelCopy = () => {
    toast.success("Url copiado com sucesso");
  };

  useEffect(() => {
    setTimeout(() => {
      router.refresh();
    }, 10000);
  });

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyItems: "center",
        gap: "20px",
      }}
    >
      <Toaster />
      <Card
        sx={{
          height: 320,
          width: 320,
          border: 3,
          borderRadius: 3,
          padding: 1,
          borderColor: "secondary.main",
        }}
      >
        <QRCode
          size={256}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          value={`${process.env.NEXT_PUBLIC_BASE_URL}/pix?paymentId=${id}`}
          viewBox={`0 0 256 256`}
        />
      </Card>
      <CopyToClipboard
        text={`${process.env.NEXT_PUBLIC_BASE_URL}/pix?paymentId=${id}`}
        onCopy={handelCopy}
      >
        <Button
          variant="contained"
          sx={{
            fontWeight: 700,
            display: "flex",
            gap: 1,
            justifyItems: "center",
            width: "100%",
            textTransform: "none",
          }}
        >
          Clique para copiar QR CODE
          <ClipCopyIcon />
        </Button>
      </CopyToClipboard>
    </Box>
  );
};
