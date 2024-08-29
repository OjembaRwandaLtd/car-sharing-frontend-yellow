import Logo from '../assets/Logo'
import ProfileIcon from '../assets/ProfileIcon'
import MenuList from './MenuList'

export default function NavBar() {
  return (
    <header className="relative z-20 flex justify-between rounded-b-lg bg-primary-blue p-5 font-inter text-gray-100 shadow-lg">
      <MenuList />
      <button className="absolute left-1/2 -translate-x-1/2 rounded-b-full bg-primary-blue px-4 pb-3 shadow-lg">
        <Logo className="pb-2" />
      </button>
      <button>
        <ProfileIcon />
      </button>
    </header>
  )
}
