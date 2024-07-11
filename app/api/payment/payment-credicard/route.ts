import { validate } from "class-validator";
import { CreatePaymentDTO } from "../dto/CreatePayment.dto";
import { db } from "@/common/db";
import { percentage } from "@/common/utils/percentage";
import { FormatMoney } from "format-money-js";
import { Payment } from "@prisma/client";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const data: CreatePaymentDTO = await request.json();

  //validar datos
  let createPayment = new CreatePaymentDTO();
  createPayment.amount = data.amount;
  createPayment.name = data.name;
  createPayment.installment = data.installment;

  const errors = await validate(createPayment);
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
  const fm = new FormatMoney({
    separator: "",
    decimals: 2,
  });

  let dataBaseData: Omit<Payment, "id">;
  if (createPayment.installment === 1) {
    dataBaseData = {
      amount: createPayment.amount,
      amountInstallment: createPayment.amount,
      payInstallment: createPayment.amount,
      cashback: +(fm.from(createPayment.amount * 0.03)?.toString() || "0"),
      creditCardInstallment: 0,
      totalInstallment: createPayment.installment,
      installmentPix: 1,
      isPaymentCredicard: true,
      isPaymentPix: false,
      name: createPayment.name,
    };
  } else {
    const payInstallment = +(
      fm
        .from(
          (createPayment.amount +
            createPayment.amount * percentage[createPayment.installment - 2]) /
            createPayment.installment
        )
        ?.toString() || "0"
    );
    const amountInstallment = +(
      fm
        .from(
          createPayment.amount +
            createPayment.amount * percentage[createPayment.installment - 2]
        )
        ?.toString() || "0"
    );

    dataBaseData = {
      amount: createPayment.amount,
      amountInstallment,
      payInstallment,
      cashback: 0,
      totalInstallment: createPayment.installment,
      creditCardInstallment: createPayment.installment - 1,
      installmentPix: 1,
      isPaymentCredicard: false,
      isPaymentPix: false,
      name: createPayment.name,
    };
  }

  const payment = await db.payment.create({
    data: dataBaseData,
    select: { id: true },
  });

  return new Response(JSON.stringify({ result: { id: payment.id } }), {
    headers: { "Content-Type": "application/json" },
    status: 202,
  });
}
