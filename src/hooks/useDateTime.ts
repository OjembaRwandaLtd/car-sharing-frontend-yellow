export default function useDateTime() {
  function getDate(timestamp: string) {
    const date = new Date(timestamp)

    const day = date.getUTCDate()
    const monthNames = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ]

    const month = monthNames[date.getUTCMonth()]
    const year = date.getUTCFullYear()

    const formattedDate = `${day} ${month} ${year}`
    return formattedDate
  }

  function getTime(timestamp: string) {
    const date = new Date(timestamp)

    const hours = date.getUTCHours()
    const minutes = date.getUTCMinutes()

    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}`

    return formattedTime
  }

  return { getDate, getTime }
}
