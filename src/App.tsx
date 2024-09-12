import { ReactElement } from 'react'
import { configure } from 'axios-hooks'
import { RouterProvider } from 'react-router-dom'

import router from './routes/router'
import AuthContextProvider from './contexts/AuthContext'
import { ChakraProvider } from '@chakra-ui/react'

// Configure axios hooks
// Do not delete this if you want to use the provided API hooks in `src/hooks`
configure({
  defaultOptions: {
    autoCancel: false,
  },
})
export default function App(): ReactElement {
  return (
    <ChakraProvider>
      <AuthContextProvider>
        <RouterProvider router={router} />
      </AuthContextProvider>
    </ChakraProvider>
  )
}
