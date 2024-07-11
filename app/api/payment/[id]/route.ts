import { db } from "@/common/db";
import { parserMoney } from "@/common/utils/parserMoney";
import { FormatMoney } from "format-money-js";

export const dynamic = "force-dynamic";
export async function GET(
  request: Request,
  { params: { id } }: { params: { id: string } }
) {
  const result = await db.payment.findUnique({
    where: {
      id,
      isPayment: false,
    },
    select: {
      id: true,
      amount: true,
      name: true,
      isPayment: true,
    },
  });

  if (!result)
    return new Response(JSON.stringify({ message: "id no existe" }), {
      headers: { "Content-Type": "application/json" },
      status: 404,
    });
  const percentagem = [0.0033, 0.0039, 0.011, 0.0328, 0.0393, 0.0426];
  const fm = new FormatMoney({
    separator: "",
    decimals: 2,
  });
  let data = {
    pixCashback: +(fm.from(result.amount * 0.03)?.toString() || "0"),

    PixParcelado: percentagem.map((percentagem,index) => {
      return {
        total: +(
          fm.from(result.amount + result.amount * percentagem)?.toString() ||
          "0"
        ),

        parcela: +(fm.from((result.amount + result.amount * percentagem) / (index+2))?.toString() || "0"),
      };
    }),
  };

 
  return Response.json({
    result: {
      ...result,
      valuePix: data,
    },
  });
}
