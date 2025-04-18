import { useEffect } from 'react'
import Spinner from '../../assets/Spinner'
import BookCarDetails from '../../components/UI/BookCarDetails'
import { useUserContext } from '../../contexts/UserContext'
import useBookingData from '../../hooks/useBookings'
import { getDateAndTime } from '../../util/functions'
import BookingStatusDetails from './BookingStatusDetails'
import NoBookings from './NoBookings'

export default function MyBookings() {
  const {
    data: bookingData,
    error: bookingError,
    loading: bookingLoading,
    refetch,
  } = useBookingData()
  const user = useUserContext()

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal
    refetch({ signal })
    return () => {
      controller.abort()
    }
  }, [])

  if (bookingLoading) return <Spinner />

  if (bookingError) throw new Error()

  if (!bookingData) return

  if (bookingData.length === 0) return <NoBookings />

  const myBookingsData = bookingData.filter(booking => {
    const ownBookings = booking.renter.id === user.id
    const currentDate = new Date()
    const expiredDate = new Date(booking.endDate)
    const isNotExpired = currentDate < expiredDate
    return ownBookings && isNotExpired
  })

  return (
    <main className="flex flex-col items-center justify-center">
      <h1 className="w-full py-8 text-center font-lora text-3xl font-medium text-moni-gray-100">
        MY BOOKINGS
      </h1>

      <div className="grid w-full grid-cols-1 sm:grid-cols-2 sm:gap-2 sm:px-6 md:grid-cols-3">
        {myBookingsData.map((booking, index) => {
          const { formattedDate: formattedStartDate, formattedTime: formattedStartTime } =
            getDateAndTime(booking.startDate)

          const { formattedDate: formattedEndDate, formattedTime: formattedEndTime } =
            getDateAndTime(booking.endDate)

          const bookingDetails = {
            carTypeId: booking.car.carTypeId,
            carName: booking.car.name,
            user: booking.car.owner.name,
            isOwner: true,
            startDate: formattedStartDate,
            startTime: formattedStartTime,
            endDate: formattedEndDate,
            endTime: formattedEndTime,
          }

          const isLast = index === bookingData.length - 1

          const customState = booking.state

          return (
            <div key={booking.id}>
              <BookCarDetails {...bookingDetails}>
                <BookingStatusDetails
                  state={customState}
                  startTime={bookingDetails.startTime}
                  startDate={bookingDetails.startDate}
                  bookingId={booking.id}
                  refetch={refetch}
                  carId={booking.car.id}
                  carState={booking.car.state}
                />
              </BookCarDetails>
              {!isLast && <hr className="mx-4 border-moni-gray-100 sm:hidden" />}
            </div>
          )
        })}
      </div>
    </main>
  )
}
