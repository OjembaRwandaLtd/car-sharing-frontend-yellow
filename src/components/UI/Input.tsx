import { Input as InputField } from '@headlessui/react'
import classNames from 'classnames'
import DropdownInput from './DropdownInput'
import { DropdownInputProps } from './DropdownInput'

export enum InputBehavior {
  DROPDOWN,
  INPUT,
}

interface DropdownProps extends DropdownInputProps {
  behavior: InputBehavior.DROPDOWN
}

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  behavior: InputBehavior.INPUT
  icon?: React.ReactNode
}

type InputProps = Exclude<DropdownProps | InputFieldProps, 'className'>

const styles =
  'flex w-full rounded-full bg-moni-indigo-200 px-6 py-4 text-moni-gray-100 items-center'

export default function Input(props: InputProps) {
  if (props.behavior === InputBehavior.DROPDOWN) {
    return (
      <DropdownInput
        name={props.name}
        options={props.options}
        disableOption={props.disableOption}
      ></DropdownInput>
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
