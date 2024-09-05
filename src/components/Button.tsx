import classNames from 'classnames'
import React from 'react'
import { NavLink } from 'react-router-dom'

export enum ButtonBehavior {
  Button,
  Link,
}

export enum ButtonStyles {
  primary = 'bg-primary-white text-primary-indigo',
  secondary = 'border-2 border-white text-primary-white',
  disabled = 'bg-primary-gray text-primary-indigo',
}

interface ButtonVersion {
  behavior: ButtonBehavior.Button
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
}

interface LinkVersion {
  behavior: ButtonBehavior.Link
  path: string
}

type ButtonProps = {
  children: React.ReactNode
  customStyles: ButtonStyles
} & (ButtonVersion | LinkVersion)

export default function Button(props: ButtonProps) {
  if (props.behavior === ButtonBehavior.Button) {
    const className = classNames(
      'rounded-3xl py-3 text-center font-inter text-sm font-bold w-full',
      props.disabled ? ButtonStyles.disabled : props.customStyles,
    )
    return (
      <button className={className} disabled={props.disabled} onClick={props.onClick}>
        {props.children}
      </button>
    )
  }

  const className = classNames(
    'rounded-3xl py-3 text-center font-inter text-sm font-bold w-full',
    props.customStyles,
  )

  return (
    <NavLink to={props.path} className={className}>
      {props.children}
    </NavLink>
  )
}
