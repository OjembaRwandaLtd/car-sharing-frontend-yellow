import { ReactElement } from 'react'
import { configure } from 'axios-hooks'
import MenuList from './components/MenuList'

// Configure axios hooks
// Do not delete this if you want to use the provided API hooks in `src/hooks`
configure({
  defaultOptions: {
    autoCancel: false,
  },
})
function App(): ReactElement {
  return (
    <main className="mx-auto flex min-h-screen w-1/3 flex-col gap-8 py-10">
      <h1 className="font-inter text-4xl font-bold text-primary-blue">Hello to MoniShare</h1>
      <p className="font-lora">
        If you can read this, you have successfully started the base frontend repository!
      </p>
      <p>Happy coding!</p>
      <MenuList />
    </main>
  )
}

export default App
