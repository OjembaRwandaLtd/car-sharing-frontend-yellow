import DateInput from '../../components/DateInput'
import Button, { ButtonBehavior, ButtonStyles } from '../../components/UI/Button'

export default function NewBooking() {
  return (
    <main className="my-8 px-4 text-moni-gray-100">
      <h1 className="mb-20 text-center font-lora text-3xl font-medium text-moni-gray-100">
        BOOK CAR
      </h1>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label>Start date</label>
          <DateInput placeholder="06/07/2023 01:07 PM" name="start-date" />
        </div>
        <div className="mb-20 flex flex-col gap-2">
          <label>End date</label>
          <DateInput placeholder="06/07/2023 02:07 PM" name="end-date" />
        </div>
        <Button type="submit" behavior={ButtonBehavior.BUTTON} customStyles={ButtonStyles.PRIMARY}>
          Search Available Cars
        </Button>
      </form>
    </main>
  )
}
