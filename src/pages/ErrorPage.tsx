import Button from '../components/Button'
import ErrorPageIcon from '../assets/ErrorPageIcon'

export default function ErrorPage() {
  return (
    <div className="h-screen w-full px-4 py-10">
      <h1 className="flex flex-col bg-primary-white text-center font-lora text-5xl font-bold">
        OOOOOPS!
      </h1>
      <div className="mt-10 flex justify-center">
        <ErrorPageIcon />
      </div>
      <p className="mx-auto my-12 flex flex-col bg-primary-white text-center font-lora text-xl font-medium">
        Something went wrong.
        <span>We will solve your issue soon.</span>
      </p>
      <Button variant="secondary" disabled={false} handleClick={() => {}}>
        Go back
      </Button>
    </div>
  )
}
