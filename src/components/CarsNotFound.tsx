import { Links } from '../routes/router'
import Button, { ButtonBehavior, ButtonStyles } from './UI/Button'

export default function CarsNotFound() {
  return (
    <main className="flex flex-col items-center justify-center gap-20 p-5 text-3xl text-moni-gray-100">
      <h1 className="font-medium">You don&apos;t have any cars</h1>
      <Button
        path={Links.NEW_CAR}
        behavior={ButtonBehavior.LINK}
        customStyles={ButtonStyles.PRIMARY}
      >
        Add Car
      </Button>
    </main>
  )
}
