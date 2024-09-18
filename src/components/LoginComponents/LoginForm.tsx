/* eslint-disable no-console */
import Button, { ButtonBehavior, ButtonStyles } from '../UI/Button'
import Input, { InputBehavior } from '../UI/Input'
import ProfileIcon from '../../assets/ProfileIcon'
import KeyIcon from '../../assets/KeyIcon'
import { useState } from 'react'
import ShowEyeIcon from '../../assets/ShowEyeIcon'
import HideEyeIcon from '../../assets/HideEyeIcon'
import useLogin from '../../hooks/useLogin'

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const { login, loading } = useLogin()

  function handleShowPassword() {
    setShowPassword(!showPassword)
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    try {
      await login(username, password)
    } catch (error) {
      setError(String(error))
    }
  }

  return (
    <form className="w-full md:w-1/3" method="post" onSubmit={handleSubmit}>
      {error && <p className="pb-4 text-center text-lg text-red-400">{error}</p>}
      <div className="mb-16 flex w-full flex-col gap-4">
        <Input
          icon={<ProfileIcon />}
          behavior={InputBehavior.INPUT}
          type="text"
          name="usernameOrEmail"
          placeholder="Username / e-mail"
          required={true}
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <div className="relative flex items-center justify-between">
          <Input
            icon={<KeyIcon />}
            behavior={InputBehavior.INPUT}
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Password"
            required={true}
            value={password}
            onChange={e => setPassword(e.target.value)}
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
      <Button
        disabled={loading}
        type="submit"
        behavior={ButtonBehavior.BUTTON}
        customStyles={ButtonStyles.PRIMARY}
      >
        {loading ? (
          <span className="border-secondary h-6 w-6 animate-spin rounded-full border-4 border-moni-indigo-800 border-t-transparent"></span>
        ) : (
          'Log in'
        )}
      </Button>
    </form>
  )
}
