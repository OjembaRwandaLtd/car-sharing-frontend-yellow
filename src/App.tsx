import { ReactElement } from 'react'
import { configure } from 'axios-hooks'
import Home from './pages/Home'

// Configure axios hooks
// Do not delete this if you want to use the provided API hooks in `src/hooks`
configure({
  defaultOptions: {
    autoCancel: false,
  },
})
function App(): ReactElement {
  return <Home />
}

export default App
