import { FC, ReactElement, PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  // text?: string;
  className?: string;
  icon?: ReactElement;
}>

export const Field: FC<Props> = ({ icon, children, className }) => {
  if (!children) return null;

  return (
    <div className={`flex ${className || ''}`}>
      {icon && <div className="mr-2">{icon}</div>}
      {children}
    </div>
  )
}
