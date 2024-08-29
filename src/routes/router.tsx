import { createBrowserRouter } from 'react-router-dom'
import NotFoundPage from '../pages/NotFoundPage'
import LoginLayout from '../layouts/LoginLayout'
import AppLayout from '../layouts/AppLayout'
import App from '../App'
import AddCar from '../pages/AddCar'
import MyBookings from '../pages/MyBookings'
import NewBooking from '../pages/NewBooking'
import MyCars from '../pages/MyCars'
import ManageBookings from '../pages/ManageBookings'

const links = {
  default: '',
  login: '/login',
  home: '/',
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
    errorElement: <NotFoundPage />,
    children: [
      {
        path: links.login,
        element: <LoginLayout />,
        children: [
          {
            path: links.notFound,
            element: <NotFoundPage />,
          },
        ],
      },
      {
        path: links.default,
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
