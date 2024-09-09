import Button, { ButtonBehavior, ButtonStyles } from '../components/Button'

export default function Login() {
  return (
    <main className="mx-4 flex min-h-screen flex-col items-center justify-evenly">
      <h1 className="flex flex-col text-center font-lora text-5xl font-bold text-gray-50 md:flex-row md:justify-center md:gap-3 lg:text-7xl">
        CAR <span className="font-medium italic">sharing</span>
      </h1>
      <div className="flex w-full flex-col items-center gap-8 pt-28">
        <p className="text-center font-lora text-xl font-medium text-white">Log in</p>

        <form className="w-full">
          <div className="mb-16 flex w-full flex-col gap-4">
            <input
              className="rounded-3xl border-none bg-secondary-indigo px-6 py-4 text-lg text-primary-white outline-none placeholder:text-primary-white"
              type="text"
              name="usernameOrEmail"
              placeholder="Username / e-mail"
            />
            <input
              className="rounded-3xl border-none bg-secondary-indigo px-6 py-4 text-lg text-primary-white outline-none placeholder:text-primary-white"
              type="password"
              name="password"
              placeholder="Password"
            />
          </div>
          <Button behavior={ButtonBehavior.Button} customStyles={ButtonStyles.primary}>
            Log In
          </Button>
        </form>
      </div>
    </main>
  )
}
