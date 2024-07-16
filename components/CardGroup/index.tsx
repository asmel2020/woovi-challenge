import React from "react";
import { Tag } from "../Tag";
import { CardBodyStyles,CardBorderStyles} from "./styles";
import { PixParcelado } from "@/common/interfaces/getPayment.interfaces";
import { parserMoney } from "@/common/utils/parserMoney";
import { Box, Card, CardContent, FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";
import { CardContainer } from "../CardContainer";
import { CardStyles } from "../CardGroupPending/styles";


interface Props {
  pixParcelado: PixParcelado[];
  register: any;
  disabled?:boolean
}

export const CardGroup = ({ pixParcelado, register,disabled=false }: Props) => {
  return (
    <section className="text-[#4D4D4D]">
      {pixParcelado.map(
        ({ numberParcela, parcelaAmount, total }, index, arrayd) => {
          let isHeader: "header" | "body" | "footer";
          switch (numberParcela) {
            case 2:
              isHeader = "header";
              break;
            case 7:
              isHeader = "footer";
              break;
            default:
              isHeader = "body";
              break;
          }
          return (
            <CardContainer label="Pix Parcelado" hidden={numberParcela !== 2} key={index}>
               <Card
                variant="outlined"
                sx={{
                  ...(CardBorderStyles[isHeader] as any),
                  ...CardStyles,
                }}
              >
                <CardContent sx={{ ...CardBodyStyles }}>
                  <Box sx={{display:"flex",flexDirection:"column"}}>
                    <Typography sx={{fontWeight:700,fontSize:18}} >
                      {numberParcela}x R$ {parserMoney(parcelaAmount)}
                    </Typography>
                    <Typography sx={{fontWeight:700,fontSize:15,color:"text.secondary"}} >
                      Total: R$ {parserMoney(total)}
                    </Typography>
                  </Box>
                  <FormControlLabel
                    value={index + 2}
                    control={<Radio {...register} value={index + 2} disabled={disabled} />}
                    label={""}
                  />
                </CardContent>
              </Card>
            </CardContainer>
          );
        }
      )}
    </section>
  );
};
