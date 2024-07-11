import { validate } from "class-validator";
import { CreatePaymentDTO } from "./dto/CreatePayment.dto";
import { db } from "@/common/db";

export const dynamic = "force-dynamic";
export async function POST(request: Request) {
  const data: CreatePaymentDTO = await request.json();
  //validar datos
  let createPayment = new CreatePaymentDTO();
  createPayment.amount = data.amount;
  createPayment.name = data.name;
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

  const payment = await db.payment.create({ data, select: { id: true } });

  return new Response(JSON.stringify({ result: { id: payment.id } }), {
    headers: { "Content-Type": "application/json" },
    status: 202,
  });
}

export async function GET() {
  /*   const res = await fetch('https://data.mongodb-api.com/...', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'API-Key': process.env.DATA_API_KEY!,
        },
        body: JSON.stringify({ time: new Date().toISOString() }),
      })
     
      const data = await res.json() */

  return Response.json({ data: "hola" });
}
