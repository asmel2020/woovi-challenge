import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Typography } from "@mui/material";

export default function BasicTimeline() {
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
          <TimelineConnector
            sx={{
              background: "#03D69D",
            }}
          />
        </TimelineSeparator>
        <TimelineContent className=" flex justify-between w-full">
          <Typography fontSize={18} fontWeight={600}>
            1ª entrada no Pix
          </Typography>
          <Typography fontSize={18} fontWeight={800}>
            R$ 15.300,00
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot
            variant="outlined"
            sx={{
              borderColor: "#03D69D",
            }}
          />
        </TimelineSeparator>
        <TimelineContent className=" flex justify-between w-full">
          <Typography fontSize={18} fontWeight={600}>
            2ª no cartão
          </Typography>
          <Typography fontSize={18} fontWeight={800}>
            R$ 15.300,00
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
