/* eslint-disable no-console */
import Button, { ButtonBehavior, ButtonStyles } from '../components/Button'
import { useActionData, Form, json, ActionFunction } from 'react-router-dom'

interface Errors {
  username: string | null
  password: string | null
}

interface ActionData {
  error?: string
  errors?: Errors
  message?: string
  user?: {
    username: string
    password: string
  }
}

export const loginAction: ActionFunction = async ({ request }) => {
  try {
    const data = await request.formData()
    const username = data.get('usernameOrEmail') as string
    const password = data.get('password') as string

    if (!username || !password) {
      return json({ error: 'Both fields are required.' })
    }

    const errors: Errors = {
      username: null,
      password: null,
    }

    if (typeof username !== 'string' || username.length < 5) {
      errors.username = 'Username must have 5 characters'
    }

    if (typeof password !== 'string' || password.length < 6) {
      errors.password = 'Password must have at least 6 characters'
    }

    // Return errors if we have them
    if (errors.password || errors.username) {
      return json({ errors })
    }

    const user = {
      username,
      password,
    }

    console.log('Database operations')
    return json({ message: 'Success', user })
  } catch (error) {
    return json({ error: 'Something went wrong.' })
  }
}

export default function Login() {
  const actionData = useActionData() as ActionData

  return (
    <main className="mx-4 flex min-h-screen flex-col items-center justify-evenly">
      <h1 className="flex flex-col text-center font-lora text-5xl font-bold text-gray-50 md:flex-row md:justify-center md:gap-3 lg:text-7xl">
        CAR <span className="font-medium italic">sharing</span>
      </h1>
      <div className="flex w-full flex-col items-center gap-8 pt-28">
        <p className="text-center font-lora text-xl font-medium text-white">Log in</p>

        {actionData && (
          <div>
            {actionData?.error && (
              <p className="text-center text-lg text-secondary-mustard">{actionData.error}</p>
            )}
            {actionData?.errors?.username && (
              <p className="text-center text-lg text-secondary-mustard">
                {actionData.errors.username}
              </p>
            )}
            {actionData?.errors?.password && (
              <p className="text-center text-lg text-secondary-mustard">
                {actionData.errors.password}
              </p>
            )}
          </div>
        )}

        <Form className="w-full" method="post">
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
          <Button
            type="submit"
            behavior={ButtonBehavior.Button}
            customStyles={ButtonStyles.primary}
          >
            Log In
          </Button>
        </Form>
      </div>
    </main>
  )
}
