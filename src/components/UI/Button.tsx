import classNames from 'classnames'
import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import { NavLink } from 'react-router-dom'

export enum ButtonBehavior {
  BUTTON,
  LINK,
}

export enum ButtonStyles {
  PRIMARY = 'bg-primary-white text-primary-indigo',
  SECONDARY = 'border-2 border-white text-primary-white',
  DISABLED = 'bg-primary-gray text-primary-indigo',
}

interface ButtonVersion extends ButtonHTMLAttributes<HTMLButtonElement> {
  behavior: ButtonBehavior.BUTTON
}

interface LinkVersion extends AnchorHTMLAttributes<HTMLAnchorElement> {
  behavior: ButtonBehavior.LINK
  path: string
}

// Here we used type for intersecting ButtonVersion and LinkVersion
type ButtonProps = {
  children: React.ReactNode
  customStyles: ButtonStyles
} & (ButtonVersion | LinkVersion)

export default function Button(props: ButtonProps) {
  const sharedStyles = 'rounded-3xl py-3 text-center font-inter text-sm font-bold w-full'
  if (props.behavior === ButtonBehavior.BUTTON) {
    const className = classNames(
      sharedStyles,
      props.disabled ? ButtonStyles.DISABLED : props.customStyles,
    )
    return (
      <button className={className} disabled={props.disabled} onClick={props.onClick}>
        {props.children}
      </button>
    )
  }

  const className = classNames(sharedStyles, props.customStyles)

  return (
    <NavLink to={props.path} className={className}>
      {props.children}
    </NavLink>
  )
}
