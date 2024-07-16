import { SxProps } from "@mui/system";

const ContainerStyles: SxProps = {
  display: "flex",
  flexDirection: "column",

  width: 469,
  gap: 4,
} as const;
const TitleStyles:SxProps ={
  fontWeight:700,
  fontSize:24
}
export { ContainerStyles,TitleStyles };
