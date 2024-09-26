import Spinner from '../../assets/Spinner'
import BookCarDetails from '../../components/UI/BookCarDetails'
import { useUserContext } from '../../contexts/UserContext'
import useBookingData from '../../hooks/useBookings'
import useDateTime from '../../hooks/useDateTime'
import BookingStatusDetails from './BookingStatusDetails'
import NoBookings from './NoBookings'

export default function MyBookings() {
  const { data: bookingData, error: bookingError, loading: bookingLoading } = useBookingData()
  const user = useUserContext()
  const { getDate, getTime } = useDateTime()

  if (bookingLoading) return <Spinner />

  if (bookingError) throw new Error('Could not find booking details')

  if (!bookingData) return

  if (bookingData.length === 0) return <NoBookings />

  const myBookingsData = bookingData
    .filter(booking => booking.renter.id === user.id)
    .filter(booking => {
      const currentDate = new Date()
      const expiredDate = new Date(booking.endDate)
      return currentDate < expiredDate
    })

  return (
    <main className="flex flex-col items-center justify-center">
      <h1 className="w-full py-8 text-center font-lora text-3xl font-medium text-moni-gray-100">
        MY BOOKINGS
      </h1>

      <div className="grid w-full grid-cols-1 sm:grid-cols-2 sm:gap-2 sm:px-6 md:grid-cols-3">
        {myBookingsData.map((booking, index) => {
          const bookingDetails = {
            carTypeId: booking.car.carTypeId,
            carName: booking.car.name,
            user: booking.car.owner.name,
            isOwner: true,
            startDate: getDate(booking.startDate.toString()),
            endDate: getDate(booking.endDate.toString()),
            startTime: getTime(booking.startDate.toString()),
            endTime: getTime(booking.endDate.toString()),
          }

          const isLast = index === bookingData.length - 1

          const customState = booking.state

          return (
            <div key={booking.id}>
              <BookCarDetails {...bookingDetails}>
                <BookingStatusDetails state={customState} />
              </BookCarDetails>
              {!isLast && <hr className="mx-4 border-moni-gray-100 sm:hidden" />}
            </div>
          )
        })}
      </div>
    </main>
  )
}
