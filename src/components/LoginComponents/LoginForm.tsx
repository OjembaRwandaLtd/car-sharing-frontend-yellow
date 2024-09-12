import { Form } from 'react-router-dom'
import Button, { ButtonBehavior, ButtonStyles } from '../UI/Button'
import Input, { InputBehavior } from '../UI/Input'
import ProfileIcon from '../../assets/ProfileIcon'
import KeyIcon from '../../assets/KeyIcon'
import { useState } from 'react'
import ShowEyeIcon from '../../assets/ShowEyeIcon'
import HideEyeIcon from '../../assets/HideEyeIcon'

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)

  function handleShowPassword() {
    setShowPassword(!showPassword)
  }

  return (
    <Form className="w-full md:w-1/3" method="post">
      <div className="mb-16 flex w-full flex-col gap-4">
        <Input
          icon={<ProfileIcon />}
          behavior={InputBehavior.INPUT}
          type="text"
          name="usernameOrEmail"
          placeholder="Username / e-mail"
        />
        <div className="relative flex items-center justify-between">
          <Input
            icon={<KeyIcon />}
            behavior={InputBehavior.INPUT}
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Password"
          />
          <button
            type="button"
            onClick={handleShowPassword}
            className="absolute right-4 rounded-3xl px-3 font-inter"
          >
            {showPassword ? <HideEyeIcon /> : <ShowEyeIcon />}
          </button>
        </div>
      </div>
      <Button type="submit" behavior={ButtonBehavior.BUTTON} customStyles={ButtonStyles.PRIMARY}>
        Log In
      </Button>
    </Form>
  )
}
