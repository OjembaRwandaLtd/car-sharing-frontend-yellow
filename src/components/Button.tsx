import classNames from 'classnames'
import React from 'react'
import { NavLink } from 'react-router-dom'

export const ButtonStyles = {
  primary: 'bg-primary-white text-primary-indigo',
  secondary: 'border-2 border-white text-primary-white',
  disabled: 'bg-primary-gray text-primary-indigo',
}

type DisabledButtonType = {
  isDisabled: true
  stylesVariant: 'disabled'
}

type EnabledButtonType = {
  isDisabled: false
  stylesVariant: Exclude<keyof typeof ButtonStyles, 'disabled'>
}
type ButtonType = {
  functionVariant: 'button'
  handleClick: () => void
} & (DisabledButtonType | EnabledButtonType)

type LinkType = {
  stylesVariant: Exclude<keyof typeof ButtonStyles, 'disabled'>
  functionVariant: 'link'
  path: string
}

type ButtonProps = {
  children: React.ReactNode
} & (ButtonType | LinkType)

export default function Button(props: ButtonProps) {
  const buttonClass = classNames(
    'rounded-3xl py-3 text-center font-inter text-sm font-bold w-full',
    ButtonStyles[props.stylesVariant],
  )

  if (props.functionVariant === 'button') {
    return (
      <button className={buttonClass} disabled={props.isDisabled} onClick={props.handleClick}>
        {props.children}
      </button>
    )
  }

  return (
    <NavLink to={props.path} className={buttonClass}>
      {props.children}
    </NavLink>
  )
}
