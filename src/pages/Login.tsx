import Button, { ButtonBehavior, ButtonStyles } from '../components/Button'

export default function Login() {
  return (
    <main className="mx-4 flex min-h-screen flex-col items-center justify-evenly">
      <h1 className="flex flex-col text-center font-lora text-5xl font-bold text-gray-50 md:flex-row md:justify-center md:gap-3 lg:text-7xl">
        CAR <span className="font-medium italic">sharing</span>
      </h1>
      <div className="flex w-full flex-col items-center gap-8">
        <p className="text-center font-lora font-medium text-white">Log in</p>

        <form className="w-full">
          <Button behavior={ButtonBehavior.Button} customStyles={ButtonStyles.primary}>
            Log In
          </Button>
        </form>
      </div>
    </main>
  )
}
