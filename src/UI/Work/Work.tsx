import { FC, PropsWithChildren } from "react"
import { Text, Years } from "..";

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
      <Text variant="subtitle">
        {role}
        <span className="ml-2 font-normal text-base"><Years year={dateStart} yearStart={dateEnd} /></span>
      </Text>
      <div className="flex">
        <Text variant="smallSubtitle">{company}</Text>
        <Text variant="smallSubtitle" className="ml-2 not-italic font-normal">{country}</Text>
        <Text variant="smallDate" className="ml-2">
          [{
            date1.toLocaleString('GB-en', { month: 'short' })
          } {
            date1.getFullYear()
          } - {
            date2.toLocaleString('GB-en', { month: 'short' })
          } {
            date2.getFullYear()
          }]
        </Text>
      </div>
      <Text className="whitespace-pre-line">{children}</Text>
      <Text variant="smallDate" className="mt-1"><span className="italic">Tech stack:</span> {stack}</Text>
    </section>
  )
}
