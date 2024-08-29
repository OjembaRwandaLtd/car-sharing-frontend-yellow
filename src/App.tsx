import { ReactElement } from 'react'
import { configure } from 'axios-hooks'
import NavBar from './components/NavBar'

// Configure axios hooks
// Do not delete this if you want to use the provided API hooks in `src/hooks`
configure({
  defaultOptions: {
    autoCancel: false,
  },
})
function App(): ReactElement {
  return (
    <main className="mx-auto flex min-h-screen w-full flex-col gap-8 px-5 py-10 md:w-1/3">
      <h1 className="font-inter text-4xl font-bold text-primary-blue">Hello to MoniShare</h1>
      <p className="font-lora">
        If you can read this, you have successfully started the base frontend repository!
      </p>
      <p>Happy coding!</p>
    </main>
  )
}

export default App
