import Button from '../components/Button'
import ErrorPageIcon from '../assets/ErrorPageIcon'
import NavBar from '../components/NavBar'

export default function ErrorPage() {
  return (
    <div className="bg-primary-indigo">
      <NavBar />
      <div className="h-screen w-full  px-4 py-10">
        <h1 className="flex flex-col text-center font-lora text-5xl font-bold text-gray-50">
          OOOOOPS!
        </h1>
        <div className="mt-10 flex justify-center">
          <ErrorPageIcon />
        </div>
        <p className="mx-auto my-12 flex flex-col text-center font-lora text-xl font-medium text-gray-100">
          Something went wrong.
          <span>We will solve your issue soon.</span>
        </p>
        <Button variant="secondary" disabled={false} handleClick={() => {}}>
          Go back
        </Button>
      </div>
    </div>
  )
}
