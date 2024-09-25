export default function useDateTime() {
  function getDate(timestamp: string) {
    const dateObj = new Date(timestamp)

    const day = dateObj.getUTCDate()
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

    const month = monthNames[dateObj.getUTCMonth()]
    const year = dateObj.getUTCFullYear()

    const formattedDate = `${day} ${month} ${year}`
    return formattedDate
  }

  function getTime(timestamp: string) {
    const dateObj = new Date(timestamp)

    const hours = dateObj.getUTCHours()
    const minutes = dateObj.getUTCMinutes()

    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}`

    return formattedTime
  }

  return { getDate, getTime }
}
