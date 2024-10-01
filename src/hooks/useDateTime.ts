import dayjs from 'dayjs'

export default function useDateTime() {
  function getDate(timestamp: string) {
    const date = dayjs(timestamp)
    const normalDate = date.format('DD MMM YYYY')

    return normalDate
  }

  function getTime(timestamp: string) {
    const date = dayjs(timestamp)
    const normalTime = date.format('HH:mm')

    return normalTime
  }

  return { getDate, getTime }
}
