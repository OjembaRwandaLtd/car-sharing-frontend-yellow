import axios from 'axios'
import { apiUrl } from '../constants/apiUrl'
import { getAuthToken } from './auth'
import { BookingState } from '../types/apiTypes'

export default async function changeBookingState(id: number | string, newState: BookingState) {
  try {
    const response = await axios.patch(
      `${apiUrl}/bookings/${id}`,
      {
        state: newState,
      },
      {
        headers: { Authorization: `Bearer ${getAuthToken()}` },
      },
    )
    return response.status
  } catch (error) {
    return error
  }
}
