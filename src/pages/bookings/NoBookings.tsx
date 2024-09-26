import Button, { ButtonBehavior, ButtonStyles } from '../../components/UI/Button'
import { Links } from '../../routes/router'

export default function NoBookings() {
  return (
    <div className="mx-8 my-24 flex flex-col gap-9 py-4 text-center text-xl">
      <p className=" italic text-moni-gray-100">You {"don't"} have any bookings yet</p>
      <Button
        behavior={ButtonBehavior.LINK}
        customStyles={ButtonStyles.PRIMARY}
        path={Links.MY_CARS}
      >
        See My Cars
      </Button>
    </div>
  )
}
