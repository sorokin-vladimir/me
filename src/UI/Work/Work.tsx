import { FC, PropsWithChildren } from "react"
import { Years } from "..";

type Props = PropsWithChildren<{
  role: string;
  company: string;
  dateStart: string;
  dateEnd: string;
  country: string;
  stack: string;
  className?: string;
}>

export const Work: FC<Props> = ({
  role,
  company,
  country,
  dateStart,
  dateEnd,
  stack,
  children,
  className
}) => {
  const date1 = (new Date(dateStart))
  const date2 = (new Date(dateEnd))

  return (
    <section className={className || ''}>
      <div className="font-bold text-lg">
        {role}
        <span className="ml-2 font-normal text-base"><Years year={dateStart} yearStart={dateEnd} /></span>
      </div>
      <div className="flex">
        <div className="italic font-semibold text-slate-800 text-sm">{company}</div>
        <div className="ml-2 text-slate-800 text-sm">{country}</div>
        <div className="ml-2 text-slate-600 text-sm">
          [{
            date1.toLocaleString('GB-en', { month: 'short' })
          } {
            date1.getFullYear()
          } - {
            date2.toLocaleString('GB-en', { month: 'short' })
          } {
            date2.getFullYear()
          }]
        </div>
      </div>
      <div className="whitespace-pre-line text-xs">{children}</div>
      <div className="mt-1 text-slate-600 text-sm"><span className="italic">Tech stack:</span> {stack}</div>
    </section>
  )
}
