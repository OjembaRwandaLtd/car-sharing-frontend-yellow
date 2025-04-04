import carPicture from '../assets/Homepage-car.avif'
import Button, { ButtonStyles, ButtonBehavior } from '../components/UI/Button'
import { useUserContext } from '../contexts/UserContext'
import { Links } from '../routes/router'

export default function Home() {
  const loggedUser = useUserContext()
  const buttonItems = [
    {
      name: 'See My Cars',
      pathRoute: Links.MY_CARS,
      style: ButtonStyles.SECONDARY,
    },
    {
      name: 'See My Bookings',
      pathRoute: Links.MY_BOOKINGS,
      style: ButtonStyles.SECONDARY,
    },
  ]

  return (
    <main className="grid w-full items-center bg-moni-indigo-800 px-4 py-10 lg:mx-auto lg:mt-10 lg:max-w-7xl lg:grid-cols-2 lg:py-0 lg:pl-24">
      <img
        src={carPicture}
        alt="car"
        className="mx-auto hidden opacity-80 drop-shadow-blue md:block lg:order-2"
      />
      <div className="w-full p-6 lg:order-1">
        <div className="grow">
          <h1 className="flex flex-col text-center font-lora text-5xl font-bold text-moni-gray-100 md:flex-row md:justify-center md:gap-3 lg:text-7xl">
            CAR <span className="font-medium italic">sharing</span>
          </h1>
          <p className="mx-auto my-12 flex flex-col text-center font-lora text-xl font-medium text-moni-gray-100 lg:gap-4 lg:text-2xl">
            Hello {loggedUser.name}!<span>What are you up to today?</span>
          </p>
        </div>
        <div className="flex">
          <Button
            path={Links.NEW_BOOKING}
            customStyles={ButtonStyles.PRIMARY}
            behavior={ButtonBehavior.LINK}
          >
            Book Car
          </Button>
        </div>
        <p className="my-7 text-center font-lora text-xl font-medium text-gray-100">or</p>
        <div className="flex flex-col gap-4 md:flex-row md:gap-8">
          {buttonItems.map(buttonItem => (
            <Button
              path={buttonItem.pathRoute}
              key={buttonItem.name}
              customStyles={buttonItem.style}
              behavior={ButtonBehavior.LINK}
            >
              {buttonItem.name}
            </Button>
          ))}
        </div>
      </div>
    </main>
  )
}
