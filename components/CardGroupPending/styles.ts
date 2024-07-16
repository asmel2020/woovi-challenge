import tw from "tailwind-styled-components";

import { SxProps } from "@mui/system";

const commonStyles={
  display:"flex",
  flexDirection:"column"
}
const CardStyles: SxProps = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "auto",
  minHeight: 105,
  borderColor: "grey.900",
} as const;

const CardBodyStyles: SxProps = {
  display: "flex",
  flexDirection:"column",
  justifyContent: "space-between",
  paddingTop: 2,
  paddingBottom: 1,
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

const ButtonStyles:SxProps ={
    fontWeight:700,
    width: "100%",
    marginTop: 2,

} as const
const TextPrimary :SxProps= { fontWeight: 700, fontSize: 18 }
const TextSecondary :SxProps ={ fontWeight: 600, color:"text.secondary" }
export { CardStyles, CardBorderStyles, CardBodyStyles,commonStyles,TextPrimary,TextSecondary,ButtonStyles };
