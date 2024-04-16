import { FC, PropsWithChildren } from "react"

export const SectionTitle: FC<PropsWithChildren> = ({ children }) => (
  <div className="mt-6 mb-4 text-xl">
    {children}
    <hr />
  </div>
)
