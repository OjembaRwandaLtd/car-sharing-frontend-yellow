import axios from 'axios'
import { apiUrl } from '../constants/apiUrl'
import { getAuthToken } from './auth'
import { AddBookingDto } from '../types/apiTypes'

export async function createBooking(booking: AddBookingDto) {
  const endDate = booking.endDate.toISOString()
  const startDate = booking.startDate.toISOString()
  try {
    await axios.post<AddBookingDto>(
      `${apiUrl}/bookings`,
      { carId: booking.carId, startDate, endDate },
      {
        headers: {
          Authorization: `Bearer ${getAuthToken()}`,
          'Content-Type': 'application/json',
        },
      },
    )
    return true
  } catch (error) {
    return false
  }
}
