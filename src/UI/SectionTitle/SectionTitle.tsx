import { FC, PropsWithChildren } from "react"
import { Text } from ".."

export const SectionTitle: FC<PropsWithChildren> = ({ children }) => (
  <div className="mt-4 mb-2">
    <Text variant="sectionTitle">
      {children}
    </Text>
    <hr />
  </div>
)
