import { Form } from 'react-router-dom'
import Button, { ButtonBehavior, ButtonStyles } from '../Button'
import Input, { InputBehavior } from '../Input'

export default function LoginForm() {
  const inputStyles =
    'border-none bg-transparent text-lg text-primary-white outline-none placeholder:text-primary-white'
  return (
    <Form className="w-full" method="post">
      <div className="mb-16 flex w-full flex-col gap-4">
        <Input
          behavior={InputBehavior.INPUT}
          className={inputStyles}
          type="text"
          name="usernameOrEmail"
          placeholder="Username / e-mail"
        />
        <Input
          behavior={InputBehavior.INPUT}
          className={inputStyles}
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
