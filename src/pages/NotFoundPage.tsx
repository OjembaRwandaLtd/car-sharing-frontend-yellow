import { ReactElement } from 'react'
import Button, { ButtonBehavior, ButtonStyles } from '../components/UI/Button'
import { Links } from '../routes/router'
import NotFoundIcon from '../assets/NotFoundIcon'

export default function NotFoundPage(): ReactElement {
  return (
    <main className="max-h-screen bg-moni-indigo-800 text-moni-gray-100">
      <div className="flex w-full flex-col px-4 py-10 md:mx-auto md:h-min md:w-1/2 md:py-5 ">
        <h1 className="text-center font-lora text-5xl font-bold text-moni-gray-100">OOOOOPS!</h1>

        <div className="flex justify-center">
          <NotFoundIcon />
        </div>

        <p className="mx-auto py-10 text-center font-lora text-2xl font-bold  text-moni-gray-100 md:py-0 md:pb-10">
          Page Not Found
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
