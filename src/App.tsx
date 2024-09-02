import { ReactElement } from 'react'
import { configure } from 'axios-hooks'
// import Home from './pages/Home'
import { RouterProvider } from 'react-router-dom'

import router from './routes/router'

// Configure axios hooks
// Do not delete this if you want to use the provided API hooks in `src/hooks`
configure({
  defaultOptions: {
    autoCancel: false,
  },
})
export default function App(): ReactElement {
  return (
    <>
      {/* <Home /> */}
      <RouterProvider router={router} />
    </>
  )
}
