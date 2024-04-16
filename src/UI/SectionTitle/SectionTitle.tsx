import { FC, PropsWithChildren } from "react"

export const SectionTitle: FC<PropsWithChildren> = ({ children }) => (
  <div className="mt-3 mb-2 text-xl font-medium">
    {children}
    <hr />
  </div>
)
