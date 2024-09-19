import { useNavigate } from 'react-router-dom'
import LoginForm from '../../components/LoginComponents/LoginForm'
import { getAuthToken } from '../../util/auth'
import { useEffect } from 'react'
import { Links } from '../../routes/router'

export default function Login() {
  const navigate = useNavigate()
  const token = getAuthToken()

  useEffect(() => {
    if (token) {
      navigate(`${Links.HOME}home`, { replace: true })
    }
  }, [navigate, token])

  return (
    <main className="mx-4 mt-12 flex flex-col items-center justify-evenly md:min-h-fit">
      <h1 className="flex flex-col text-center font-lora text-5xl font-bold text-gray-50 md:flex-row md:justify-center md:gap-3 lg:text-7xl">
        CAR <span className="font-medium italic">sharing</span>
      </h1>
      <div className="mt-20 flex w-full flex-col items-center gap-8 md:mt-10 md:pb-4 md:pt-10">
        <p className="text-center font-lora text-xl font-medium text-moni-gray-100">Log in</p>

        <LoginForm />
      </div>
    </main>
  )
}
