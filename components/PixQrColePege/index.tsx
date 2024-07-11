"use client";
import { Button } from "@mui/material";
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
    <section className="flex flex-col items-center gap-5">
      <Toaster />
      <section className="flex h-80 w-80 border-2 rounded-xl p-2 border-[#03D69D]">
        <QRCode
          size={256}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          value={`${process.env.NEXT_PUBLIC_BASE_URL}/pix?paymentId=${id}`}
          viewBox={`0 0 256 256`}
        />
      </section>
      <CopyToClipboard
        text={`${process.env.NEXT_PUBLIC_BASE_URL}/pix?paymentId=${id}`}
        onCopy={handelCopy}
      >
        <Button
          variant="contained"
          sx={{
            background: "#133A6F",
          }}
          className="w-full flex gap-3 items-center"
        >
          <span className="capitalize">Clique para copiar QR CODE</span>{" "}
          <ClipCopyIcon />
        </Button>
      </CopyToClipboard>
    </section>
  );
};
