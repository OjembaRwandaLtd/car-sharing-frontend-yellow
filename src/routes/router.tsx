import { createBrowserRouter } from 'react-router-dom'
import GuestLayout from '../layouts/GuestLayout'
import AppLayout from '../layouts/AppLayout'
import MyBookings from '../pages/bookings/MyBookings'
import MyCars from '../pages/cars/MyCars'
import ManageBookings from '../pages/bookings/ManageBookings'
import ErrorPage from '../pages/ErrorPage'
import NotFoundPage from '../pages/NotFoundPage'
import Home from '../pages/Home'
import CarDetails from '../pages/cars/CarDetails'
import NewCar from '../pages/cars/NewCar'
import NewBooking from '../pages/bookings/NewBooking'
import Login from '../pages/Login'
import Splash from '../pages/Splash'
import ProtectedRoute from '../layouts/ProtectedRoute'
import UserContextProvider from '../contexts/UserContext'

export enum Links {
  LANDING_PAGE = '/',
  HOME = '/home',
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
    errorElement: <ErrorPage />,
    children: [
      {
        path: Links.LANDING_PAGE,
        element: (
          <ProtectedRoute>
            <GuestLayout />
          </ProtectedRoute>
        ),
        children: [
          {
            index: true,
            element: <Splash />,
          },
          {
            path: Links.LOGIN,
            element: <Login />,
          },
        ],
      },
      {
        element: (
          <ProtectedRoute>
            <UserContextProvider>
              <AppLayout />
            </UserContextProvider>
          </ProtectedRoute>
        ),
        children: [
          {
            path: 'home',
            element: <Home />,
          },
          {
            path: 'cars',
            children: [
              {
                index: true,
                element: <NewBooking />,
              },
              {
                path: 'mycars',
                element: <MyCars />,
              },
              {
                path: 'mycars/:carId',
                element: <CarDetails />,
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
