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
    },
  });

  if (!result)
    return new Response(JSON.stringify({ message: "id no existe" }), {
      headers: { "Content-Type": "application/json" },
      status: 404,
    });

  return Response.json({
    result,
  });
}
