import Button from '../components/Button'
import { LINKS } from '../routes/router'

export default function Home() {
  const users = [{ username: 'Manuela' }, { username: 'Alexa' }] // Dummy data
  const buttonItems = [
    {
      name: 'See My Cars',
      pathRoute: LINKS.MY_CARS,
      stylesVariant: 'disabled' as const,
      isDisabled: true,
      functionVariant: 'button',
    },
    {
      name: 'See My Bookings',
      pathRoute: LINKS.MY_BOOKINGS,
      stylesVariant: 'secondary' as const,
      isDisabled: false,
      functionVariant: 'button',
    },
  ]

  return (
    <>
      <div className="h-screen w-full bg-primary-indigo px-4 py-10">
        <h1 className="flex flex-col text-center font-lora text-5xl font-bold text-gray-50">
          CAR <span className="font-medium italic">sharing</span>
        </h1>
        <p className="mx-auto my-12 flex flex-col text-center font-lora text-xl font-medium text-gray-100">
          Hello {users[0].username}!!
          <span>What are you up to today?</span>
        </p>
        <Button
          path={LINKS.NEW_BOOKING}
          stylesVariant="primary"
          isDisabled={false}
          functionVariant="button"
        >
          Book A car
        </Button>
        <p className="my-7 text-center font-lora text-xl font-medium text-gray-100">or</p>
        <div className="flex flex-col gap-4">
          {buttonItems.map((buttonItem, index) => (
            <Button
              path={buttonItem.pathRoute}
              key={index}
              stylesVariant={buttonItem.stylesVariant}
              isDisabled={buttonItem.isDisabled}
              functionVariant="button"
            >
              {buttonItem.name}
            </Button>
          ))}
        </div>
      </div>
    </>
  )
}
