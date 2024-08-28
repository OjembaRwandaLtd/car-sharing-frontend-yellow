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

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = ReactDOM.createRoot(document.getElementById('root')!)
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" errorElement={<NotFoundPage />}>
      {/*Routes about login pages*/}
      <Route path="" element={<LoginLayout />}>
        <Route path="*" element={<NotFoundPage />} />
      </Route>

      {/*Routes about app */}
      <Route path="/home" element={<AppLayout />}>
        <Route index element={<App />} />
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
