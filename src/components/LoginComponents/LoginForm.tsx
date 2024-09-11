import { Form } from 'react-router-dom'
import Button, { ButtonBehavior, ButtonStyles } from '../Button'
import Input, { InputBehavior } from '../Input'
import ProfileIcon from '../../assets/ProfileIcon'
import KeyIcon from '../../assets/KeyIcon'

export default function LoginForm() {
  const inputStyles =
    'border-none bg-transparent text-lg text-primary-indigo outline-none placeholder:text-primary-white text-white'
  return (
    <Form className="w-full" method="post">
      <div className="mb-16 flex w-full flex-col gap-4">
        <Input
          icon={<ProfileIcon />}
          behavior={InputBehavior.INPUT}
          className={inputStyles}
          type="text"
          name="usernameOrEmail"
          placeholder="Username / e-mail"
        />
        <Input
          icon={<KeyIcon />}
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
