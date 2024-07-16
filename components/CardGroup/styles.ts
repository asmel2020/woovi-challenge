import { SxProps } from "@mui/material";

const CardStyles: SxProps = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "auto",
  minHeight: 105,
  gap: 12,
  borderColor: "grey.900",
} as const;

const CardBodyStyles: SxProps = {
  display: "flex",
  justifyContent: "space-between",
} as const;

const CardBorderStyles: {
  header: SxProps;
  body: SxProps;
  footer: SxProps;
} = {
  header: {
    border: 3,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  body: {
    border: 0,
    borderLeft: 3,
    borderRight: 3,
    borderBottom: 3,
  },
  footer: {
    border: 3,
    borderTop: 0,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
};

export { CardBodyStyles,CardBorderStyles };
