import { format, parse } from 'date-fns'
import { enUS } from 'date-fns/locale'

export function formatItemDate({ date }: { date: string }) {
  const parsedDate = parse(date, 'yyyy-MM-dd', new Date())
  const formattedDate = format(parsedDate, 'P', {
    locale: enUS,
  })

  return formattedDate.replace(/\//g, '.')
}
