import { FC, PropsWithChildren } from "react";

export const Paragraph: FC<PropsWithChildren> = function Paragraph({ children }) {
  return (
    <p className="w-full mb-4 text-sm">
      {children}
    </p>
  )
}
