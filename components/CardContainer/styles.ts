import tw from "tailwind-styled-components";
interface ContainerProps {
  $isHidden: boolean;
}

const IconTag = tw.span<ContainerProps>`
${({$isHidden})=>$isHidden?"hidden":""}
absolute -top-3 left-5 h-7 w-auto px-5 bg-[#E5E5E5] rounded-full text-center text-lg font-bold
`

export {
    IconTag
}