import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { ChevronDownIcon } from '../assets/ChevronDownIcon'

export enum InputBehavior {
  Dropdown,
  Input,
}
interface DropdownProps {
  behavior: InputBehavior.Dropdown
  value: string
  onChange: (value: string) => void
  options: string[]
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  behavior: InputBehavior.Input
  icon?: React.ReactNode
}

export default function Input(props: InputProps | DropdownProps) {
  const styles = 'flex w-full rounded-full bg-light-indigo px-6 py-4 text-primary-white'
  if (props.behavior === InputBehavior.Dropdown) {
    return (
      <div className="relative ">
        <Listbox value={props.value} onChange={props.onChange}>
          <ListboxButton className={`${styles} items-center justify-between`}>
            {props.value}
            <ChevronDownIcon />
          </ListboxButton>
          <ListboxOptions
            className="mt-2 w-[var(--button-width)] rounded-lg bg-light-indigo p-2 text-white"
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
      </div>
    )
  }
  const { icon, ...otherProps } = props
  return (
    <div className={`${styles} gap-4`}>
      {icon}
      <input
        className=" w-full bg-transparent placeholder:text-primary-white focus:outline-none"
        {...otherProps}
      />
    </div>
  )
}
