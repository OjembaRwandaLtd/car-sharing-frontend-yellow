import { useToast } from '@chakra-ui/react'
import { apiUrl } from '../constants/apiUrl'
import { BookingState } from '../types/apiTypes'
import { getAuthToken } from '../util/auth'
import axios from 'axios'
import { useState } from 'react'
import {
  carNotPickedUp,
  carPickedUp,
  requestAccepted,
  requestDeclined,
  requestNotAccepted,
  requestNotDeclined,
} from '../chakra/toastMessages'

export default function useBookingState() {
  const toast = useToast()
  const [declineLoading, setDeclineLoading] = useState(false)
  const [acceptLoading, setAcceptLoading] = useState(false)
  const [pickupLoading, setPickupLoading] = useState(false)

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

  async function handleChangeBookingState(
    id: number | string,
    action: 'ACCEPT' | 'DECLINE' | 'PICK_UP',
    refetch: () => void,
  ) {
    if (action === 'DECLINE') {
      setDeclineLoading(true)
      const stateStatus = await changeBookingState(id, BookingState.DECLINED)
      if (stateStatus === 200) {
        toast(requestDeclined)
        refetch()
      } else {
        toast(requestNotDeclined)
      }
      setDeclineLoading(false)
    } else if (action === 'ACCEPT') {
      setAcceptLoading(true)
      const stateStatus = await changeBookingState(id, BookingState.ACCEPTED)
      if (stateStatus === 200) {
        toast(requestAccepted)
        refetch()
      } else {
        toast(requestNotAccepted)
      }
      setAcceptLoading(false)
    } else {
      setPickupLoading(true)
      const stateStatus = await changeBookingState(id, BookingState.PICKED_UP)
      if (stateStatus === 200) {
        toast(carPickedUp)
        refetch()
      } else {
        toast(carNotPickedUp)
      }
      setPickupLoading(false)
    }
  }

  return { handleChangeBookingState, acceptLoading, declineLoading, pickupLoading }
}
