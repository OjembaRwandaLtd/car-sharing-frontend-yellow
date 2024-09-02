import classNames from 'classnames'
import Logo from '../assets/Logo'
import { NavLink } from 'react-router-dom'

interface NavBarProps {
  className?: string
  MenuList?: React.ReactNode
  ProfileIcon?: React.ReactNode
}

export default function NavBar({ className = '', MenuList, ProfileIcon }: Readonly<NavBarProps>) {
  const hasIcons = MenuList || ProfileIcon

  const navClassname = classNames(
    'sticky top-0 z-20 flex justify-between rounded-b-lg bg-primary-blue p-5 font-inter text-gray-100 shadow-lg',
    {
      [className]: !hasIcons,
    },
  )

  return (
    <header className={navClassname}>
      {MenuList}
      <NavLink
        to={hasIcons ? '/' : ''}
        className="absolute left-1/2 -translate-x-1/2 rounded-b-full bg-primary-blue px-4 pb-3 shadow-lg"
      >
        <Logo className="pb-2" />
      </NavLink>
      {ProfileIcon && <NavLink to="/">{ProfileIcon}</NavLink>}
    </header>
  )
}
