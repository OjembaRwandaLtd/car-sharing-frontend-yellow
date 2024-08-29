import { createBrowserRouter } from 'react-router-dom'
import GuestLayout from '../layouts/GuestLayout'
import AppLayout from '../layouts/AppLayout'
import App from '../App'
import AddCar from '../pages/AddCar'
import MyBookings from '../pages/MyBookings'
import NewBooking from '../pages/NewBooking'
import MyCars from '../pages/MyCars'
import ManageBookings from '../pages/ManageBookings'
import ErrorPage from '../pages/ErrorPage'
import NotFoundPage from '../pages/NotFoundPage'

export const links = {
  home: '/',
  login: '/login',
  addCar: '/add-car',
  myBookings: '/my-bookings',
  newBooking: '/new-booking',
  myCars: '/my-cars',
  manageBookings: '/manage-bookings',
  notFound: '*',
}

const router = createBrowserRouter([
  {
    path: links.home,
    errorElement: <ErrorPage />,
    children: [
      {
        path: links.login,
        element: <GuestLayout />,
        children: [
          {
            path: links.notFound,
            element: <NotFoundPage />,
          },
        ],
      },
      {
        path: links.home,
        element: <AppLayout />,
        children: [
          {
            index: true,
            element: <App />,
          },
          {
            path: links.addCar,
            element: <AddCar />,
          },
          {
            path: links.myBookings,
            element: <MyBookings />,
          },
          {
            path: links.newBooking,
            element: <NewBooking />,
          },
          {
            path: links.myCars,
            element: <MyCars />,
          },
          {
            path: links.manageBookings,
            element: <ManageBookings />,
          },
          {
            path: links.notFound,
            element: <NotFoundPage />,
          },
        ],
      },
    ],
  },
])

export default router
