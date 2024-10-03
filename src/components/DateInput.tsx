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

  function handleChange(date: Dayjs | null) {
    if (date) {
      setValue(date)
    }
  }

  return (
    <>
      <Input
        type="text"
        placeholder={placeholder}
        behavior={InputBehavior.INPUT}
        name={name}
        value={value ? value.format('DD/MM/YYYY hh:mm A') : ''}
        onChange={() => null}
        onClick={() => setOpen(true)}
        autoComplete="off"
        required
      />
      {open && (
        <div className="md: absolute inset-x-4 top-20 max-h-screen overflow-hidden md:mx-auto md:h-5/6 md:w-1/3 md:overflow-auto">
          <ThemeProvider theme={createTheme()}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <StaticDateTimePicker
                defaultValue={dayjs()}
                onChange={handleChange}
                onClose={() => setOpen(false)}
                onAccept={() => setOpen(false)}
                disablePast
                sx={{ color: 'black' }}
              />
            </LocalizationProvider>
          </ThemeProvider>
        </div>
      )}
    </>
  )
}
