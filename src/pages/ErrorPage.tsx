import Button, { buttonStyles, ButtonBehavior } from '../components/Button'
import ErrorPageIcon from '../assets/ErrorPageIcon'

export default function ErrorPage() {
  return (
    <div className="flex h-screen w-full flex-col px-4 py-10">
      <h1 className="flex flex-col text-center font-lora text-5xl font-bold text-primary-white">
        OOOOOPS!
      </h1>
      <div className="mt-10 flex justify-center">
        <ErrorPageIcon />
      </div>
      <p className="mx-auto my-12 flex flex-col text-center font-lora text-xl font-medium text-primary-white">
        Something went wrong.
        <span>We will solve your issue soon.</span>
      </p>
      <Button style={buttonStyles.secondary} behavior={ButtonBehavior.Link} path="/">
        Go back
      </Button>
    </div>
  )
}
