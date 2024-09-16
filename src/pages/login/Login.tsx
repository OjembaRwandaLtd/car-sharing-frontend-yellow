import { useActionData, useNavigate } from 'react-router-dom'
import ValidationErrors from '../../components/LoginComponents/ValidationErrors'
import LoginForm from '../../components/LoginComponents/LoginForm'
import { useEffect } from 'react'
import { LoginActionData } from '../../util/types'
import { Links } from '../../routes/router'
import { useAuth } from '../../contexts/AuthContext'

export default function Login() {
  const actionData = useActionData() as LoginActionData
  const navigate = useNavigate()
  const auth = useAuth()

  useEffect(() => {
    if (auth.token) {
      navigate(`${Links.HOME}home`, { replace: true })
      return
    }

    if (actionData && actionData.user) {
      localStorage.setItem('token', actionData.user.token)
      auth.setToken(actionData.user.token)
      navigate(`${Links.HOME}home`, { replace: true })
    }
  }, [actionData])

  return (
    <main className="mx-4 flex min-h-screen flex-col items-center justify-evenly md:min-h-fit">
      <h1 className="flex flex-col text-center font-lora text-5xl font-bold text-gray-50 md:mt-14 md:flex-row md:justify-center md:gap-3 lg:text-7xl">
        CAR <span className="font-medium italic">sharing</span>
      </h1>
      <div className="flex w-full flex-col items-center gap-8 md:pt-20">
        <p className="text-center font-lora text-xl font-medium text-moni-gray-100">Log in</p>

        {actionData && <ValidationErrors actionData={actionData} />}

        <LoginForm />
      </div>
    </main>
  )
}
