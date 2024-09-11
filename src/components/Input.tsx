import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { ChevronDownIcon } from '../assets/ChevronDownIcon'
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
}

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  behavior: InputBehavior.INPUT
  icon?: React.ReactNode
}
type InputProps = Exclude<DropdownProps | InputFieldProps, 'className'>

export default function Input(props: InputProps) {
  const styles =
    'flex w-full rounded-full bg-light-indigo px-6 py-4 text-primary-white items-center'
  if (props.behavior === InputBehavior.DROPDOWN) {
    const [selected, setSelected] = useState(props.options[0])
    return (
      <Listbox name={props.name} defaultValue={props.options[0]} onChange={setSelected}>
        <ListboxButton className={classNames(styles, 'justify-between')}>
          {selected}
          <ChevronDownIcon />
        </ListboxButton>
        <ListboxOptions
          className="mt-2 w-[var(--button-width)] rounded-lg bg-light-indigo p-4 text-primary-white"
          anchor="bottom"
          transition
        >
          {props.options.map(option => (
            <ListboxOption
              key={option}
              value={option}
              className="rounded-lg p-2 hover:bg-black-hover focus:bg-black-hover"
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
      <input
        className=" w-full bg-transparent placeholder:text-primary-white autofill:bg-transparent focus:outline-none"
        {...otherProps}
      />
    </div>
  )
}
