import React from "react";
import { PropsPage } from "@/common/interfaces/PropsPage";
import { get } from "@/common/request";
import { GetPayment } from "@/common/interfaces/getPayment.interfaces";
import { redirect } from "next/navigation";
import { Button, Typography } from "@mui/material";
import {
  ArrowUpIcon,
  ClipCopyIcon,
  GuardIcon,
  LogoGressIcon,
} from "@/components/Svg";
import QRCode from "react-qr-code";
import BasicTimeline from "@/components/TimeL";

interface Props extends Omit<PropsPage, "searchParams"> {
  searchParams: { paymentId: string; parcela: string };
}
export default async function Page({
  searchParams: { parcela, paymentId },
}: Props) {
  const fetchData = async (paymentId: string) => {
    try {
      const result: GetPayment = await get({
        url: `http://localhost:3000/api/payment/${paymentId}`,
      });
      return result;
    } catch (error) {}

    redirect("/");
  };

  const data = await fetchData(paymentId);

  return (
    <main className="flex flex-col max-w-[464px]    w-full pl-4 pr-5 gap-8">
      <section className="m-auto text-center">
        <h2 className="text-2xl font-bold"> João, pague a entrada de</h2>
        <h2 className="text-2xl font-bold"> R$ 15.300,00 pelo Pix</h2>
      </section>

      <section className="flex flex-col items-center gap-5">
        <section className="flex h-80 w-80 border-2 rounded-xl p-2 border-[#03D69D]">
          <QRCode
            size={256}
            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
            value={"value"}
            viewBox={`0 0 256 256`}
          />
        </section>

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
      </section>

      <section className="flex flex-col">
        <section>
          <section className="text-center flex flex-col">
            <Typography color={"#4D4D4D"}>Prazo de pagamento:</Typography>
            <Typography fontWeight={800}>15/12/2021 - 08:17</Typography>
          </section>
        </section>
        <section className="border-b-2">
          <BasicTimeline />
        </section>

        <section className="flex justify-between border-b-2 pt-7 pb-5">
          <Typography>CET: 0,5%</Typography>
          <Typography fontSize={18} fontWeight={800}>
            Total: R$ 30.600,00
          </Typography>
        </section>

        <section className="flex justify-between items-center border-b-2 pt-7 pb-5">
          <Typography fontWeight={800}>Como funciona?</Typography>
          <ArrowUpIcon />
        </section>

        <section>
          <section className="text-center flex flex-col mt-5">
            <Typography fontWeight={600} color={"#4D4D4D"}>
              Identificador:
            </Typography>

            <Typography fontWeight={800}>
              2c1b951f356c4680b13ba1c9fc889c47
            </Typography>
          </section>
        </section>
      </section>

      {/*  <section className="m-auto">
          <h2 className="text-2xl font-bold"> João, como você quer pagar?</h2>
        </section>

        <FormSelectPayment data={data} /> */}
    </main>
  );
}
