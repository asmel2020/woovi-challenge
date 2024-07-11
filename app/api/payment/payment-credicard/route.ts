import { validate } from "class-validator";
import { db } from "@/common/db";
import { percentage } from "@/common/utils/percentage";
import { FormatMoney } from "format-money-js";
import { Payment } from "@prisma/client";
import { CreatePaymentCreditCardDTO } from "../dto/CreatePaymentCreditCard.dto";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  let {
    amountInstallment,
    cpf,
    installment,
    last4DigitsCreditCard,
    name,
    paymentId,
  }: CreatePaymentCreditCardDTO = await request.json();

  //validar datos
  let paymentCreditCard = new CreatePaymentCreditCardDTO();

  paymentCreditCard.paymentId = paymentId;
  paymentCreditCard.name = name;
  paymentCreditCard.amountInstallment = amountInstallment;
  paymentCreditCard.installment = installment;
  paymentCreditCard.last4DigitsCreditCard = last4DigitsCreditCard;
  paymentCreditCard.cpf = cpf;

  const errors = await validate(paymentCreditCard);
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

  try {
    const payment = await db.payment.update({
      where: {
        id: paymentCreditCard.paymentId,
        isPaymentPix: true,
      },
      data: {
        isPaymentCredicard: true,
        statusPayment: true,
        creditCardPayment: {
          create: {
            amountInstallment,
            last4DigitsCreditCard,
            cpf,
            installment,
            name,
          },
        },
      },
      select: { id: true },
    });

 
    return new Response(null, {
      headers: { "Content-Type": "application/json" },
      status: 202,
    });
  } catch (error) {
 
    return new Response(null, {
      headers: { "Content-Type": "application/json" },
      status: 404,
    });
  }
}
