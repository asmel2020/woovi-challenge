import React from "react";
import { Tag } from "../Tag";
import { CardBodyStyles, CardBorderStyles, CardStyles } from "./styles";
import { PixParcelado } from "@/common/interfaces/getPayment.interfaces";
import { parserMoney } from "@/common/utils/parserMoney";
import {
  Box,
  Card,
  CardContent,
  FormControlLabel,
  Radio,
  Typography,
} from "@mui/material";
import { CardContainer } from "../CardContainer";

interface Props {
  pixParcelado: PixParcelado[];
  register: any;
  disabled?: boolean;
  activeValue: number;
  setActive: any;
}

export const CardGroup = ({
  pixParcelado,
  register,
  disabled = false,
  setActive,
  activeValue,
}: Props) => {
  return (
    <Box>
      {pixParcelado.map(
        ({ numberParcela, parcelaAmount, total }, index, arrayd) => {
          let isHeader: "header" | "footer" | "body";
          switch (numberParcela) {
            case 2:
              isHeader = "header";
              break;
            case arrayd.length + 1:
              isHeader = "footer";
              break;
            default:
              isHeader = "body";
              break;
          }

          return (
            <CardContainer
              label="Pix Parcelado"
              hidden={numberParcela !== 2}
              key={index}
            >
              <Card
                onClick={() => setActive(index + 2)}
                variant="outlined"
                sx={{
                  ...(CardBorderStyles[isHeader] as any),
                  ...CardStyles,

                  borderColor:
                    activeValue === index + 2 ? "secondary.main" : "grey.900",

                  "&:hover": {
                    border: 3,
                    borderColor: "secondary.main",

                    "& .MuiSvgIcon-root": {
                      color: "secondary.main",
                    },
                    "& .MuiButtonBase-root": {
                      backgroundColor:
                        activeValue === index + 2 ? "" : "#133a6f0a",
                    },
                  },
                }}
              >
                <CardContent sx={{ ...CardBodyStyles }}>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography sx={{ fontWeight: 700, fontSize: 18 }}>
                      {numberParcela}x R$ {parserMoney(parcelaAmount)}
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: 700,
                        fontSize: 15,
                        color: "text.secondary",
                      }}
                    >
                      Total: R$ {parserMoney(total)}
                    </Typography>
                  </Box>
                  <FormControlLabel
                    value={index + 2}
                    control={
                      <Radio
                        {...register}
                        value={index + 2}
                        disabled={disabled}
                      />
                    }
                    label={""}
                  />
                </CardContent>
                {index === 2 && (
                  <Tag
                    title={`-3% de juros: `}
                    subTitle="Melhor opção de parcelamento"
                  />
                )}
              </Card>
              
            </CardContainer>
          );
        }
      )}
    </Box>
  );
};
