import { Form } from 'react-router-dom'
import Button, { ButtonBehavior, ButtonStyles } from '../../../components/Button'

export default function LoginForm() {
  return (
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
      <Button type="submit" behavior={ButtonBehavior.Button} customStyles={ButtonStyles.primary}>
        Log In
      </Button>
    </Form>
  )
}
