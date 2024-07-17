import React from "react";
import { Tag } from "../Tag";
import { FormatMoney } from "format-money-js";
import { parserMoney } from "@/common/utils/parserMoney";
import { CardContainer } from "../CardContainer";
import { Box, FormControlLabel, Radio, Typography } from "@mui/material";
import { CardStyles } from "./styles";
interface Props {
  value: number;
  cashback: number;
  register: any;
  disabled?: boolean;
  activeValue: number;
  setActive: any;
}
export const CardPix = ({
  value,
  cashback,
  register,
  disabled = false,
  activeValue,
  setActive,
}: Props) => {
  return (
    <CardContainer label="Pix">
      <Box
        onClick={() => setActive(1)}
        sx={{
          ...CardStyles,
          borderColor: activeValue === 1 ? "secondary.main" : "grey.900",
          "&:hover": {
            borderColor: activeValue === 1 ? "" : "secondary.main",
            // Cambia este valor al color que desees
            "& .MuiSvgIcon-root": {
              color: "secondary.main", // Cambia este valor al color que desees
            },
            "& .MuiButtonBase-root": {
              backgroundColor: activeValue === 1 ? "" : "#133a6f0a",
            },
          },
        }}
 
      >
        <Box
          sx={{ display: "flex", justifyContent: "space-between" }}
    
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ fontWeight: 700, fontSize: 18 }}>
              1x R$ {parserMoney(value)}
            </Typography>
            <Typography sx={{ fontWeight: 600, color: "secondary.main" }}>
              Ganhe 3% de Cashback
            </Typography>
          </Box>
          <FormControlLabel
            value={1}
            control={
              <Radio
                {...register}
                checked={activeValue === 1}
                value={1}
                disabled={disabled}
              />
            }
            label={""}
          />
        </Box>
        <Tag
          title={`🤑 R$ ${parserMoney(cashback)}`}
          subTitle="de volta no seu Pix na hora"
        />
      </Box>
    </CardContainer>
  );
};
