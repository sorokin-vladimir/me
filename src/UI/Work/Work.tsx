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
      <div className="font-bold text-lg">{role}</div>
      <div className="flex">
        <div className="italic font-semibold text-slate-800">{company}</div>
        <div className="ml-2 text-slate-800">{country}</div>
        <div className="ml-2 text-slate-600">
          [{
            date1.toLocaleString('GB-en', { month: 'short' })
          } {
            date1.getFullYear()
          } - {
            date2.toLocaleString('GB-en', { month: 'short' })
          } {
            date2.getFullYear()
          }] <Years year={dateStart} yearStart={dateEnd} />
        </div>
      </div>
      <div className="whitespace-pre-line">{children}</div>
      <div className="mt-1"><span className="italic">Tech stack:</span> {stack}</div>
    </section>
  )
}
