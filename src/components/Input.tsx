import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { ChevronDownIcon } from '../assets/ChevronDownIcon'
import { useState } from 'react'
import classNames from 'classnames'

export enum InputBehavior {
  Dropdown,
  Input,
}
interface DropdownProps {
  behavior: InputBehavior.Dropdown
  name: string
  options: string[]
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  behavior: InputBehavior.Input
  icon?: React.ReactNode
}

export default function Input(props: InputProps | DropdownProps) {
  const styles = 'flex w-full rounded-full bg-light-indigo px-6 py-4 text-primary-white'
  if (props.behavior === InputBehavior.Dropdown) {
    const [selected, setSelected] = useState(props.options[0])
    return (
      <Listbox name={props.name} defaultValue={props.options[0]} onChange={setSelected}>
        <ListboxButton className={classNames(styles, 'items-center justify-between')}>
          {selected}
          <ChevronDownIcon />
        </ListboxButton>
        <ListboxOptions
          className="mt-2 w-[var(--button-width)] rounded-lg bg-light-indigo p-2 text-primary-white"
          anchor="bottom"
          transition
        >
          {props.options.map(option => (
            <ListboxOption
              key={option}
              value={option}
              className="hover:bg-blue-100/50 focus:bg-blue-100/50"
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
        className=" w-full bg-transparent placeholder:text-primary-white focus:outline-none"
        {...otherProps}
      />
    </div>
  )
}
