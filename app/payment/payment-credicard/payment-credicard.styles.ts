import { SxProps } from "@mui/system";

const ContainerStyles: SxProps = {
  display: "flex",
  flexDirection: "column",
  margin:"auto",
  width: 469,
  paddingX:3,
  gap: 4,
} as const;
const TitleStyles:SxProps ={
  fontWeight:700,
  fontSize:24
}
export { ContainerStyles,TitleStyles };
