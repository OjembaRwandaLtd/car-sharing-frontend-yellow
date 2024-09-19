import { useEffect } from 'react'
import Button, { ButtonBehavior, ButtonStyles } from '../components/UI/Button'
import { Links } from '../routes/router'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function Splash() {
  const navigate = useNavigate()
  const auth = useAuth()

  useEffect(() => {
    if (auth.token) {
      navigate(`${Links.HOME}home`, { replace: true })
      return
    }
  }, [navigate])

  return (
    <main className="w-full items-center px-4 py-10">
      <h1 className="flex flex-col text-center font-lora text-5xl font-bold text-moni-gray-100 md:flex-row md:justify-center md:gap-3 lg:text-7xl">
        CAR <span className="font-medium italic">sharing</span>
      </h1>
      <p className="mx-auto my-24 flex flex-col text-center font-lora text-xl font-medium text-moni-gray-100 lg:gap-4 lg:text-2xl">
        Start sharing your car
        <span>with the world</span>
      </p>
      <div className="flex w-full flex-col lg:mx-auto lg:w-96">
        <Button
          behavior={ButtonBehavior.LINK}
          customStyles={ButtonStyles.PRIMARY}
          path={Links.LOGIN}
        >
          Log In
        </Button>
      </div>
    </main>
  )
}
