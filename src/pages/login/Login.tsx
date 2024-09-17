import LoginForm from '../../components/LoginComponents/LoginForm'

export default function Login() {
  return (
    <main className="mx-4 flex min-h-screen flex-col items-center justify-evenly md:min-h-fit">
      <h1 className="flex flex-col text-center font-lora text-5xl font-bold text-gray-50 md:mt-14 md:flex-row md:justify-center md:gap-3 lg:text-7xl">
        CAR <span className="font-medium italic">sharing</span>
      </h1>
      <div className="flex w-full flex-col items-center gap-8 md:pb-4 md:pt-10">
        <p className="text-center font-lora text-xl font-medium text-moni-gray-100">Log in</p>

        <LoginForm />
      </div>
    </main>
  )
}
