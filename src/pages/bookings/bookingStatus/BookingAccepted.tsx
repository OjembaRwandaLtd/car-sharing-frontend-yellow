import Button, { ButtonBehavior, ButtonStyles } from '../../../components/UI/Button'
import { BookingState } from '../../../types/apiTypes'

interface BookingAcceptedProps {
  containerStyles: string
  moniMustardColor: string
  isTimeReached: boolean
  moniLachsColor: string
  pickupLoading: boolean
  bookingId: number
  refetch: () => void
  handleChangeBookingState: (
    id: number,
    action: Exclude<keyof typeof BookingState, 'PENDING'>,
    refetch: () => void,
  ) => Promise<void>
}

export default function BookingAccepted({
  containerStyles,
  handleChangeBookingState,
  isTimeReached,
  moniLachsColor,
  moniMustardColor,
  pickupLoading,
  bookingId,
  refetch,
}: BookingAcceptedProps) {
  return (
    <div className={containerStyles}>
      <p className={moniMustardColor}>Booking accepted.</p>
      {!isTimeReached ? (
        <p className={moniLachsColor}>You cannot pick up your car before the agreed time.</p>
      ) : (
        <Button
          behavior={ButtonBehavior.BUTTON}
          customStyles={ButtonStyles.PRIMARY}
          onClick={() => handleChangeBookingState(bookingId, 'PICKED_UP', refetch)}
          disabled={pickupLoading}
        >
          Pick Up
        </Button>
      )}
    </div>
  )
}
