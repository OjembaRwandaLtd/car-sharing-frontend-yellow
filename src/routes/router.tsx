import { createBrowserRouter } from 'react-router-dom'
import GuestLayout from '../layouts/GuestLayout'
import AppLayout from '../layouts/AppLayout'
import AddCar from '../pages/AddCar'
import MyBookings from '../pages/MyBookings'
import NewBooking from '../pages/NewBooking'
import MyCars from '../pages/MyCars'
import ManageBookings from '../pages/ManageBookings'
import ErrorPage from '../pages/ErrorPage'
import NotFoundPage from '../pages/NotFoundPage'
import Home from '../pages/Home'
import CarDetailsPage from '../pages/CarDetailsPage'

export enum Links {
  HOME = '/',
  LOGIN = '/login',
  ADD_CAR = '/add-car',
  MY_BOOKINGS = '/my-bookings',
  NEW_BOOKING = '/new-booking',
  CAR_DETAILS = '/car-details/:carId',
  MY_CARS = '/my-cars',
  MANAGE_BOOKINGS = '/manage-bookings',
  NOT_FOUND = '*',
}

const router = createBrowserRouter([
  {
    path: Links.HOME,
    errorElement: <ErrorPage />,
    children: [
      {
        path: Links.LOGIN,
        element: <GuestLayout />,
        children: [
          {
            path: Links.NOT_FOUND,
            element: <NotFoundPage />,
          },
        ],
      },
      {
        path: Links.HOME,
        element: <AppLayout />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: Links.ADD_CAR,
            element: <AddCar />,
          },
          {
            path: Links.MY_BOOKINGS,
            element: <MyBookings />,
          },
          {
            path: Links.NEW_BOOKING,
            element: <NewBooking />,
          },
          {
            path: Links.CAR_DETAILS,
            element: <CarDetailsPage />,
          },
          {
            path: Links.MY_CARS,
            element: <MyCars />,
          },
          {
            path: Links.MANAGE_BOOKINGS,
            element: <ManageBookings />,
          },
          {
            path: Links.NOT_FOUND,
            element: <NotFoundPage />,
          },
        ],
      },
    ],
  },
])

export default router
