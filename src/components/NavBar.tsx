import Logo from '../assets/Logo'
import ProfileIcon from '../assets/ProfileIcon'
import MenuList from './MenuList'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <header className="sticky top-0 z-20 flex justify-between rounded-b-lg bg-primary-blue p-5 font-inter text-gray-100 shadow-lg">
      <MenuList />
      <NavLink
        to="/"
        className="absolute left-1/2 -translate-x-1/2 rounded-b-full bg-primary-blue px-4 pb-3 shadow-lg"
      >
        <Logo className="pb-2" />
      </NavLink>
      <NavLink to="/">
        <ProfileIcon />
      </NavLink>
    </header>
  )
}
