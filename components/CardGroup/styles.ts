import tw from "tailwind-styled-components";
interface ContainerProps {
  $isHeader: "header" | "body" | "footer";
}
const Container = tw.section<ContainerProps>`
flex
w-full
flex-col
border-[3px]
mix-h-[105px]
px-5
pt-[14px]
pb-5
h-auto
gap-3
${({ $isHeader }) => {
  switch ($isHeader) {
    case "header":
      return "rounded-t-xl";
      break;
    case "body":
      return "border-t-0";
      break;
    case "footer":
      return "border-t-0 rounded-b-xl";
      break;
    default:
      break;
  }
}}
`;

export { Container };
