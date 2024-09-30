import { BookingState } from '../../types/apiTypes'

const containerStyles = 'flex flex-col gap-2 mt-8'
const moniMustardColor = 'text-moni-mustard-200'
const moniLachsColor = 'text-moni-lachs-200'
export default function BookingStatusDetails({ state }: { state: BookingState }) {
  switch (state) {
    case BookingState.ACCEPTED:
      return (
        <div className={containerStyles}>
          <p className={moniMustardColor}>Booking accepted.</p>
          <p className={moniLachsColor}>You can not pick up your car before the agreed time.</p>
        </div>
      )
    case BookingState.DECLINED:
      return (
        <div className={containerStyles}>
          <p className="text-red-400">Booking request declined.</p>
        </div>
      )
    case BookingState.PENDING:
      return (
        <div className={containerStyles}>
          <p className={moniLachsColor}>Booking request pending.</p>
        </div>
      )
    case BookingState.RETURNED:
      return (
        <div className={containerStyles}>
          <p className={moniMustardColor}>Car was returned.</p>
        </div>
      )
    case BookingState.PICKED_UP:
      return (
        <div className={containerStyles}>
          <p className={moniMustardColor}>Car was picked up.</p>
        </div>
      )

    default:
      return (
        <div className={containerStyles}>
          <p className={moniLachsColor}>Booking request pending.</p>
        </div>
      )
  }
}
