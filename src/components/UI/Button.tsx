import classNames from 'classnames'
import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import { NavLink } from 'react-router-dom'

export enum ButtonBehavior {
  BUTTON,
  LINK,
}

export enum ButtonStyles {
  PRIMARY = 'bg-moni-gray-100 text-moni-indigo-800',
  SECONDARY = 'border-2 border-moni-gray-100 text-moni-gray-100',
  DISABLED = 'bg-moni-gray-200 text-moni-indigo-800',
  DELETE = 'border-2 border-moni-lachs-200 text-moni-lachs-200',
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

const sharedStyles =
  'rounded-3xl py-3 text-center font-inter text-sm font-bold w-full flex items-center justify-center'

export default function Button(props: ButtonProps) {
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
