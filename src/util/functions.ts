import dayjs from 'dayjs'

export function getDateAndTime(timestamp: Date) {
  const dateTime = dayjs(timestamp.toString())
  const normalDate = dateTime.format('DD MMM YYYY')
  const normalTime = dateTime.format('HH:mm')

  return { normalDate, normalTime }
}
