import { useToast } from '@chakra-ui/react'
import { apiUrl } from '../constants/apiUrl'
import { BookingState } from '../types/apiTypes'
import { getAuthToken } from '../util/auth'
import axios from 'axios'
import { useState } from 'react'
import { requestDeclined, requestNotDeclined } from '../chakra/toastMessages'

export default function useBookingState() {
  const toast = useToast()
  const [declineLoading, setDeclineLoading] = useState(false)
  const [acceptLoading, setAcceptLoading] = useState(false)

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
    setDeclineLoading(true)
    const stateStatus = await changeBookingState(id, BookingState.DECLINED)
    if (stateStatus === 200) {
      toast(requestDeclined)
      refetch()
    } else {
      toast(requestNotDeclined)
    }
    setDeclineLoading(false)
  }

  async function handleAccept(id: string | number, refetch: () => void) {
    setAcceptLoading(true)
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
    setAcceptLoading(false)
  }

  return { handleDeclined, handleAccept, acceptLoading, declineLoading }
}
