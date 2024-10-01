import { useNavigate } from 'react-router-dom'
import DateInput from '../../components/DateInput'
import Button, { ButtonBehavior, ButtonStyles } from '../../components/UI/Button'
import { Links } from '../../routes/router'
import { FormEvent, useState } from 'react'
import dayjs, { Dayjs } from 'dayjs'

export default function NewBooking() {
  const navigate = useNavigate()
  const [startDate, setStartDate] = useState<Dayjs | null>(null)
  const [endDate, setEndDate] = useState<Dayjs | null>(null)
  const [error, setError] = useState<string | null>(null)
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!startDate || !endDate) {
      setError('Please select start and end date')
      return
    }
    if (startDate.toISOString() > endDate.toISOString()) {
      setError('Start date cannot be greater than end date')
    }
    navigate(Links.CARS, { state: { startDate, endDate } })
  }

  return (
    <main className="mx-auto my-8 px-4 text-moni-gray-100 md:w-1/3">
      <h1 className="mb-20 text-center font-lora text-3xl font-medium text-moni-gray-100">
        BOOK CAR
      </h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        {error && <p className="text-center text-lg text-red-400">{error}</p>}
        <div className="flex flex-col gap-2">
          <label>Start date</label>
          <DateInput
            placeholder={dayjs().format('MM/DD/YYYY hh:mm A')}
            name="start-date"
            value={startDate}
            setValue={setStartDate}
          />
        </div>
        <div className="mb-20 flex flex-col gap-2">
          <label>End date</label>
          <DateInput
            placeholder={dayjs().add(1, 'hour').format('MM/DD/YYYY hh:mm A')}
            name="end-date"
            value={endDate}
            setValue={setEndDate}
          />
        </div>
        <Button type="submit" behavior={ButtonBehavior.BUTTON} customStyles={ButtonStyles.PRIMARY}>
          Search Available Cars
        </Button>
      </form>
    </main>
  )
}
