import axios from 'axios'
import { apiUrl } from '../constants/apiUrl'
import { getAuthToken } from './auth'
import { NewBookingDto } from '../types/apiTypes'

export async function createBooking(signal: AbortSignal, booking: NewBookingDto): Promise<unknown> {
  try {
    const response = await axios.post(`${apiUrl}/bookings`, {
      headers: {
        Authorization: `Bearer ${getAuthToken()}`,
      },
      signal,
      body: booking,
    })

    return response.data
  } catch (error) {
    return false
  }
}
