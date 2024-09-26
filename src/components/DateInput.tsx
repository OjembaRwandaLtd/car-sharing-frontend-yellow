import dayjs, { Dayjs } from 'dayjs'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Input, { InputBehavior } from './UI/Input'
import { Dispatch, SetStateAction, useState } from 'react'

interface DateInputProps {
  placeholder: string
  name: string
  value?: Dayjs | null
  setValue: Dispatch<SetStateAction<dayjs.Dayjs | null>>
}

export default function DateInput({ placeholder, name, setValue, value }: DateInputProps) {
  const [open, setOpen] = useState(false)
  // const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs('2024-04-17T15:30'))

  function handleChange(date: Dayjs | null) {
    if (date) {
      setValue(date)
      // setSelectedDate(date)
    }
  }
  return (
    <>
      <Input
        type="text"
        placeholder={placeholder}
        behavior={InputBehavior.INPUT}
        name={name}
        value={value?.format('MM/DD/YYYY hh:mm A')}
        onClick={() => setOpen(true)}
      />
      {open && (
        <div className="absolute inset-x-4 top-20 max-h-screen overflow-hidden">
          <ThemeProvider theme={createTheme()}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <StaticDateTimePicker
                defaultValue={dayjs(Date.now())}
                onChange={handleChange}
                onClose={() => setOpen(false)}
                onAccept={() => setOpen(false)}
                disablePast
              />
            </LocalizationProvider>
          </ThemeProvider>
        </div>
      )}
    </>
  )
}
