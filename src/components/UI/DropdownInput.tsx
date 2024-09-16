import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { ChevronDownIcon } from '../../assets/ChevronDownIcon'
import { useState } from 'react'
import classNames from 'classnames'

export interface DropdownInputProps {
  name: string
  options: string[]
  disableOption?: boolean
}

const styles =
  'flex w-full rounded-full bg-moni-indigo-200 px-6 py-4 text-moni-gray-100 items-center'

export default function DropdownInput(props: DropdownInputProps) {
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
