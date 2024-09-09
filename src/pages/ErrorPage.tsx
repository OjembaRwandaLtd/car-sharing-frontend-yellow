import Button, { ButtonStyles, ButtonBehavior } from '../components/Button'
import ErrorPageIcon from '../assets/ErrorPageIcon'
import NavBar from '../components/NavBar'
import MenuList from '../components/MenuList'
import ProfileIcon from '../assets/ProfileIcon'
import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {
  const error = useRouteError()

  const errorMessage = (() => {
    if (error instanceof Error) {
      return error.message
    } else if (typeof error === 'string') {
      return error
    } else if (typeof error === 'object' && error !== null && 'message' in error) {
      return (error as { message: string }).message
    }
    return 'Unknown error occurred'
  })()

  return (
    <div className="bg-primary-indigo text-white">
      <NavBar MenuList={<MenuList />} ProfileIcon={<ProfileIcon />} />

      <div className="flex h-screen w-full flex-col px-4 py-10">
        <h1 className="flex flex-col text-center font-lora text-5xl font-bold text-primary-white">
          OOOOOPS!
        </h1>

        <div className="mt-10 flex justify-center">
          <ErrorPageIcon />
        </div>

        <p className="mx-auto my-12 flex flex-col text-center font-lora text-xl font-medium text-primary-white">
          <span>{errorMessage}</span>
          We will solve your issue soon.
        </p>

        <Button behavior={ButtonBehavior.Link} customStyles={ButtonStyles.primary} path="/">
          Go back
        </Button>
      </div>
    </div>
  )
}
