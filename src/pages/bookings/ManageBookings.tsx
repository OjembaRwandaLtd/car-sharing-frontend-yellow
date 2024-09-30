import { Link } from 'react-router-dom'
import { ChevronBackIcon } from '../../assets/ChevronBackIcon'
import useBookingData from '../../hooks/useBookings'
import BookCarDetails from '../../components/UI/BookCarDetails'
import Spinner from '../../assets/Spinner'
import useDateTime from '../../hooks/useDateTime'
import Button, { ButtonBehavior, ButtonStyles } from '../../components/UI/Button'
import useBookingState from '../../hooks/useBookingState'
import NoBookings from './NoBookings'
import { useUserContext } from '../../contexts/UserContext'

export default function ManageBookings() {
  const {
    data: bookingData,
    error: bookingError,
    loading: bookingLoading,
    refetch,
  } = useBookingData()
  const { getDate, getTime } = useDateTime()
  const { handleChangeBookingState, acceptLoading, declineLoading } = useBookingState()
  const user = useUserContext()

  if (bookingLoading) return <Spinner />

  if (bookingError) throw new Error('Could not find booking details')

  if (bookingData?.length === 0) return <NoBookings />

  if (!bookingData) return

  const myBookings = bookingData.filter(booking => {
    const ownBookings = booking.car.owner.id === user.id
    const isNotDeclined = booking.state !== 'DECLINED'

    const currentDate = new Date()
    const expiredDate = new Date(booking.endDate)

    const isNotExpired = currentDate < expiredDate

    return ownBookings && isNotDeclined && isNotExpired
  })

  return (
    <main className="flex flex-col items-center justify-center">
      <div className="flex w-full items-center justify-start px-6 py-8">
        <Link to=".." relative="path">
          <ChevronBackIcon className="text-moni-mustard-100" />
        </Link>
        <h1 className="w-full text-center font-lora text-3xl font-medium text-moni-gray-100">
          MANAGE BOOKINGS
        </h1>
      </div>
      <div className="grid w-full grid-cols-1 sm:grid-cols-2 sm:gap-2 sm:px-6 lg:grid-cols-3">
        {myBookings.map((data, index) => {
          const bookingDetails = {
            carTypeId: data.car.carTypeId,
            carName: data.car.name,
            user: data.renter.name,
            isOwner: false,
            startDate: getDate(data.startDate.toString()),
            endDate: getDate(data.endDate.toString()),
            startTime: getTime(data.startDate.toString()),
            endTime: getTime(data.endDate.toString()),
          }

          const isLast = index === bookingData.length - 1

          return (
            <div key={data.id}>
              <BookCarDetails {...bookingDetails}>
                {data.state === 'PENDING' && (
                  <menu className="mt-8 flex flex-col gap-2">
                    <li>
                      <Button
                        behavior={ButtonBehavior.BUTTON}
                        customStyles={ButtonStyles.PRIMARY}
                        onClick={() => handleChangeBookingState(data.id, 'ACCEPT', refetch)}
                        disabled={acceptLoading}
                      >
                        {acceptLoading ? <Spinner className="h-5 w-5" /> : 'Accept'}
                      </Button>
                    </li>
                    <li>
                      <Button
                        behavior={ButtonBehavior.BUTTON}
                        customStyles={ButtonStyles.SECONDARY}
                        onClick={() => handleChangeBookingState(data.id, 'DECLINE', refetch)}
                        disabled={declineLoading}
                      >
                        {declineLoading ? <Spinner className="h-5 w-5" /> : 'Decline'}
                      </Button>
                    </li>
                  </menu>
                )}

                {data.state !== 'PENDING' && (
                  <p className="my-8 text-sm text-moni-mustard-200">Booking Accepted</p>
                )}
              </BookCarDetails>
              {!isLast && <hr className="mx-4 border-moni-gray-100 sm:hidden" />}
            </div>
          )
        })}
      </div>
    </main>
  )
}
