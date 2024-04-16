import { FC } from "react";

type Props = {
  year: string;
  className?: string;
  yearStart?: string;
}

export const Years: FC<Props> = ({ year, className, yearStart }) => {
  const years = Math.ceil(Math.abs((yearStart ? new Date(yearStart) : new Date()).getTime() - (new Date(year)).getTime()) / (1000 * 60 * 60 * 24 * 365));

  return (
    <span className={'text-slate-600 ' + (className || '')}>
      ({years} year{years > 1 ? 's' : ''})
    </span>
  )
}
