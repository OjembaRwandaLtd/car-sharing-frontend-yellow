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

export enum LINKS {
  HOME = '/',
  LOGIN = '/login',
  ADD_CAR = '/add-car',
  MY_BOOKINGS = '/my-bookings',
  NEW_BOOKING = '/new-booking',
  MY_CARS = '/my-cars',
  MANAGE_BOOKINGS = '/manage-bookings',
  NOT_FOUND = '*',
}

const router = createBrowserRouter([
  {
    path: LINKS.HOME,
    errorElement: <ErrorPage />,
    children: [
      {
        path: LINKS.LOGIN,
        element: <GuestLayout />,
        children: [
          {
            path: LINKS.NOT_FOUND,
            element: <NotFoundPage />,
          },
        ],
      },
      {
        path: LINKS.HOME,
        element: <AppLayout />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: LINKS.ADD_CAR,
            element: <AddCar />,
          },
          {
            path: LINKS.MY_BOOKINGS,
            element: <MyBookings />,
          },
          {
            path: LINKS.NEW_BOOKING,
            element: <NewBooking />,
          },
          {
            path: LINKS.MY_CARS,
            element: <MyCars />,
          },
          {
            path: LINKS.MANAGE_BOOKINGS,
            element: <ManageBookings />,
          },
          {
            path: LINKS.NOT_FOUND,
            element: <NotFoundPage />,
          },
        ],
      },
    ],
  },
])

export default router
