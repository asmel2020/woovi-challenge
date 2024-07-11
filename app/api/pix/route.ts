import { validate } from "class-validator";

import { db } from "@/common/db";
import { percentage } from "@/common/utils/percentage";
import { FormatMoney } from "format-money-js";
import { Payment } from "@prisma/client";
import { CreatePaymentPixDTO } from "./dto/CreatePaymentPix.dto";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const { id, installment } = await request.json();
 //validar datos
 let createPaymentPix = new CreatePaymentPixDTO();
 createPaymentPix.id = id;
 createPaymentPix.installment = installment;


 const errors = await validate(createPaymentPix);
 if (errors.length > 0) {
   const result = errors.map(({ property, constraints }) => {
     let errorMessage = Object.keys(constraints as any).map(
       (value) => (constraints as any)[value]
     );
     return {
       property,
       errorMessage,
     };
   });

   return new Response(JSON.stringify({ result }), {
     headers: { "Content-Type": "application/json" },
     status: 404,
   });
 }
  if (installment === 1) {
    const payment = await db.payment.update({
      where: {
        id: id,
        isPaymentPix: false,
      },
      data: {
        isPaymentPix: true,
        isPaymentCredicard: true,
        statusPayment: true,
      },
      select: { id: true },
    });

    return new Response(JSON.stringify({ result: { id: payment.id } }), {
      headers: { "Content-Type": "application/json" },
      status: 202,
    });
  }
  const payment = await db.payment.update({
    where: {
      id: id,
      isPaymentPix: false,
    },
    data: { isPaymentPix: true },
    select: { id: true },
  });

  return new Response(JSON.stringify({ result: { id: payment.id } }), {
    headers: { "Content-Type": "application/json" },
    status: 202,
  });
}
