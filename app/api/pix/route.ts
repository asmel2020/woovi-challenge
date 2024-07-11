import { validate } from "class-validator";

import { db } from "@/common/db";
import { percentage } from "@/common/utils/percentage";
import { FormatMoney } from "format-money-js";
import { Payment } from "@prisma/client";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const data = await request.json();

  const payment = await db.payment.update({
    where: {
      id: data.id,
      isPaymentPix:false
    },
    data: { isPaymentPix: true },
    select: { id: true },
  });

  return new Response(JSON.stringify({ result: { id: payment.id } }), {
    headers: { "Content-Type": "application/json" },
    status: 202,
  });
}
