import Button, { ButtonBehavior } from '../components/Button'
import { ButtonStyles } from '../components/Button'
import { Links } from '../routes/router'

export default function LoginSplash() {
  return (
    <div className=" w-full items-center px-4 py-10">
      <h1 className="flex flex-col text-center font-lora text-5xl font-bold text-gray-50 md:flex-row md:justify-center md:gap-3 lg:text-7xl">
        CAR <span className="font-medium italic">sharing</span>
      </h1>
      <p className="mx-auto my-24 flex flex-col text-center font-lora text-xl font-medium text-gray-100 lg:gap-4 lg:text-2xl">
        Start sharing your car
        <span>with the world</span>
      </p>
      <div className="flex w-full flex-col lg:mx-auto lg:w-96">
        <Button
          behavior={ButtonBehavior.Link}
          customStyles={ButtonStyles.primary}
          path={Links.LOGIN}
        >
          Log In
        </Button>
      </div>
    </div>
  )
}
