import { useActionData, useNavigate } from 'react-router-dom'
import LoginForm from './components/LoginForm'
import ValidationErrors from './components/ValidationErrors'

export interface Errors {
  username: string | null
  password: string | null
}

export interface ActionData {
  error?: string
  errors?: Errors
  message?: string
  user?: {
    username: string
    password: string
  }
}

export default function Login() {
  const actionData = useActionData() as ActionData
  const navigate = useNavigate()
  if (actionData && actionData.user) {
    navigate('/', {
      state: actionData.user,
    })
  }
  return (
    <main className="mx-4 flex min-h-screen flex-col items-center justify-evenly">
      <h1 className="flex flex-col text-center font-lora text-5xl font-bold text-gray-50 md:flex-row md:justify-center md:gap-3 lg:text-7xl">
        CAR <span className="font-medium italic">sharing</span>
      </h1>
      <div className="flex w-full flex-col items-center gap-8 pt-28">
        <p className="text-center font-lora text-xl font-medium text-white">Log in</p>

        {actionData && <ValidationErrors actionData={actionData} />}

        <LoginForm />
      </div>
    </main>
  )
}
