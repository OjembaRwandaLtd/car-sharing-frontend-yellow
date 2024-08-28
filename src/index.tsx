import './index.css'

import App from './App'
import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import LoginLayout from './layouts/LoginLayout'
import NotFoundPage from './pages/NotFoundPage'
import AddCar from './pages/AddCar'
import MyBookings from './pages/MyBookings'
import NewBooking from './pages/NewBooking'
import MyCars from './pages/MyCars'
import ManageBookings from './pages/ManageBookings'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = ReactDOM.createRoot(document.getElementById('root')!)
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" errorElement={<NotFoundPage />}>
      {/*Routes about login pages*/}
      <Route path="login" element={<LoginLayout />}>
        <Route path="*" element={<NotFoundPage />} />
      </Route>

      {/*Routes about app*/}
      <Route path="" element={<AppLayout />}>
        <Route index element={<App />} />
        <Route path="add-car" element={<AddCar />} />
        <Route path="my-bookings" element={<MyBookings />} />
        <Route path="new-booking" element={<NewBooking />} />
        <Route path="my-cars" element={<MyCars />} />
        <Route path="manage-bookings" element={<ManageBookings />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Route>,
  ),
)
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
