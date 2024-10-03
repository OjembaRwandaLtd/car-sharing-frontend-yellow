import { SetStateAction } from 'react'
import Button, { ButtonBehavior, ButtonStyles } from '../../../components/UI/Button'
import { BookingState, CarState, UsedCarsData } from '../../../types/apiTypes'

interface CarPickedUpProps {
  containerStyles: string
  initialCarState: CarState
  returnLoading: boolean
  bookingId: number
  refetch: () => void
  handleChangeBookingState: (
    id: number,
    action: Exclude<keyof typeof BookingState, 'PENDING'>,
    refetch: () => void,
  ) => Promise<void>
  carId: number
  currentBookingState: UsedCarsData | undefined
  moniMustardColor: string
  handleUnlockCar: (carId: number) => void
  handleLockCar: (carId: number) => void
  handleUseCar: (
    bookingId: number,
    setCurrentBookingState: (value: SetStateAction<UsedCarsData | undefined>) => void,
  ) => void
  setCurrentBookingState: React.Dispatch<React.SetStateAction<UsedCarsData | undefined>>
}

export default function CarPickedUp({
  containerStyles,
  initialCarState,
  returnLoading,
  bookingId,
  refetch,
  handleChangeBookingState,
  carId,
  currentBookingState,
  moniMustardColor,
  handleUnlockCar,
  handleLockCar,
  handleUseCar,
  setCurrentBookingState,
}: CarPickedUpProps) {
  return (
    <div className={containerStyles}>
      {!currentBookingState?.isCarUsed && <p className={moniMustardColor}>Car was picked up.</p>}
      <menu className="flex flex-col gap-4">
        {currentBookingState?.isCarUsed && (
          <>
            <li>
              <Button
                behavior={ButtonBehavior.BUTTON}
                customStyles={ButtonStyles.PRIMARY}
                onClick={() => handleUnlockCar(carId)}
                disabled={initialCarState === CarState.UNLOCKED}
              >
                Unlock
              </Button>
            </li>
            <li>
              <Button
                behavior={ButtonBehavior.BUTTON}
                customStyles={ButtonStyles.PRIMARY}
                onClick={() => handleLockCar(carId)}
                disabled={initialCarState === CarState.LOCKED}
              >
                Lock
              </Button>
            </li>
          </>
        )}
        {!currentBookingState?.isCarUsed && (
          <li>
            <Button
              behavior={ButtonBehavior.BUTTON}
              customStyles={ButtonStyles.PRIMARY}
              onClick={() => handleUseCar(bookingId, setCurrentBookingState)}
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
}
