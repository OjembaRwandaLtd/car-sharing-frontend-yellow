import Button from '../components/Button'

export default function Home() {
  const users = [{ username: 'Manuela' }, { username: 'Alexa' }] // Dummy data
  const buttonItems = [
    {
      name: 'See My Cars',
      variant: 'primary' as const,
      disabled: false,
      handleClick: () => {},
    },
    {
      name: 'See My Bookings',
      variant: 'secondary' as const,
      disabled: false,
      handleClick: () => {},
    },
  ]

  return (
    <div className="h-screen w-full px-4 py-10">
      <h1 className="flex flex-col bg-primary-white text-center font-lora text-5xl font-bold">
        CAR <span className="font-medium italic">sharing</span>
      </h1>
      <p className="mx-auto my-12 flex flex-col bg-primary-white text-center font-lora text-xl font-medium">
        Hello {users[0].username}!!
        <span>What are you up to today?</span>
      </p>
      <Button variant="primary" disabled={false} handleClick={() => {}}>
        Book A car
      </Button>
      <p className="my-7 bg-primary-white text-center font-lora text-xl font-medium">or</p>
      <div className="flex flex-col gap-4">
        {buttonItems.map((buttonItem, index) => (
          <Button
            key={index}
            variant={buttonItem.variant}
            disabled={buttonItem.disabled}
            handleClick={buttonItem.handleClick}
          >
            {buttonItem.name}
          </Button>
        ))}
      </div>
    </div>
  )
}
