import { useToast } from '@chakra-ui/react'
import { apiUrl } from '../constants/apiUrl'
import { BookingState } from '../types/apiTypes'
import { getAuthToken } from '../util/auth'
import axios from 'axios'

export default function useBookingState() {
  const toast = useToast()

  async function changeBookingState(id: number | string, newState: BookingState) {
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

  async function handleDeclined(id: string | number, refetch: () => void) {
    const stateStatus = await changeBookingState(id, BookingState.DECLINED)
    if (stateStatus === 200) {
      toast({
        title: 'Booking State Updated',
        description: 'Booking Status Updated',
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
      refetch()
    } else {
      toast({
        title: 'State Not Updated',
        description: 'Could Not Decline The Request',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    }
  }

  async function handleAccept(id: string | number, refetch: () => void) {
    const stateStatus = await changeBookingState(id, BookingState.ACCEPTED)
    if (stateStatus === 200) {
      toast({
        title: 'Booking State Updated',
        description: 'Booking Status Updated',
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
      refetch()
    } else {
      toast({
        title: 'State Not Updated',
        description: 'Could Not Accept The Request',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    }
  }

  return { changeBookingState, handleDeclined, handleAccept }
}
