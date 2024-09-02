import classNames from 'classnames'
import React, { ButtonHTMLAttributes } from 'react'
import { NavLink } from 'react-router-dom'

export const ButtonStyles = {
  primary: 'bg-white text-primary-indigo',
  secondary: 'border-2 border-white text-white',
  disabled: 'bg-slate-400 text-primary-indigo',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  stylesVariant: keyof typeof ButtonStyles
  functionVariant: 'button' | 'link'
  children: React.ReactNode
  path: string
  isDisabled: boolean
}

export default function Button({
  children,
  stylesVariant: variant,
  functionVariant,
  path,
  isDisabled,
}: ButtonProps) {
  function handleClick(e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement, MouseEvent>) {
    if (isDisabled) {
      e.preventDefault()
    }
  }

  const buttonClass = classNames(
    'rounded-3xl py-3 text-center font-inter text-sm font-bold w-full',
    ButtonStyles[variant],
  )

  if (functionVariant === 'button') {
    return (
      <button className={buttonClass} onClick={handleClick}>
        {children}
      </button>
    )
  }

  return (
    <NavLink to={path} className={buttonClass} onClick={handleClick}>
      {children}
    </NavLink>
  )
}
