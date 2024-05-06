import { FC, PropsWithChildren } from "react"
import { Text } from ".."

export const SectionTitle: FC<PropsWithChildren> = ({ children }) => (
  <div className="mt-3 mb-1">
    <Text variant="sectionTitle">
      {children}
    </Text>
    <hr />
  </div>
)
