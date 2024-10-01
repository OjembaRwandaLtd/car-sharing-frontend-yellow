import Button, { ButtonStyles, ButtonBehavior } from '../components/UI/Button'
import ErrorPageIcon from '../assets/ErrorPageIcon'
import NavBar from '../components/NavBar'
import MenuList from '../components/MenuList'
import ProfileIcon from '../assets/ProfileIcon'
import { useRouteError } from 'react-router-dom'
import { Links } from '../routes/router'

export default function ErrorPage() {
  const error = useRouteError()

  const errorMessage = (() => {
    if (error instanceof Error) {
      return error.message
    }

    if (typeof error === 'string') {
      return error
    }
    if (error && typeof error === 'object' && 'message' in error) {
      return (error as { message: string }).message
    }
    return 'Something went wrong'
  })()

  return (
    <main className="h-screen bg-moni-indigo-800 text-moni-gray-100">
      <NavBar MenuList={<MenuList />} ProfileIcon={<ProfileIcon />} />

      <div className="flex w-full flex-col px-4 py-10 md:h-min md:py-5 ">
        <h1 className="flex flex-col text-center font-lora text-5xl font-bold text-moni-gray-100">
          OOOOOPS!
        </h1>

        <div className="mt-10 flex justify-center md:mt-5">
          <ErrorPageIcon />
        </div>

        <p className="mx-auto my-12 flex flex-col text-center font-lora text-xl font-medium text-moni-gray-100 md:my-6">
          <span>{errorMessage}</span>
          We will solve your issue soon.
        </p>

        <Button
          behavior={ButtonBehavior.LINK}
          customStyles={ButtonStyles.PRIMARY}
          path={Links.HOME}
        >
          Go back
        </Button>
      </div>
    </main>
  )
}
