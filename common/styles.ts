import { SxProps } from "@mui/material";

export const ContainerStyles: SxProps = {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    width: {
      md: "469px",
    },
    paddingX:'8px',
    gap: 4,
  } as const;