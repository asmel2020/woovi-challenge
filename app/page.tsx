import React from "react";
import { MainData } from "@/common/interfaces/mainData.interfaces";
import { get } from "@/common/request";
import { CardGroupPending } from "@/components/CardGroupPending";
import { FormValue } from "@/components/FormValue";

export default async function Page() {
  const fetchData = async () => {
    try {
      const { result }: MainData = await get({
        url: `/api/data`,
      });
      return result;
    } catch (error) {}
  };

  const data = await fetchData();
  if (!data) return <>Error</>;
  return (
    <main className="flex flex-col min-h-screen gap-16">
      <FormValue />
      <section className=" flex flex-col gap-16">
        <CardGroupPending payment={data.paymentComplete} isComplete={true} />
        <CardGroupPending payment={data.paymentPending} isComplete={false} />
      </section>
    </main>
  );
}
