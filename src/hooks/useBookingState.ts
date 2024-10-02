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
  const [acceptedCarId, setAcceptedCarId] = useState<number | null>(null)
  const [declinedCarId, setDeclinedCarId] = useState<number | null>(null)

  async function handleChangeBookingState(
    id: number,
    action: Exclude<keyof typeof BookingState, 'PENDING'>,
    refetch: () => void,
  ) {
    switch (action) {
      case 'DECLINED': {
        setDeclineLoading(true)
        setDeclinedCarId(id)
        const declineStatus = await changeBookingState(id, BookingState.DECLINED)
        if (declineStatus === 200) {
          toast(requestDeclined)
          refetch()
        } else {
          toast(requestNotDeclined)
        }
        setDeclineLoading(false)
        break
      }

      case 'ACCEPTED': {
        setAcceptLoading(true)
        setAcceptedCarId(id)
        const acceptStatus = await changeBookingState(id, BookingState.ACCEPTED)
        if (acceptStatus === 200) {
          toast(requestAccepted)
          refetch()
        } else {
          toast(requestNotAccepted)
        }
        setAcceptLoading(false)
        break
      }

      case 'PICKED_UP': {
        setPickupLoading(true)
        const pickupStatus = await changeBookingState(id, BookingState.PICKED_UP)
        if (pickupStatus === 200) {
          toast(carPickedUp)
          refetch()
        } else {
          toast(carNotPickedUp)
        }
        setPickupLoading(false)
        break
      }

      case 'RETURNED': {
        setReturnLoading(true)
        const returnStatus = await changeBookingState(id, BookingState.RETURNED)
        if (returnStatus === 200) {
          toast(carReturned)
          refetch()
        } else {
          toast(carNotReturned)
        }
        setReturnLoading(false)
        break
      }

      default:
        break
    }
  }

  return {
    handleChangeBookingState,
    acceptLoading,
    declineLoading,
    pickupLoading,
    returnLoading,
    acceptedCarId,
    declinedCarId,
  }
}
