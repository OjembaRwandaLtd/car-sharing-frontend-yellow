import HomepageCar from '../assets/HomepageCar'
import Button, { ButtonStyles, ButtonBehavior } from '../components/Button'
import { Links } from '../routes/router'

export default function Home() {
  const users = [{ username: 'Manuela' }, { username: 'Alexa' }] // Dummy data
  const buttonItems = [
    {
      name: 'See My Cars',
      pathRoute: Links.MY_CARS,
      style: ButtonStyles.secondary,
    },
    {
      name: 'See My Bookings',
      pathRoute: Links.MY_BOOKINGS,
      style: ButtonStyles.secondary,
    },
  ]

  return (
    <div className="flex w-full flex-row-reverse items-center bg-primary-indigo px-4 py-10 md:pl-24">
      <HomepageCar className="hidden md:block opacity-80" />

      <div className="w-full p-6">
        <div className="grow">
          <h1 className="flex flex-col text-center font-lora text-5xl font-bold text-gray-50 md:flex-row md:justify-center md:gap-3">
            CAR <span className="font-medium italic">sharing</span>
          </h1>
          <p className="mx-auto my-12 flex flex-col text-center font-lora text-xl font-medium text-gray-100 md:text-2xl">
            Hello {users[0].username}!!
            <span>What are you up to today?</span>
          </p>
        </div>
        <div className="flex">
          <Button path={Links.CARS} style={ButtonStyles.primary} behavior={ButtonBehavior.Link}>
            Book A car
          </Button>
        </div>
        <p className="my-7 text-center font-lora text-xl font-medium text-gray-100">or</p>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          {buttonItems.map(buttonItem => (
            <Button
              path={buttonItem.pathRoute}
              key={buttonItem.name}
              style={buttonItem.style}
              behavior={ButtonBehavior.Link}
            >
              {buttonItem.name}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
