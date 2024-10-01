import { useToast } from '@chakra-ui/react'
import { BookingState } from '../types/apiTypes'
import { useState } from 'react'
import {
  carNotPickedUp,
  carNotReturned,
  carPickedUp,
  carReturned,
  requestAccepted,
  requestDeclined,
  requestNotAccepted,
  requestNotDeclined,
} from '../chakra/toastMessages'
import changeBookingState from '../util/changeBookingState'

export default function useBookingState() {
  const toast = useToast()
  const [declineLoading, setDeclineLoading] = useState(false)
  const [acceptLoading, setAcceptLoading] = useState(false)
  const [pickupLoading, setPickupLoading] = useState(false)
  const [returnLoading, setReturnLoading] = useState(false)

  async function handleChangeBookingState(
    id: number | string,
    action: 'ACCEPT' | 'DECLINE' | 'PICK_UP' | 'RETURN',
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
    } else if (action === 'PICK_UP') {
      setPickupLoading(true)
      const stateStatus = await changeBookingState(id, BookingState.PICKED_UP)
      if (stateStatus === 200) {
        toast(carPickedUp)
        refetch()
      } else {
        toast(carNotPickedUp)
      }
      setPickupLoading(false)
    } else {
      setReturnLoading(true)
      const stateStatus = await changeBookingState(id, BookingState.RETURNED)
      if (stateStatus === 200) {
        toast(carReturned)
        refetch()
      } else {
        toast(carNotReturned)
      }
      setReturnLoading(false)
    }
  }

  return { handleChangeBookingState, acceptLoading, declineLoading, pickupLoading, returnLoading }
}
