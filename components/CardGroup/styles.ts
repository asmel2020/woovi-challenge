import { SxProps } from "@mui/material";

const CardStyles: SxProps = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "auto",
  minHeight: 105,
  cursor: "pointer",
  border: 3,
  borderColor: "grey.900",
  padding:2
} as const;

const CardBodyStyles: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  padding:0
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
