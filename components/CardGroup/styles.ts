import { SxProps } from "@mui/material";

const CardStyles: SxProps = {
  display: "flex",
  flexDirection: "column",

  height: "auto",
  cursor: "pointer",
  border: 3,
  borderColor: "grey.900",
  padding: "20px",
  gap: "10px",
} as const;

const CardBodyStyles: SxProps = {
  padding: "0px",
  paddingBottom: "0px",
  height: "auto",
  display: "flex",
  justifyContent: "space-between",
  justifyItems: "center",
} as const;

const CardBorderStyles: {
  header: SxProps;
  body: SxProps;
  footer: SxProps;
} = {
  header: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  body: {},
  footer: {
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
};

export { CardBodyStyles, CardBorderStyles, CardStyles };
