import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Input as InputField,
} from '@headlessui/react'
import { ChevronDownIcon } from '../../assets/ChevronDownIcon'
import { useState } from 'react'
import classNames from 'classnames'

export enum InputBehavior {
  DROPDOWN,
  INPUT,
}
interface DropdownProps {
  behavior: InputBehavior.DROPDOWN
  name: string
  options: string[]
  disableOption?: boolean
}

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  behavior: InputBehavior.INPUT
  icon?: React.ReactNode
}
type InputProps = Exclude<DropdownProps | InputFieldProps, 'className'>

export default function Input(props: InputProps) {
  const styles =
    'flex w-full rounded-full bg-moni-indigo-200 px-6 py-4 text-moni-gray-100 items-center'
  if (props.behavior === InputBehavior.DROPDOWN) {
    const [selected, setSelected] = useState(props.options[0])
    return (
      <Listbox
        name={props.name}
        defaultValue={props.disableOption ? null : props.options[0]}
        onChange={setSelected}
      >
        <ListboxButton className={classNames(styles, 'justify-between')}>
          {selected}
          <ChevronDownIcon />
        </ListboxButton>
        <ListboxOptions
          className="mt-2 w-[var(--button-width)] rounded-lg bg-moni-indigo-200 p-4 text-moni-gray-100"
          anchor="bottom"
          transition
        >
          {props.options.map((option, index) => (
            <ListboxOption
              key={option}
              value={option}
              disabled={props.disableOption && index === 0}
              className="rounded-lg p-2 hover:bg-moni-light-black focus:bg-moni-light-black"
            >
              {option}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    )
  }
  const { icon, ...otherProps } = props
  return (
    <div className={classNames(styles, 'gap-4')}>
      {icon}
      <InputField
        className=" w-full bg-transparent placeholder:text-moni-gray-100 autofill:bg-transparent focus:outline-none"
        {...otherProps}
      />
    </div>
  )
}
