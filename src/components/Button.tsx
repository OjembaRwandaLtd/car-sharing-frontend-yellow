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

interface ButtonProps {
  children: React.ReactNode
  behavior: ButtonBehavior
  style: string
  disabled?: boolean
  path?: string
  onClick?: () => void
}

function Button({
  children,
  behavior,
  style = ButtonStyles.primary,
  disabled = false,
  path: href,
  onClick,
}: ButtonProps) {
  const className = classNames(
    'rounded-3xl py-3 text-center font-inter text-sm font-bold w-full',
    disabled ? ButtonStyles.disabled : style,
  )

  if (behavior === ButtonBehavior.Button) {
    return (
      <button className={className} disabled={disabled} onClick={onClick}>
        {children}
      </button>
    )
  }

  return (
    href && (
      <NavLink to={href} className={className}>
        {children}
      </NavLink>
    )
  )
}

export default Button
