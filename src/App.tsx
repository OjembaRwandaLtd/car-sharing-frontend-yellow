import { ReactElement } from 'react'
import { configure } from 'axios-hooks'

// Configure axios hooks
// Do not delete this if you want to use the provided API hooks in `src/hooks`
configure({
  defaultOptions: {
    autoCancel: false,
  },
})
function App(): ReactElement {
  return (
    <main className="flex flex-col w-1/3 min-h-screen gap-8 py-10 mx-auto">
      <h1 className="text-4xl font-inter">Hello to MoniShare</h1>
      <p className="font-lora">
        If you can read this, you have successfully started the base frontend repository!
      </p>
      <p>Happy coding!</p>
    </main>
  )
}

export default App
