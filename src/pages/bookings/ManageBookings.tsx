import { Link } from 'react-router-dom'
import { ChevronBackIcon } from '../../assets/ChevronBackIcon'
import useBookingData from '../../hooks/useBookings'
import BookCarDetails from '../../components/UI/BookCarDetails'
import Spinner from '../../assets/Spinner'
import useDateTime from '../../hooks/useDateTime'
import Button, { ButtonBehavior, ButtonStyles } from '../../components/UI/Button'
import { Links } from '../../routes/router'
import useBookingState from '../../hooks/useBookingState'

export default function ManageBookings() {
  const { data: bookingData, error: bookingError, loading: bookingLoading } = useBookingData()
  const { getDate, getTime } = useDateTime()
  const { changeBookingState } = useBookingState()

  if (bookingLoading) {
    return <Spinner />
  }
  if (bookingError) {
    throw new Error('Could not find booking details')
  }

  if (bookingData?.length === 0) {
    return (
      <div className="mx-8 my-24 flex flex-col gap-9 py-4 text-center text-xl">
        <p className=" italic text-moni-gray-100">You {"don't"} have any bookings yet</p>
        <Button
          behavior={ButtonBehavior.LINK}
          customStyles={ButtonStyles.PRIMARY}
          path={Links.MY_CARS}
        >
          See My Cars
        </Button>
      </div>
    )
  }

  async function handleDeclined(id: string | number) {
    return await changeBookingState(id)
  }

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
      <div className="grid w-full grid-cols-1 sm:grid-cols-2 sm:gap-2 lg:grid-cols-3">
        {bookingData?.map((data, index) => {
          const bookingDetails = {
            carTypeId: data.car.carTypeId,
            carName: data.car.name,
            user: data.car.owner.name,
            isOwner: false,
            startDate: getDate(data.startDate.toString()),
            endDate: getDate(data.endDate.toString()),
            startTime: getTime(data.startDate.toString()),
            endTime: getTime(data.endDate.toString()),
          }

          const isLast = index === bookingData.length - 1

          return (
            <div key={data.id}>
              {data.state !== 'DECLINED' && (
                <BookCarDetails {...bookingDetails}>
                  {data.state === 'PENDING' ? (
                    <menu className="flex flex-col gap-2">
                      <Button behavior={ButtonBehavior.BUTTON} customStyles={ButtonStyles.PRIMARY}>
                        Accept
                      </Button>
                      <Button
                        behavior={ButtonBehavior.BUTTON}
                        customStyles={ButtonStyles.SECONDARY}
                        onClick={() => handleDeclined(data.id)}
                      >
                        Decline
                      </Button>
                    </menu>
                  ) : (
                    <p className="mb-8 ml-12 text-sm text-moni-mustard-200">Booking Accepted</p>
                  )}
                </BookCarDetails>
              )}
              {!isLast && <hr className="mx-4 border-moni-gray-100 sm:hidden" />}
            </div>
          )
        })}
      </div>
    </main>
  )
}
