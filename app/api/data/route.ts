import { db } from "@/common/db";
import { Payment } from "@prisma/client";

export const dynamic = "force-dynamic";

export async function GET() {
  const paymentFalsePromise = db.payment.findMany({
    where: {
      statusPayment: false,
    },
    select: {
      id: true,
      amount: true,
      amountInstallment: true,
      payInstallment: true,
      cashback: true,
      name: true,
      totalInstallment: true,
      creditCardInstallment: true,
      installmentPix: true,
      isPaymentPix: true,
      isPaymentCredicard: true,
      statusPayment: true,
    },
    orderBy: {
      updatedAt: "desc",
    },
    skip: 0,
    take: 3,
  });

  const paymentTruePromise = db.payment.findMany({
    where: {
      statusPayment: true,
    },
    select: {
      id: true,
      amount: true,
      amountInstallment: true,
      payInstallment: true,
      cashback: true,
      name: true,
      totalInstallment: true,
      creditCardInstallment: true,
      installmentPix: true,
      isPaymentPix: true,
      isPaymentCredicard: true,
      statusPayment: true,
    },
    orderBy: {
      updatedAt: "desc",
    },
    skip: 0,
    take: 3,
  });

  type PaymentType = Omit<
    Payment,
    "createdAt" | "creditCardPayment" | "updatedAt"
  >[];

  const [paymentPending, paymentComplete]: PaymentType[] =
    await db.$transaction([paymentFalsePromise, paymentTruePromise]);

  return new Response(
    JSON.stringify({
      result: {
        paymentPending,
        paymentComplete,
      },
    }),
    {
      headers: { "Content-Type": "application/json" },
      status: 202,
    }
  );
}
