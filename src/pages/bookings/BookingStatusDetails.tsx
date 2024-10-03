import useBookingState from '../../hooks/useBookingState'
import { BookingState, BookingStatusDetailsProps, UsedCarsData } from '../../types/apiTypes'
import useChangeCarState from '../../hooks/useChangeCarState'
import { useState } from 'react'
import { handleUseCar } from '../../util/functions'
import BookingAccepted from './bookingStatus/BookingAccepted'
import CarPickedUp from './bookingStatus/CarPickedUp'

const containerStyles = 'flex flex-col gap-6 mt-8'
const moniMustardColor = 'text-moni-mustard-200'
const moniLachsColor = 'text-moni-lachs-200'

export const currentData = JSON.parse(localStorage.getItem('usedCars') || '[]') as UsedCarsData[]

export default function BookingStatusDetails({
  state,
  startTime,
  startDate,
  bookingId,
  refetch,
  carId,
  carState,
}: BookingStatusDetailsProps) {
  const { handleChangeBookingState, returnLoading, pickupLoading } = useBookingState()
  const [currentBookingState, setCurrentBookingState] = useState(
    currentData.find(data => data.bookingId === bookingId),
  )
  const currentDate = Date.now()

  const { initialCarState, handleLockCar, handleUnlockCar } = useChangeCarState({ carState })

  const combinedStartDateTime = new Date(`${startDate} ${startTime}`).getTime()

  const isTimeReached = currentDate >= combinedStartDateTime

  switch (state) {
    case BookingState.ACCEPTED:
      return (
        <BookingAccepted
          bookingId={bookingId}
          containerStyles={containerStyles}
          handleChangeBookingState={handleChangeBookingState}
          isTimeReached={isTimeReached}
          moniLachsColor={moniLachsColor}
          moniMustardColor={moniMustardColor}
          pickupLoading={pickupLoading}
          refetch={refetch}
        />
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
        <CarPickedUp
          bookingId={bookingId}
          carId={carId}
          setCurrentBookingState={setCurrentBookingState}
          containerStyles={containerStyles}
          currentBookingState={currentBookingState}
          handleChangeBookingState={handleChangeBookingState}
          handleLockCar={handleLockCar}
          handleUnlockCar={handleUnlockCar}
          handleUseCar={handleUseCar}
          initialCarState={initialCarState}
          moniMustardColor={moniMustardColor}
          refetch={refetch}
          returnLoading={returnLoading}
        />
      )

    default:
      return (
        <div className={containerStyles}>
          <p className={moniLachsColor}>Booking request pending.</p>
        </div>
      )
  }
}
