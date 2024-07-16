import React from "react";

import { PropsPage } from "@/common/interfaces/PropsPage";

import { Box, Container } from "@mui/material";
import { redirect } from "next/navigation";

import { get } from "@/common/request";

import { MainData } from "@/common/interfaces/mainData.interfaces";
import { FormValue } from "@/components/FormValue";
import { CardGroupPending } from "@/components/CardGroupPending";
import { ContainerStyles } from "./home.styles";



interface Props extends Omit<PropsPage, "searchParams"> {
  searchParams: { paymentId: string };
}

export default async function Page({ searchParams: { paymentId } }: Props) {
  const fetchData = async () => {
    'use server'
    try {
      const { result }: MainData = await get({
        url: `/api/data`,
      });
      return result;
    } catch (error) {}
    redirect("/");
  };

  const data = await fetchData();
  
  return (
    <Container sx={ContainerStyles}>
      <FormValue />
      <Box sx={{display:"flex",flexDirection:"column",width:"100%" , gap:8}}>
        <CardGroupPending payment={data.paymentComplete} isComplete={true} />
        <CardGroupPending payment={data.paymentPending} isComplete={false} />
      </Box>
    </Container>
  );
}
