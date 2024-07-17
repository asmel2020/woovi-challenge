import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Typography } from "@mui/material";
import { parserMoney } from "@/common/utils/parserMoney";
interface Props {
  isCardPay: boolean;
  paymentPix: number;
  creditCardInstallment: number;
  isPaymentPix: boolean;
}
export default function BasicTimeline({
  isCardPay = false,
  paymentPix = 0,
  creditCardInstallment = 0,
  isPaymentPix,
}: Props) {
  return (
    <Timeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot
            variant="outlined"
            sx={{
              borderColor: "#03D69D",
            }}
          />
          {isCardPay ? (
            <TimelineConnector
              sx={{
                background: isPaymentPix ? "#03D69D" : "",
              }}
            />
          ) : (
            <></>
          )}
        </TimelineSeparator>
        <TimelineContent
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Typography fontSize={18} fontWeight={600}>
            1ª entrada no Pix
          </Typography>
          <Typography fontSize={18} fontWeight={800}>
            R$ {parserMoney(paymentPix)}
          </Typography>
        </TimelineContent>
      </TimelineItem>
      {isCardPay ? (
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot
              variant="outlined"
              sx={{
                borderColor: isPaymentPix ? "#03D69D" : "",
              }}
            />
          </TimelineSeparator>
          <TimelineContent
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Typography fontSize={18} fontWeight={600}>
              2ª no cartão
            </Typography>
            <Typography fontSize={18} fontWeight={800}>
              R$ {parserMoney(paymentPix * creditCardInstallment)}
            </Typography>
          </TimelineContent>
        </TimelineItem>
      ) : (
        <></>
      )}
    </Timeline>
  );
}
