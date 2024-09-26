import { apiUrl } from '../constants/apiUrl'
import { getAuthToken } from '../util/auth'
import useAxios from 'axios-hooks'
import { BookingDto } from '../types/apiTypes'

export default function useAddBooking() {
  return useAxios<BookingDto>(
    {
      method: 'POST',
      headers: { Authorization: `Bearer ${getAuthToken()}` },
      url: `${apiUrl}/bookings`,
    },
    { manual: true },
  )
}
