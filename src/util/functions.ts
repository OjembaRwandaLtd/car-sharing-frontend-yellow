import dayjs from 'dayjs'
import { currentData } from '../pages/bookings/BookingStatusDetails'
import { UsedCarsData } from '../types/apiTypes'

export function getDateAndTime(timestamp: Date) {
  const dateTime = dayjs(timestamp.toString())
  const formattedDate = dateTime.format('DD MMM YYYY')
  const formattedTime = dateTime.format('HH:mm')

  return { formattedDate, formattedTime }
}

export function handleUseCar(
  bookingId: number,
  setCurrentBookingState: (value: React.SetStateAction<UsedCarsData | undefined>) => void,
) {
  const newData = currentData.map(data => {
    if (data.bookingId === bookingId) {
      return {
        ...data,
        isCarUsed: true,
      }
    }
    return data
  })
  setCurrentBookingState(newData.find(data => data.bookingId === bookingId))
  localStorage.setItem('usedCars', JSON.stringify(newData))
}
