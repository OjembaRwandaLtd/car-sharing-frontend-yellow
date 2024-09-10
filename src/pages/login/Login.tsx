import { useActionData, useNavigate } from 'react-router-dom'
import LoginForm from '../../components/LoginComponents/LoginForm'
import ValidationErrors from '../../components/LoginComponents/ValidationErrors'
import { useEffect } from 'react'
import { ActionData } from '../../util/types'
import { Links } from '../../routes/router'
import { useAuth } from '../../contexts/AuthContext'

export default function Login() {
  const actionData = useActionData() as ActionData
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
    <main className="mx-4 flex flex-col items-center justify-evenly py-12">
      <h1 className="flex flex-col text-center font-lora text-5xl font-bold text-gray-50 md:flex-row md:justify-center md:gap-3 lg:text-7xl">
        CAR <span className="font-medium italic">sharing</span>
      </h1>
      <div className="flex w-full flex-col items-center gap-6 py-14">
        <p className="text-center font-lora text-xl font-medium text-white">Log in</p>

        {actionData && <ValidationErrors actionData={actionData} />}

        <LoginForm />
      </div>
    </main>
  )
}
