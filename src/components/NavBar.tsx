import Logo from '../assets/Logo'
import ProfileIcon from '../assets/ProfileIcon'

export default function NavBar() {
  return (
    <header className="relative z-20 flex justify-between rounded-b-lg bg-primary-blue p-5 font-inter text-gray-100 shadow-lg">
      <button>Menu</button>
      <div className="absolute left-1/2 -translate-x-1/2 rounded-full bg-primary-blue px-2 pb-3 shadow-lg">
        <button>
          <Logo />
        </button>
      </div>
      <button>
        <ProfileIcon />
      </button>
    </header>
  )
}
