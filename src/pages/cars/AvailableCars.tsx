import CarCard from '../../components/CarCard'
import useCars from '../../hooks/useCars'
import { useBookings, useCarTypes, useUsers } from '../../hooks'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { ChevronBackIcon } from '../../assets/ChevronBackIcon'
import Spinner from '../../assets/Spinner'
import { CarDto } from '../../types/apiTypes'
import Button, { ButtonBehavior, ButtonStyles } from '../../components/UI/Button'
import { Links } from '../../routes/router'
import useAddBooking from '../../hooks/useAddBooking'
import { useToast } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { bookingAdded, bookingNotAdded } from '../../chakra/toastMessages'

export default function AvailableCars() {
  const [{ data: carTypes, loading: carTypesLoading, error: carTypesError }] = useCarTypes()
  const [{ data: allCars, loading: allCarsLoading, error: allCarsError }] = useCars()
  const {
    data: allBookings,
    loading: allBookingsLoading,
    error: allBookingsError,
    refetch,
  } = useBookings()
  const [{ data: users, loading: usersLoading, error: usersError }] = useUsers()
  const [{ loading: addBookingLoading }, execute] = useAddBooking()
  const navigate = useNavigate()
  const toast = useToast()
  const [bookedCarId, setBookedCarId] = useState<number | null>(null)
  const location = useLocation()
  const startDate = location.state.startDate
  const endDate = location.state.endDate

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal
    refetch({ signal })
    return () => {
      controller.abort()
    }
  }, [])

  if (allCarsError || carTypesError || usersError || allBookingsError) {
    throw Error('Could not fetch cars')
  }

  if (allCarsLoading || carTypesLoading || usersLoading || allBookingsLoading) {
    return <Spinner />
  }

  if (!allCars || !carTypes || !users || !allBookings) {
    return <div className="p-5 text-3xl text-moni-gray-100">Could not fetch</div>
  }

  if (allCars.length === 0 || carTypes.length === 0 || users.length === 0) {
    return <div className="p-5 text-3xl text-moni-gray-100">No cars found</div>
  }

  const bookedCarIds = allBookings
    ?.filter(booking => booking.endDate > startDate)
    .map(booking => booking.carId)
  const availableCars = allCars.filter(car => !bookedCarIds?.includes(car.id))
  function getCarDetails(car: CarDto) {
    const user = users?.find(user => user.id === car.ownerId)
    const carType = carTypes?.find(type => type.id === car.carTypeId)
    if (!carType || !user) throw new Error('Car type or user not found')
    return { user, carType }
  }

  function onBookClick(carId: number) {
    setBookedCarId(carId)
    execute({ data: { carId, startDate, endDate } })
      .then(() => {
        toast(bookingAdded)
        refetch()
        navigate(Links.MY_BOOKINGS, { replace: true })
      })
      .catch(() => {
        toast(bookingNotAdded)
      })
  }

  return (
    <main className="flex flex-col items-center justify-center">
      <div className="my-8 flex w-full items-center justify-start px-6">
        <Link to=".." relative="path">
          <ChevronBackIcon className="text-moni-mustard-100" />
        </Link>
        <h1 className="w-full text-center font-lora text-3xl font-medium text-moni-gray-100">
          AVAILABLE CARS
        </h1>
      </div>
      <div className="mx-4 grid grid-cols-1 gap-4 md:mx-0 md:w-full md:gap-8 md:px-20 lg:grid-cols-2">
        {availableCars.map(car => {
          const { carType, user } = getCarDetails(car)
          const isBooking = addBookingLoading && bookedCarId === car.id
          return (
            <CarCard key={car.id} car={car} carType={carType} user={user}>
              <Button
                customStyles={ButtonStyles.PRIMARY}
                behavior={ButtonBehavior.BUTTON}
                onClick={() => onBookClick(car.id)}
              >
                {isBooking ? <Spinner className="h-5 w-5" /> : 'Book Car'}
              </Button>
            </CarCard>
          )
        })}
      </div>
    </main>
  )
}
