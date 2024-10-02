import dayjs from 'dayjs'

export function getDateAndTime(timestamp: Date) {
  const dateTime = dayjs(timestamp.toString())
  const formattedDate = dateTime.format('DD MMM YYYY')
  const formattedTime = dateTime.format('HH:mm')

  return { formattedDate, formattedTime }
}
