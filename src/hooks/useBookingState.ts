import { apiUrl } from '../constants/apiUrl'
import { getAuthToken } from '../util/auth'
import axios from 'axios'

export default function useBookingState() {
  async function changeBookingState(id: number | string) {
    try {
      const response = await axios.patch(
        `${apiUrl}/bookings/${id}`,
        {
          state: 'DECLINED',
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
  return { changeBookingState }
}
