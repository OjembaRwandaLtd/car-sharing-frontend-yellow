import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { ChevronDownIcon } from '../../assets/ChevronDownIcon'
import { forwardRef, useState } from 'react'
import classNames from 'classnames'

export interface DropdownInputProps extends React.HTMLAttributes<HTMLInputElement> {
  name: string
  options: string[]
  disableOption?: boolean
}

const styles =
  'flex w-full rounded-full bg-moni-indigo-200 px-6 py-4 text-moni-gray-100 items-center'

const DropdownInput = forwardRef<HTMLButtonElement, DropdownInputProps>((props, ref) => {
  const [selected, setSelected] = useState(props.options[0])

  function handleChange(value: string) {
    setSelected(value)
    if (props.onChange) {
      const event = {
        target: {
          name: props.name,
          value: value,
        },
      } as React.ChangeEvent<HTMLInputElement>

      props.onChange(event)
    }
  }

  return (
    <Listbox
      name={props.name}
      defaultValue={props.disableOption ? null : props.options[0]}
      onChange={handleChange}
    >
      <ListboxButton ref={ref} className={classNames(styles, 'justify-between')}>
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
})

DropdownInput.displayName = 'DropdownInput'
export default DropdownInput
