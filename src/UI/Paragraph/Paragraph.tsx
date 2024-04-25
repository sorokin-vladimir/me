import { FC, PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  className?: string;
}>

export const Paragraph: FC<Props> = function Paragraph({ children, className }) {
  return (
    <p className={`w-full mb-4 text-sm ${className ?? ''}`}>
      {children}
    </p>
  )
}
