import { createBrowserRouter } from 'react-router-dom'
import GuestLayout from '../layouts/GuestLayout'
import AppLayout from '../layouts/AppLayout'
import MyBookings from '../pages/bookings/MyBookings'
import AllCars from '../pages/cars/AllCars'
import MyCars from '../pages/cars/MyCars'
import ManageBookings from '../pages/bookings/ManageBookings'
import ErrorPage from '../pages/ErrorPage'
import NotFoundPage from '../pages/NotFoundPage'
import Home from '../pages/Home'
import CarDetails from '../pages/cars/CarDetails'
import NewCar from '../pages/cars/NewCar'
import NewBooking from '../pages/bookings/NewBooking'
import LoginSplash from '../pages/LoginSplash'

export enum Links {
  HOME = '/',
  LOGIN = '/login',
  CARS = '/cars',
  MY_CARS = '/cars/mycars',
  NEW_CAR = '/cars/new',
  MY_BOOKINGS = '/bookings',
  NEW_BOOKING = '/bookings/new',
  MANAGE_BOOKINGS = '/bookings/manage',
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
            path: 'splash',
            element: <LoginSplash />,
          },
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
            path: 'cars',
            children: [
              {
                index: true,
                element: <AllCars />,
              },
              {
                path: 'mycars',
                element: <MyCars />,
              },
              {
                path: 'new',
                element: <NewCar />,
              },
              {
                path: ':carId',
                element: <CarDetails />,
              },
            ],
          },
          {
            path: 'bookings',
            children: [
              {
                index: true,
                element: <MyBookings />,
              },
              {
                path: 'new',
                element: <NewBooking />,
              },
              {
                path: 'manage',
                element: <ManageBookings />,
              },
            ],
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
