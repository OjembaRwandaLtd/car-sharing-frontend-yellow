import Button, { ButtonBehavior, ButtonStyles } from '../../components/UI/Button'
import useBookingState from '../../hooks/useBookingState'
import { BookingState, BookingStatusDetailsProps, CarState } from '../../types/apiTypes'
import useChangeCarState from '../../hooks/useChangeCarState'

const containerStyles = 'flex flex-col gap-6 mt-8'
const moniMustardColor = 'text-moni-mustard-200'
const moniLachsColor = 'text-moni-lachs-200'
// eslint-disable-next-line max-lines-per-function
export default function BookingStatusDetails({
  state,
  startTime,
  startDate,
  bookingId,
  refetch,
  carId,
}: BookingStatusDetailsProps) {
  const { handleChangeBookingState, returnLoading, pickupLoading } = useBookingState()
  const currentDate = Date.now()

  const { carState, setIsCarUsed, isCarUsed, handleLockCar, handleUnlockCar } = useChangeCarState()

  const combinedStartDateTime = new Date(`${startDate} ${startTime}`).getTime()

  const isTimeReached = currentDate >= combinedStartDateTime

  switch (state) {
    case BookingState.ACCEPTED:
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
    case BookingState.DECLINED:
      return (
        <div className={containerStyles}>
          <p className="text-red-400">Booking request declined.</p>
        </div>
      )
    case BookingState.PENDING:
      return (
        <div className={containerStyles}>
          <p className={moniLachsColor}>Booking request pending.</p>
        </div>
      )
    case BookingState.RETURNED:
      return (
        <div className={containerStyles}>
          <p className={moniMustardColor}>Car was returned.</p>
        </div>
      )
    case BookingState.PICKED_UP:
      return (
        <div className={containerStyles}>
          {!isCarUsed && <p className={moniMustardColor}>Car was picked up.</p>}
          <menu className="flex flex-col gap-4">
            {isCarUsed && (
              <>
                <li>
                  <Button
                    behavior={ButtonBehavior.BUTTON}
                    customStyles={ButtonStyles.PRIMARY}
                    onClick={() => handleUnlockCar(carId)}
                    disabled={carState === CarState.UNLOCKED}
                  >
                    Unlock
                  </Button>
                </li>
                <li>
                  <Button
                    behavior={ButtonBehavior.BUTTON}
                    customStyles={ButtonStyles.PRIMARY}
                    onClick={() => handleLockCar(carId)}
                    disabled={carState === CarState.LOCKED}
                  >
                    Lock
                  </Button>
                </li>
              </>
            )}
            {!isCarUsed && (
              <li>
                <Button
                  behavior={ButtonBehavior.BUTTON}
                  customStyles={ButtonStyles.PRIMARY}
                  onClick={() => setIsCarUsed(true)}
                >
                  Use Car
                </Button>
              </li>
            )}
            <li>
              <Button
                behavior={ButtonBehavior.BUTTON}
                customStyles={ButtonStyles.SECONDARY}
                onClick={() => handleChangeBookingState(bookingId, 'RETURNED', refetch)}
                disabled={returnLoading}
              >
                Return
              </Button>
            </li>
          </menu>
        </div>
      )

    default:
      return (
        <div className={containerStyles}>
          <p className={moniLachsColor}>Booking request pending.</p>
        </div>
      )
  }
}
