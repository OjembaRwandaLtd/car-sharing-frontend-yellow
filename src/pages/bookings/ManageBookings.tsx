import { Link } from 'react-router-dom'
import { ChevronBackIcon } from '../../assets/ChevronBackIcon'
import useBookingData from '../../hooks/useBookings'
import BookCarDetails from '../../components/UI/BookCarDetails'
import Spinner from '../../assets/Spinner'
import useDateTime from '../../hooks/useDateTime'

export default function ManageBookings() {
  const { data: bookingData, error: bookingError, loading: bookingLoading } = useBookingData()
  const { getDate, getTime } = useDateTime()

  if (bookingLoading) {
    return <Spinner />
  }
  if (bookingError) {
    throw new Error('Could not find booking details')
  }

  if (bookingData?.length === 0) {
    return <p>No bookings yet</p>
  }

  return (
    <main className="flex flex-col items-center justify-center">
      <div className="my-8 flex w-full items-center justify-start px-6">
        <Link to=".." relative="path">
          <ChevronBackIcon className="text-moni-mustard-100" />
        </Link>
        <h1 className="w-full text-center font-lora text-3xl font-medium text-moni-gray-100">
          MANAGE BOOKINGS
        </h1>
      </div>
      <div>
        {bookingData?.map(data => {
          const bookingDetails = {
            carTypeId: data.car.carTypeId,
            carName: data.car.name,
            user: data.car.owner.name,
            isOwner: true,
            startDate: getDate(data.startDate.toString()),
            endDate: getDate(data.endDate.toString()),
            startTime: getTime(data.startDate.toString()),
            endTime: getTime(data.endDate.toString()),
          }
          return <BookCarDetails key={data.id} {...bookingDetails} />
        })}
      </div>
    </main>
  )
}
